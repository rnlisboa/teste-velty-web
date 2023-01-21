import { Cash, Container, Icon, Label, Percent, SmallSales } from "./styled";
import v from '../../img/smallbalance/Vector.png'
import { Data } from "./Data";

export default function SmallBalance() {
    const dataValues = Object.values(Data)
    function handleLoad(dado) {
        for (let i of dado) {
            if (i.percent[0] === '-') {
                i.negative = true
            }
        }
    }
    return (
        <Container onLoad={handleLoad(dataValues)}>


            {
                dataValues.map(dado =>

                    <SmallSales key={dado.id}>
                        <Icon>
                            <img src={v} alt="" />
                        </Icon>

                        <Cash>
                            {dado.num}
                        </Cash>
                        <Label>{dado.label}</Label>
                        <Percent dataControl={dado.negative === true ? true : false} >{dado.percent}</Percent>
                    </SmallSales>
                )
            }
        </Container>
    )
};