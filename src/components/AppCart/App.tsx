import {useEffect, useState} from 'react';

import Loader from '../../components/Loader';

import Filter from '../../components/Filter';
import Products from '../../components/Products';
import Cart from '../../components/Cart';

import {useProducts} from '../../contexts/products-context';

import * as S from './style';
import {NavigationHeader} from "../NavigationHeader";
import {FirstSubHeader} from "../FirstSubHeader";
import {useModalStore} from "../../store/modal.store.ts";

function AppCart() {
    const {isFetching, products, fetchProducts} = useProducts();
    const {isOpen, setClose} = useModalStore()
    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (<>
            {isOpen && (<S.BackgroundCard>

                <S.Card>
                    <p>Olá!</p>
                    <p>Queremos compartilhar um detalhe sobre nossa lista de presentes: os itens são simbólicos. Ao
                        escolher um presente, você estará contribuindo com o valor correspondente em dinheiro – dessa
                        forma, ao final, reuniremos todos os valores para comprarmos juntos os itens escolhidos.</p>
                    <p>Se desejar que sua contribuição seja destinada a algum item específico, é só deixar um recadinho
                        pra gente na mensagem!</p>
                    <p>Ah, e ao realizar sua contribuição, será solicitado o seu endereço – não se preocupe, ele é
                        exigido apenas por questões de segurança do provedor de pagamento, e não será utilizado para
                        enviar nada.</p>
                    <p>Agradecemos de coração pelo carinho e por fazer parte desse momento tão especial!</p>
                    <p>Com carinho,<br/>
                        Crolina e Michel.</p>
                    <S.CardButton onClick={setClose}>Clique para continuar</S.CardButton>
                </S.Card>

            </S.BackgroundCard>)}
            <NavigationHeader hasCart={true}/>

            <FirstSubHeader title={'Presenteie o noivos'} id={'presenteie-os-noivos'} invert={true}/>
            <S.Container>

                {isFetching && <Loader/>}
                <S.TwoColumnGrid>
                    <S.Side>
                        <Filter/>
                    </S.Side>
                    <S.Main>
                        <S.MainHeader>
                            <p>{products?.length} Produto(s) encontrado(s)</p>
                        </S.MainHeader>
                        <Products products={products}/>
                    </S.Main>
                </S.TwoColumnGrid>
                <Cart/>
            </S.Container>

        </>

    );
}

export default AppCart;
