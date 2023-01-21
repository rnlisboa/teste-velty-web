import { Cash, Container, Icon, Label, ProfitPerSale, SmallCash, SmallLabel, TotalProfit, TotalRevenue, TotalSeparator } from "./styled";
import dolar from "../../img/balance/cifrao.png"
import dolarP from "../../img/balance/dolarProfit.png"
import dolarS from "../../img/balance/dolarSale.png"
export default function Balance() {
    return (
        <Container>
            <TotalRevenue>
                <Icon>
                    <img src={dolar} alt="" />
                </Icon>
                <Cash>R$ 312.321,00</Cash>
                <Label>Receita total</Label>
                <TotalSeparator />
                <SmallCash>R$ 67,20</SmallCash>
                <SmallLabel>Média por cliente</SmallLabel>
            </TotalRevenue>

            <TotalProfit>
                <Icon>
                    <img src={dolarP} alt="" />
                </Icon>
                <Cash>R$ 74.421,00</Cash>
                <Label>Lucro total</Label>
                <TotalSeparator />
                <SmallCash>R$ 42,30</SmallCash>
                <SmallLabel>Média por cliente</SmallLabel>
            </TotalProfit>

            <ProfitPerSale>
                <Icon>
                    <img src={dolarS} alt="" />
                </Icon>
                <Cash>R$ 3,12</Cash>
                <Label>Lucro por venda</Label>
                <TotalSeparator />
                <SmallCash>R$ 12,40</SmallCash>
                <SmallLabel>Média por cliente</SmallLabel>
            </ProfitPerSale>
        </Container>
    )
}