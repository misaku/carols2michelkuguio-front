import {
    ContainerSubHeader,
    ContentHeader,
    HeaderText,
    HeaderWrapper, Line,
    Ring,
    WrapperContent
} from "./sub-header.styles.tsx";


export const SubHeader = () => {
    return (

        <HeaderWrapper>
            <ContainerSubHeader>
                <ContentHeader>
                    <WrapperContent>
                        <HeaderText>
                            <strong>Nossa Historia</strong>
                        </HeaderText>
                        <Line><Ring /></Line>
                    </WrapperContent>
                </ContentHeader>
            </ContainerSubHeader>
        </HeaderWrapper>

    );
};