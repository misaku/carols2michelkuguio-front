import {
    ContainerSubHeader,
    ContentHeader,
    HeaderText,
    HeaderWrapper, Line,
    Ring,
    WrapperContent
} from "./sub-header.styles.tsx";

interface ContainerSubHeaderProps {
    invert?: boolean
    title: string
}
export const SubHeader:React.FC<ContainerSubHeaderProps> = ({title, invert=false}) => {
    return (

        <HeaderWrapper>
            <ContainerSubHeader invert={invert}>
                <ContentHeader>
                    <WrapperContent>
                        <HeaderText>
                            <strong>{title}</strong>
                        </HeaderText>
                        <Line><Ring /></Line>
                    </WrapperContent>
                </ContentHeader>
            </ContainerSubHeader>
        </HeaderWrapper>

    );
};