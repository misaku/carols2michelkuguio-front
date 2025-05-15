import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter, Navigate, Route, Routes} from "react-router";
import {SmoothScroll} from "./components/SmoothScrooll.tsx";
import {ParallaxProvider} from "react-scroll-parallax";
import InvitePage from "./InvitePage.tsx";
import {Lgpd} from "./Lgpd.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ParallaxProvider>
            <BrowserRouter>
                <SmoothScroll>
                    <Routes>
                        <Route path="/confirmacao" element={<InvitePage/>}/>
                        <Route path="/*" element={<App/>}/>
                        <Route path="/politica-de-privacidade" element={<Lgpd/>}/>
                        {/*/!* Rotas separadas (exemplo: carrinho de compras) *!/*/}
                        {/*<Route path="/presenteie-os-noivos" element={<Cart />} />*/}

                        {/* Rota padrão: redireciona para a home */}
                        <Route path="*" element={<Navigate to="/"/>}/>

                    </Routes>
                </SmoothScroll>
            </BrowserRouter>
        </ParallaxProvider>

    </StrictMode>,
)
