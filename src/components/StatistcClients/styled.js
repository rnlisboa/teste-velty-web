import styled from 'styled-components'
import * as c from '../../config/default'
export const Container = styled.div`
    ${c.DMSans}
    position: absolute;
    top: 620px;
    left: 290px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px 20px;
    gap: 20px;
    width: 1610px;
    height: 97px;
    flex: none;
    order: 2;
    flex-grow: 0;
`;

export const SmallSales = styled.div`
    width: 249px;
    height: 95px;
    background: #FFFFFF;
    border-radius: 20px;
    flex: none;
    order: 0;
    flex-grow: 0;
    position: relative;
    span{
        position: relative;
        height: fit-content;
    }
`;

export const Label = styled.div`
    position: absolute;
    width: 173px;
    height: 13px;
    left: 23px;
    top: 17px;

    font-family: 'DM Sans', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    /* or 171% */

    display: flex;
    align-items: center;
    letter-spacing: -0.02em;

    color: #A3AED0;
`

export const Cash = styled.div`
    position: absolute;
    width: 144px;
    height: 31px;
    left: 23px;
    top: 33px;

    font-family: 'DM Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 32px;
    /* or 133% */

    letter-spacing: -0.02em;

    color: #2B3674;
`;

export const Percent = styled.div`
    position: absolute;
    width: 113px;
    height: 14px;
    left: 23px;
    top: 67px;

    font-family: 'DM Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 20px;
    /* or 167% */

    letter-spacing: -0.02em;

    color: ${props => props.dataControl ? '#CD0505' :  '#05CD99'};
`

export const SmallLabel = styled.div`
position: absolute;
width: 35px;
right: -40px;
top: 4px;

font-family: 'DM Sans', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;
/* or 171% */

display: flex;
align-items: center;
letter-spacing: -0.02em;

color: #A3AED0;
`;