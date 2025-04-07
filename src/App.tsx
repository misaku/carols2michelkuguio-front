import {Header} from './components/Header'
import {GlobalStyle} from './App.styles'
import {ThemeProvider} from 'styled-components'
import {AboutUs} from "./components/AboutUs";
import {SubHeader} from "./components/SubHeader";
import TimeLine from "./components/TimeLine";
import {Invite} from "./components/Invite";
import {theme} from "./App.theme.ts";

function App() {

    return (

            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <Header></Header>
                <AboutUs />
                <SubHeader title={'Nossa Historia'} id={'nossa-historia'} invert={false}/>
                <TimeLine />
                <SubHeader title={'Confirmação'} id={'confirmacao'} invert={true}/>
                <Invite type={'padrinho'} name={'luan'} />
                <Invite type={'madrinha'} name={'lurdes'} />
                <Invite type={'madrinha_e_padrinho'} name={'Carol e Breno'} />
                <Invite type={'convidado'} name={'gustavo e familia'} />
            </ThemeProvider>


    )
}

export default App
