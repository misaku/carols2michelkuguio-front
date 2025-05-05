import {Header} from './components/Header'
import {GlobalStyle} from './App.styles'
import {ThemeProvider} from 'styled-components'
import {AboutUs} from "./components/AboutUs";
import {SubHeader} from "./components/SubHeader";
import TimeLine from "./components/TimeLine";
import {theme} from "./App.theme.ts";
import {ToastContainer} from 'react-toastify';

function App() {

    return (
            <ThemeProvider theme={theme}>
                <GlobalStyle/>
                <ToastContainer/>
                <Header></Header>
                <AboutUs />
                <SubHeader title={'Nossa Historia'} id={'nossa-historia'} invert={false}/>
                <TimeLine />
            </ThemeProvider>
    )
}

export default App
