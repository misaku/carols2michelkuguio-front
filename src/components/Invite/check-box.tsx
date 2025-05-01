import {Label} from "./invite.styles.tsx";
import * as React from "react";
import {useMemo} from "react";
interface CheckBox {
    name: string;
    id: string;
    checked: boolean;
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    typeUser?: string;
}
export const CheckBox:React.FC<CheckBox> = ({name, id, checked, onChange, typeUser='convidado'})=>{
    const tpUser = useMemo(()=>typeUser.toLowerCase(),[typeUser]);
    return (
        <Label>
            {tpUser=='padrinho'&&'🥂 Cumpadi '}{tpUser=='madrinha'&&'💖 Cumadi '}{name}
            <input
                name={id}
                type="checkbox"
                checked={checked}
                onChange={onChange}
                disabled={['padrinho','madrinha'].includes(tpUser)}
            />
            <span className="checkmark"></span>
        </Label>
    );
}
