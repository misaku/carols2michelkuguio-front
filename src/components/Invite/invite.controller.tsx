import * as React from "react";
import {useCallback, useEffect, useMemo, useState} from "react";
import {api} from "../../service.ts";
import {useForm} from "react-hook-form";
import {RequestProps, ResponseProps} from "./invite.types.tsx";
import {useNavigate, useSearchParams} from "react-router";
import {useReadyStore} from "../../ready.store.ts";

export const useInviteController = () => {
    const [phone, setPhone] = useState("");
    const [inviteType, setInviteType] = useState<'madrinha_e_padrinho' | 'padrinho' | 'madrinha' | 'convidado'>();
    const [responseData, setResponseData] = useState<ResponseProps>();
    const [requestData, setRequestData] = useState<RequestProps>();
    const [loading, setLoading] = useState<boolean>(false);
    const {control, handleSubmit} = useForm();
    const [searchParams, setSearchParams] = useSearchParams();
    const {makeInviteReady} = useReadyStore();
    const invite = useMemo(()=>searchParams.get('invite'),[searchParams]);
    const clearInvite = useCallback(() => {
        searchParams.delete("invite");
        setSearchParams(searchParams);
    },[searchParams, setSearchParams]);
    const navigate = useNavigate();
    const clearAll = useCallback(() => {
        clearInvite();
        setInviteType(undefined)
        setResponseData(undefined)
        setRequestData(undefined)
        setPhone('')
    },[clearInvite]);


    const applyMask = useCallback((value: string) => {
        value = value.replace(/\D/g, "");

        if (value.length > 11) value = value.slice(0, 11);

        if (value.length > 10) {
            return value.replace(/(\d{2})(\d{1})(\d{4})(\d{0,4})/, "($1) $2 $3-$4");
        } else if (value.length > 6) {
            return value.replace(/(\d{2})(\d{4})(\d{0,4})/, "($1) $2-$3");
        } else if (value.length > 2) {
            return value.replace(/(\d{2})(\d{0,4})/, "($1) $2");
        } else if (value.length > 0) {
            return value.replace(/(\d{0,2})/, "($1");
        }

        return value;
    }, []);


    const handleChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            setPhone(applyMask(e.target.value));
        },
        [applyMask]
    );

    const handleSearch = useCallback(async () => {
        if (phone||invite) {
            setLoading(true);
            try {
                await new Promise(resolve => setTimeout(resolve, 2000));
                const uri = invite?`/invite/uuid/${invite}`:`/invite/${phone}`;
                const response = await api.get(uri);
                const hasPadrinho = response.data.users.some((user?: {
                    honor?: { title?: string; };
                }) => user?.honor?.title?.toLowerCase() === 'padrinho')
                const hasMadrinha = response.data.users.some((user?: {
                    honor?: { title?: string; };
                }) => user?.honor?.title?.toLowerCase() === 'madrinha')
                if (hasPadrinho && hasMadrinha) {
                    setInviteType('madrinha_e_padrinho')
                } else if (hasPadrinho) {
                    setInviteType('padrinho')
                } else if (hasMadrinha) {
                    setInviteType('madrinha')
                } else {
                    setInviteType('convidado')
                }
                setResponseData(response.data)
            } catch (e) {
                clearAll()
                console.error({e});
            } finally {
                setLoading(false);
            }

        }
    }, [phone, invite, clearAll])
    const updateInvite = useCallback(async (payload: RequestProps) => {
        const response = await api.patch(`/invite/${responseData?.id}`, payload)
        if (response) {
            clearAll()
            navigate(`/home`)
        }
    },[clearAll, navigate, responseData?.id])
    const confirm = useCallback(async () => {
        const payload: RequestProps = {
            confirmation: true,
            users: responseData?.users.map(user => ({id: user.id, confirmation: true}))
        }
        const cuntHonors = responseData?.users.filter(user => !!user.honor).length
        if (cuntHonors == responseData?.users?.length || cuntHonors == 0 && responseData?.users?.length ==1) {
            await updateInvite(payload)
            return;
        }
        setRequestData(payload)
    },[responseData, updateInvite])
    const finish = handleSubmit(async (formData) => {

        const payload = {
            ...requestData,
            users: requestData?.users?.map(user => ({id: user.id, confirmation: formData[user.id.toString()]}))
        } as RequestProps;

        await updateInvite(payload)
    });
    const recuse = useCallback(async () => {
        const payload = {
            confirmation: false,
            users: responseData?.users.map(user => ({id: user.id, confirmation: false}))
        }
        const response = await api.patch(`/invite/${responseData?.id}`, payload)
        if (response) {
            clearAll()
            navigate(`/home`)
        }
    },[clearAll, navigate, responseData?.id, responseData?.users])

    const needConfirmation = useMemo(()=> responseData?.confirmation === null || responseData?.confirmation === undefined, [responseData])
    useEffect(()=>{
        if(invite) handleSearch().then()
    },[handleSearch, invite])
    useEffect(() => {
        makeInviteReady();
    }, [makeInviteReady]);
    return {
        recuse,
        confirm,
        handleSearch,
        handleChange,
        control,
        loading,
        inviteType,
        invite,
        responseData,
        requestData,
        phone,
        finish,
        needConfirmation
    }
}
