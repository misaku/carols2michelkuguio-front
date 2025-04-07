import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter, Navigate, Route, Routes} from "react-router";
import {SmoothScroll} from "./components/SmoothScrooll.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>

        <BrowserRouter>
            <SmoothScroll>
                <Routes>


                    <Route path="/*" element={<App/>}/>

                    {/*/!* Rotas separadas (exemplo: carrinho de compras) *!/*/}
                    {/*<Route path="/presenteie-os-noivos" element={<Cart />} />*/}

                    {/* Rota padrão: redireciona para a home */}
                    <Route path="*" element={<Navigate to="/"/>}/>

                </Routes>
            </SmoothScroll>
        </BrowserRouter>


    </StrictMode>,
)
