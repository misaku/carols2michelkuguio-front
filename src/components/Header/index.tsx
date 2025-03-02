import {TimeLeft} from "../TimeLeft";
import {ContentHeader, HeaderText, HeaderWrapper, NavBar, WrapperContent, WrapperNavBar} from "./header.styles.tsx";


export const Header = () => {
    const targetDate = "2025-09-27T17:00:00Z";
    return (
        <>
            <HeaderWrapper>
                <WrapperNavBar>
                    <NavBar>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Quem Somos</a></li>
                            <li><a href="#">Nossa História</a></li>
                            <li><a href="#">Confirmação</a></li>
                            <li><a href="#">Presenteie os Noivos</a></li>
                            <li><a href="#">Local</a></li>
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