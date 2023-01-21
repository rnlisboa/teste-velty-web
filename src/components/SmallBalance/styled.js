import styled from 'styled-components'
import * as c from '../../config/default'
export const Container = styled.div`
    ${c.DMSans}
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px 20px 80px;
    gap: 20px;
    width: 1610px;
    height: 206px;
    top: 737px;
    left: 290px;
    flex: none;
    order: 3;
    flex-grow: 0;
`;

export const Icon = styled.div`
    position: relative;
    width: 100%;
    height: 97px;
    img{
        position: absolute;
        top:35px;
        left: 37.4px;
    }
    background: #F4F7FE;
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
    width: 187px;
    height: 23px;
    left: 16px;
    top: 122px;

    font-family: 'DM Sans', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    /* or 171% */

    letter-spacing: -0.02em;

    color: #A3AED0;
`

export const Cash = styled.div`
    position: absolute;
    width: 144px;
    height: 31px;
    left: 16px;
    top: 91px;

    font-family: 'DM Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 32px;
    /* or 94% */

    letter-spacing: -0.02em;

    color: #2B3674;
`;

export const Percent = styled.div`
    position: absolute;
    width: 132px;
    height: 14px;
    left: 16px;
    top: 156px;

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