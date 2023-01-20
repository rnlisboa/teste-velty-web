import { Container, EItem, LeftItem, Frame, MottoItem, PItem, RightItem, Separator, ActiveHome, DashboadLink, HomeIcon, Pages, ClientesIcon, VendasIcon, RelatoriosIcon, LojasIcon, VendasLink, RelatoriosLink, LojasLink, ClientesLink } from "./styled"
import p from '../../img/logo/p.png'
import e from '../../img/logo/e.png'
import right from '../../img/logo/right.png'
import left from '../../img/logo/left.png'
import motto from '../../img/logo/motto.png'
import home from '../../img/pages/home.png'
import vendas from '../../img/pages/vendas.png'
import relatorios from '../../img/pages/relatorios.png'
import lojas from '../../img/pages/lojas.png'
import clientes from '../../img/pages/clientes.png'
export default function SidebarContainer() {
    return (



        <Container>
            <Frame>
                <PItem>
                    <img src={p} alt="" />
                </PItem>
                <EItem>
                    <img src={e} alt="" />
                </EItem>
                <RightItem>
                    <img src={right} alt="" />
                </RightItem>
                <LeftItem>
                    <img src={left} alt="" />
                </LeftItem>

                <MottoItem>
                    <img src={motto} alt="" />
                </MottoItem>
            </Frame>

            <Separator />
            <ActiveHome />
            <Pages>
                <HomeIcon>
                    <img src={home} alt="" />
                </HomeIcon>

                <DashboadLink>dashboard</DashboadLink>

                <VendasIcon>
                    <img src={vendas} alt="" />
                </VendasIcon>

                <VendasLink>vendas</VendasLink>

                <RelatoriosIcon>
                    <img src={relatorios} alt="" />
                </RelatoriosIcon>
                
                <RelatoriosLink>relatórios</RelatoriosLink>
                
                <LojasIcon>
                    <img src={lojas} alt="" />
                </LojasIcon>

                <LojasLink>lojas parceiras</LojasLink>
                
                <ClientesIcon>
                    <img src={clientes} alt="" />
                </ClientesIcon>
                
                <ClientesLink>clientes</ClientesLink>

            </Pages>



        </Container>
    )
}