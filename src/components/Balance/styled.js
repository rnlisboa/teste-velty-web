import styled from "styled-components";
import * as c from '../../config/default'
export const Container = styled.div`
    ${c.DMSans}
    position: absolute;
    width: 100%;
    height: fit-content;
    display: flex;
    justify-content: flex-start;
    top: 290px;
    left: 310px;
    gap: 20px;
`;

export const TotalRevenue = styled.div`
    position:relative;
    width: 380px;
    height: 310px;
    background: #EC7A7A;
    border-radius: 20px;
    flex: none;
    order: 0;
    flex-grow: 0;
`;

export const TotalProfit = styled.div`
    position:relative;
    width: 380px;
    height: 310px;
    background: #7A85EC;
    border-radius: 20px;
    flex: none;
    order: 0;
    flex-grow: 0;
`;

export const ProfitPerSale = styled.div`
    position: relative;
    width: 380px;
    height: 310px;
    background: #65D5AC;
    border-radius: 20px;
    flex: none;
    order: 0;
    flex-grow: 0;
`;

export const Icon = styled.div`
position: absolute;
width: 56px;
height: 56px;
left: 16px;
top: 22px;
border-radius: 50%;
background-color: #FFFFFF;
display: flex;
align-items: center;
justify-content: center;
`;


export const Cash = styled.div`
position: absolute;
width: 305px;
height: 31px;
left: 16px;
top: 109px;
font-family: 'DM Sans', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 48px;
line-height: 32px;
/* or 67% */

letter-spacing: -0.02em;

color: #FFFFFF;
`;

export const Label = styled.div`
position: absolute;
width: 187px;
height: 23px;
left: 16px;
top: 158px;

font-family: 'DM Sans', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 24px;
/* or 100% */

letter-spacing: -0.02em;

color: rgba(255, 255, 255, 0.7);

`;

export const TotalSeparator = styled.div`
position: absolute;
width: 387px;
height: 0px;
left: 0px;
top: 212px;

border: 1px solid #E9EDF7;
`;

export const SmallCash = styled.div`
position: absolute;
width: 144px;
height: 31px;
left: 16px;
top: 230px;

font-family: 'DM Sans', sans-serif;
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 32px;
/* or 133% */

letter-spacing: -0.02em;

color: #FFFFFF;
`;

export const SmallLabel = styled.div`
position: absolute;
width: 187px;
height: 23px;
left: 16px;
top: 261px;

font-family: 'DM Sans', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;
/* or 171% */

letter-spacing: -0.02em;

color: rgba(255, 255, 255, 0.7);
`;