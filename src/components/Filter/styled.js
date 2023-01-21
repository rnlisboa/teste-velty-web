import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px 20px;
    gap: 20px;
    width: 1610px;
    height: 124px;
    flex: none;
    order: 0;
    flex-grow: 0;
    position: absolute;
    top: 146px;
    left: 290px;
`;

export const Content = styled.div`
position: absolute;
width: 644px;
height: 61px;
left: 20px;
top: 0px;
background: #FFFFFF;
box-shadow: 14px 17px 40px 4px rgba(112, 144, 176, 0.08);
border-radius: 30px;
`;

export const FilterByDate = styled.div`
position: absolute;
width: 99px;
height: 24px;
left: 50px;
top: 18px;
font-family: 'DM Sans';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 24px;
color: #707EAE;
`;

export const InitalDate = styled.div`
position: absolute;
left: 181px;
top: 10px;
height: 41px;
width: 214px;
background: #F4F7FE;
border-radius: 49px;
`;

export const FinalDate = styled.div`
position: absolute;
left: 414px;
top: 10px;
height: 41px;
width: 214px;
border-radius: 49px;
background: #F4F7FE;
border-radius: 49px;
`;

export const DateIcon = styled.div`
position: absolute;
left: 22px;
top: 12px;
`;

export const Text = styled.div`
position: absolute;
width: 68px;
height: 20px;
left: 42px;
top: calc(50% - 20px/2 + 0.5px);
font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 20px;
letter-spacing: -0.02em;
color: #8F9BBA;
`;