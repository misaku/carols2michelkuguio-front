import {Header} from './components/Header'
import {GlobalStyle} from './App.styles'

import styled from 'styled-components';
import {AboutUs} from "./components/AboutUs";
import {SubHeader} from "./components/SubHeader";
import TimeLine from "./components/TimeLine";
import {Invite} from "./components/Invite";


function App() {

    return (
        <>
            <GlobalStyle/>
            <Header></Header>
            <AboutUs />
            <SubHeader title={'Nossa Historia'}  invert={false}/>
            <TimeLine />
            <SubHeader title={'Convite'}  invert={true}/>
            <Invite type={'padrinho'} name={'luan'} />
        </>
    )
}

export default App
