import { Cash, Container, Label, Percent, SmallLabel, SmallSales } from "./styled";
import { Data } from "./data";

export default function StatisticClients(){
    const dataValues = Object.values(Data)
    function handleLoad(dado){
        for(let i of dado){
            if(i.percent[0] === '-'){
                i.negative = true
            }
        }   
    }
    return (
        <Container onLoad={handleLoad(dataValues)}>
            
            {
                dataValues.map(dado =>
                     
                <SmallSales key={dado.id}>
                    <Label>{dado.label}</Label>
                    <Cash>
                        <span>
                            {dado.num}
                        </span>
                    
                    {dado.smallLabel && (
                        <span><SmallLabel>{dado.smallLabel}</SmallLabel></span>
                        
                    )}
                    </Cash>
                    
                    <Percent dataControl={dado.negative === true ? true : false} >{dado.percent}</Percent>
                </SmallSales>
                )
            }
        </Container>
    )
};