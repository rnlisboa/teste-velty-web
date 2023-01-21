import { Container, Content, DateIcon, FilterByDate, FinalDate, InitalDate, Text } from './styled'
import data from '../../img/filter/data.png'
export default function Filters() {
    return (
        <Container>
            <Content>
                <FilterByDate>Filtrar por data</FilterByDate>
                <InitalDate>
                    <DateIcon>
                        <img src={data} alt='' />
                    </DateIcon>
                    <Text>Data inicial</Text>
                </InitalDate>
                
                <FinalDate>
                    <DateIcon>
                        <img src={data} alt='' />
                    </DateIcon>
                    <Text>Data final</Text>
                </FinalDate>


            </Content>
        </Container>
    )
}