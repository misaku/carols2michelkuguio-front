import {
    ContainerSubHeader,
    ContentHeader,
    HeaderText,
    HeaderWrapper, Line,
    Ring,
    WrapperContent
} from "./sub-header.styles.tsx";

import minhaFoto from '../../assets/flowb.jpeg'
interface ContainerSubHeaderProps {
    invert?: boolean
    title: string
    id:string;
}
export const SubHeader:React.FC<ContainerSubHeaderProps> = ({title, invert=false, id}) => {
    return (
        <HeaderWrapper id={id}  layers={[
            {
                image: minhaFoto,
                speed: -20,
            },
        ]}>
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
