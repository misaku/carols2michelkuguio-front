import {NavigationHeader} from './components/NavigationHeader'
import {GlobalStyle} from './App.styles'
import {ThemeProvider} from 'styled-components'
import {Invite} from "./components/Invite";
import {theme} from "./App.theme.ts";
import {ToastContainer} from 'react-toastify';
import {FirstSubHeader} from "./components/FirstSubHeader";

function InvitePage() {

    return (
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <ToastContainer/>
                <NavigationHeader></NavigationHeader>
                <FirstSubHeader title={'Confirmação'} id={'confirmacao'} invert={true}/>
                <Invite/>
            </ThemeProvider>
    )
}

export default InvitePage
