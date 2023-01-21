import { Container, Content, Header, Title, Text, Body, BodyTitle, BodyList, BodyItem, BodyColumn } from "./styled";
import { Data } from "./Data";
export default function Footer() {
    const dataValues = Object.values(Data)
    return (
        <Container>
            {
                dataValues.map(data =>
                    <Content key={data.id}>

                        <Header>
                            <Title>
                                {data.title}
                            </Title>
                            <Text>
                                {data.text}
                            </Text>
                        </Header>

                        <Body>
                            <BodyColumn>
                                <BodyTitle>
                                    {data.content.clubContent.title}
                                </BodyTitle>

                                <BodyList>
                                    <BodyItem>{data.content.clubContent.c1}</BodyItem>
                                    <BodyItem>{data.content.clubContent.c2}</BodyItem>
                                    <BodyItem>{data.content.clubContent.c3}</BodyItem>
                                    <BodyItem>{data.content.clubContent.c4}</BodyItem>
                                </BodyList>
                            </BodyColumn>

                            <BodyColumn>
                                <BodyTitle>
                                    {data.content.clientContent.title}
                                </BodyTitle>
                                
                                <BodyList>
                                    <BodyItem>{data.content.clientContent.c1}</BodyItem>
                                    <BodyItem>{data.content.clientContent.c2}</BodyItem>
                                    <BodyItem>{data.content.clientContent.c3}</BodyItem>
                                    <BodyItem>{data.content.clientContent.c4}</BodyItem>
                                </BodyList>
                            </BodyColumn>

                            <BodyColumn>
                                <BodyTitle>
                                    {data.content.priceContent.title}
                                </BodyTitle>
                                <BodyList>
                                    <BodyItem>{data.content.priceContent.c1}</BodyItem>
                                    <BodyItem>{data.content.priceContent.c2}</BodyItem>
                                    <BodyItem>{data.content.priceContent.c3}</BodyItem>
                                    <BodyItem>{data.content.priceContent.c4}</BodyItem>
                                </BodyList>
                            </BodyColumn>

                        </Body>
                    </Content>
                )
            }

        </Container>
    )
}