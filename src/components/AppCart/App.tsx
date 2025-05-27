import {useEffect} from 'react';

import Loader from '../../components/Loader';

import Filter from '../../components/Filter';
import Products from '../../components/Products';
import Cart from '../../components/Cart';

import {useProducts} from '../../contexts/products-context';

import * as S from './style';
import {NavigationHeader} from "../NavigationHeader";
import {FirstSubHeader} from "../FirstSubHeader";

function AppCart() {
    const {isFetching, products, fetchProducts} = useProducts();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts]);

    return (<>

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
