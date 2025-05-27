import React, {useEffect, useMemo} from "react";
import { useLocation } from "react-router";
import {useReadyStore} from "../ready.store.ts";

export const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const location = useLocation();
    const {headerReady, aboutUsReady, inviteReady, timeLineReady} = useReadyStore();
    const isReady = useMemo(() => (headerReady && aboutUsReady && timeLineReady)  ||  (headerReady && inviteReady), [aboutUsReady, headerReady, inviteReady, timeLineReady]);
    useEffect(() => {
        if(isReady){
            const sectionId = location.pathname.substring(1);
            if (sectionId) {
                const element = document.getElementById(sectionId);

                if (element) {
                    const headerOffset = 80;
                    // Defina o valor do deslocamento, considerando a altura do cabeçalho fixo
                    const elementPosition = element.getBoundingClientRect().top + window.scrollY; // Posição do elemento
                    const offsetPosition = elementPosition - headerOffset;
                    setTimeout(()=>{
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: "smooth",
                        });
                    },300)

                }
            } else if (location.pathname === "/") {
                window.scrollTo({top: 0, behavior: "smooth"});
            }
        }


    }, [location, isReady]);

    return <>{children}</>;
};

