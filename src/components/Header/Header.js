import {AvatarIcon, Button, CableButton, CircleButton, Form, InfoIcon, Input, LargeInput, MoonIcon, NotificationsIcon, PrincipalDashboard, VeltyDashboard} from './styled'
import sino from '../../img/header/sino.png'
import lua from '../../img/header/lua.png'
import info from '../../img/header/info.png'
import avatar from '../../img/header/avatar.png'
export default function Header(){
    return (
        <>
            <PrincipalDashboard>principal / dashboard</PrincipalDashboard>
            <VeltyDashboard>velty dashboard</VeltyDashboard>

            <LargeInput>
                <Form>
                    <Button type='submit'>
                        <CircleButton/>
                        <CableButton/>
                    </Button>
                    <Input type="text" placeholder="busca"/>
                </Form>
                <NotificationsIcon>
                    <img src={sino} alt=""/>
                </NotificationsIcon>
                <MoonIcon>
                    <img src={lua} alt=""/>
                </MoonIcon>
                <InfoIcon>
                    <img src={info} alt=""/>
                </InfoIcon>
                <AvatarIcon>
                    <img src={avatar} alt=""/>
                </AvatarIcon>
            </LargeInput>
        </>
    )
}