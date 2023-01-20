import { Container, EItem, LeftItem, Frame, MottoItem, PItem, RightItem, Separator, ActiveHome, DashboadLink, HomeIcon } from "./styled"
import p from '../../img/logo/p.png'
import e from '../../img/logo/e.png'
import right from '../../img/logo/right.png'
import left from '../../img/logo/left.png'
import motto from '../../img/logo/motto.png'
import home from '../../img/pages/home.png'
export default function SidebarContainer(){
    return (
        
           

        <Container>
            <Frame>
                <PItem>
                    <img src={p} alt=""/>                    
                </PItem>
                <EItem>
                    <img src={e} alt=""/>
                </EItem>
                <RightItem>
                    <img src={right} alt=""/>
                </RightItem>
                <LeftItem>
                    <img src={left} alt=""/>
                </LeftItem>
                
                <MottoItem>
                    <img src={motto} alt=""/>
                </MottoItem>
            </Frame>

            <Separator/>
            <HomeIcon>
                <img path={home} alt=""/>
            </HomeIcon>
            <DashboadLink>dashboard</DashboadLink>
            <ActiveHome/>
        </Container>
    )
}