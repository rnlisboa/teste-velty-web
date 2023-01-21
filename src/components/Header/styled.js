import styled from "styled-components";
import * as c from '../../config/default'
export const PrincipalDashboard = styled.div`
    ${c.DMSans}
    position: absolute;
    width: 143px;
    height: 24px;
    left: 320px;
    top: 49px;

    font-family: 'DM Sans', sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
    color: #707EAE;
    text-transform:capitalize ;
`;

export const VeltyDashboard = styled.div`
    position: absolute;
    width: 265px;
    height: 42px;
    left: 320px;
    top: 75px;
    font-family: 'DM Sans', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 34px;
    line-height: 42px;
    letter-spacing: -0.02em;
    color: #2B3674;
    text-transform:capitalize ;
`;

export const LargeInput = styled.div`
    position: absolute;
    width: 422px;
    height: 61px;
    right: 22px;
    top: 65px;
    background: #FFFFFF;
    box-shadow: 14px 17px 40px 4px rgba(112, 144, 176, 0.08);
    border-radius: 30px;

`;

export const Form = styled.form`
    position: absolute;
    left: 10px;
    top: 10px;
    bottom: 10px;
    background: #F4F7FE;
    border-radius: 49px;
    height: 41px;
    width: 214px;
`;

export const Input = styled.input`
    position: absolute;
    position: absolute;
    right: 0%;
    top: 0%;
    bottom: 0%;
    background: #F4F7FE;
    border-bottom-right-radius: 49px;
    border-top-right-radius: 49px;
    width: 80%;
    border: none;
    outline: none;
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.02em;
    color: #8F9BBA;
    ::placeholder{
        text-transform: capitalize;
        font-family: 'DM Sans', sans-serif;
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: -0.02em;
        color: #8F9BBA;
    }
`;

export const Button = styled.button`
    width: 20%;
    height: 100%;
    border-bottom-left-radius: 49px;
    border-top-left-radius: 49px;
    border: none;
`;

export const CircleButton = styled.div`
box-sizing: border-box;
position: absolute;
width: 10px;
height: 10px;
left: 20px;
top: calc(50% - 10px/2 - 0.5px);
border-radius: 50%;
border: 1.4px solid #2B3674;
`;

export const CableButton = styled.div`
    position: absolute;
    width: 5px;
    height: 0px;
    left: 27px;
    top: calc(50% - 0px/2 + 3px);
    border: 1.4px solid #2B3674;
    transform: rotate(-135deg);
`

export const NotificationsIcon = styled.div`
position: absolute;
right: 158.41px;
top: 20.5px;
`;

export const MoonIcon = styled.div`
position: absolute;
right: 116.96px;
top: 21px;

`;
export const InfoIcon = styled.div`
position: absolute;
right: 74px;
top: 20px;

`;
export const AvatarIcon = styled.div`
position: absolute;
top: 5.9px;
right: 10.41px;

img{
    border-radius:50%; 
}
`;
