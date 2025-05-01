import React, { useEffect } from "react";
import { useLocation } from "react-router";

export const SmoothScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const location = useLocation();

    useEffect(() => {
        const sectionId = location.pathname.substring(1);
        if (sectionId) {
            const element = document.getElementById(sectionId);

            if (element) {
                const headerOffset = window.innerWidth <= 650 ? 450 : 80;
                // Defina o valor do deslocamento, considerando a altura do cabeçalho fixo
                const elementPosition = element.getBoundingClientRect().top + window.scrollY; // Posição do elemento
                const offsetPosition = elementPosition - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth",
                });
            }
        } else if (location.pathname === "/") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    }, [location]);

    return <>{children}</>;
};

