import styled from "styled-components";
import * as c from '../../config/default'
export const Container = styled.div`
    ${c.DMSans}
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0px 20px;
    gap: 20px;
    width: 100%;
    height: 353px;
    flex: none;
    order: 4;
    flex-grow: 0;
    position: absolute;
    top: 964px;
    left: 290px;
`;

export const Content = styled.div`
    width: 516px;
    height: 351px;
    background: #FFFFFF;
    border-radius: 20px;
    flex: none;
    order: 0;
    flex-grow: 0;
    position: relative;
`;

export const Header = styled.div`

`;
export const Title = styled.div`
position: absolute;
width: 218px;
height: 40px;
left: 31px;
top: 19px;

font-family: 'DM Sans', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 32px;
display: flex;
align-items: center;
letter-spacing: -0.02em;
color: #2B3674;
`;
export const Text = styled.div`
position: absolute;
width: 187px;
height: 23px;
left: 31px;
top: 51px;
font-family: 'DM Sans', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;
/* or 171% */

letter-spacing: -0.02em;

color: #A3AED0;

`;

export const Body = styled.div`
display: flex;
justify-content: space-evenly;
position: absolute;
top: 97px;
left: 31px;
`;

export const BodyColumn = styled.div`
margin-right: 184px;
display: flex;
flex-direction: column;

`;

export const BodyTitle = styled.div`
margin-bottom: 22px;
width: fit-content;
white-space: nowrap;
height: 24px;
font-family: 'DM Sans', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;
letter-spacing: -0.02em;
text-transform: uppercase;
color: #A3AED0;
flex: none;
order: 0;
flex-grow: 0;
`;



export const BodyList = styled.ul`
list-style: none;

`;

export const BodyItem = styled.li`
margin-bottom: 23px;
width: fit-content;
white-space: nowrap;
height: 24px;
left: 31px;
font-family: 'DM Sans', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 14px;
line-height: 24px;
letter-spacing: -0.02em;
color: #2B3674;
`