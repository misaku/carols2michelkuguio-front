import {NavigationHeader} from './components/NavigationHeader'
import {Invite} from "./components/Invite";
import {FirstSubHeader} from "./components/FirstSubHeader";

function InvitePage() {

    return (
            <>
                <NavigationHeader></NavigationHeader>
                <FirstSubHeader title={'Confirmação'} id={'confirmacao'} invert={true}/>
                <Invite/>
            </>
    )
}

export default InvitePage
