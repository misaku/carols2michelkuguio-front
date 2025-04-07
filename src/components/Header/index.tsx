import {TimeLeft} from "../TimeLeft";
import {
    ContentHeader,
    HeaderText,
    HeaderWrapper,
    NavBar,
    WrapperContent,
    WrapperIcon,
    WrapperNavBar
} from "./header.styles.tsx";
import {useEffect, useState} from "react";
import {Link} from "react-router";
import { IoIosMenu } from "react-icons/io";
export const Header = () => {
    const targetDate = "2025-09-27T17:00:00Z";
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const changeOpen = () => setIsOpen(current => !current);

    const sections = [
        "home",
        "quem-somos",
        "nossa-historia",
        "confirmacao",
        "presenteie-os-noivos",
        "local",
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const sectionId = entry.target.id;
                        setActiveSection(sectionId);
                        window.history.replaceState(null, "", `${sectionId}`);
                    }
                });
            },
            {
                root: null,
                threshold: 0.1,
                rootMargin: "-100px 0px -300px 0px",
            }
        );

        sections.forEach((id) => {
            const element = document.getElementById(id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            sections.forEach((id) => {
                const element = document.getElementById(id);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, [sections]);

    return (
        <>
            <HeaderWrapper id={'home'} menuIsOpen={isOpen}>
                <WrapperNavBar isScrolled={isScrolled}>
                    <WrapperIcon onClick={changeOpen}><IoIosMenu/></WrapperIcon>
                    <NavBar isScrolled={isScrolled} isOpen={isOpen}>
                        <ul>
                            <li className={activeSection === "home" ? "active" : ""}>
                                <Link to="/">Home</Link>
                            </li>
                            <li className={activeSection === "quem-somos" ? "active" : ""}>
                                <Link to="/quem-somos">Quem Somos</Link>
                            </li>
                            <li className={activeSection === "nossa-historia" ? "active" : ""}>
                                <Link to="/nossa-historia">Nossa História</Link>
                            </li>
                            <li className={activeSection === "confirmacao" ? "active" : ""}>
                                <Link to="/confirmacao">Confirmação</Link>
                            </li>
                            <li>
                                <Link to="/presenteie-os-noivos">Presenteie os Noivos</Link> {/* Carrinho separado */}
                            </li>
                        </ul>
                    </NavBar>

                </WrapperNavBar>
                <ContentHeader>
                    <WrapperContent>
                        <HeaderText>
                            <strong>Carol</strong>
                            <span>&</span>
                            <strong>Michel</strong>
                        </HeaderText>
                    </WrapperContent>
                </ContentHeader>
                <TimeLeft targetDate={targetDate}/>
            </HeaderWrapper>
        </>
    );
};
