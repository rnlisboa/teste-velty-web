import styled from "styled-components"
import * as c from '../../config/default'
export const Container = styled.div`
    ${c.DMSans}
    height: 72rem;
    width: 18.125rem;
    background: #FFFFFF;
    border: 1px solid red;
    position: relative;
`;

export const Frame = styled.div`
    position: absolute;
    width: 153px;
    height: 83px;
    left: 34px;
    top: 27px;
`;

export const PItem = styled.div`
    position: absolute;
left: 0%;
right: 65.96%;
top: 9.34%;
bottom: 20.67%;

    img{
        width: 3.256rem;
    }
`;

export const EItem = styled.div`
    position: absolute;
    left: 32.38%;
    right: 40.33%;
    top: 16.37%;
    bottom: 20.67%;
    img{
        width: 2.6rem;
    }
`;

export const RightItem = styled.div`
    position: absolute;
    left: 53.35%;
    right: 20.19%;
    top: 9.37%;
    bottom: 13.67%;
    img{
        width: 2.53rem;
    }
`;

export const LeftItem = styled.div`
    position: absolute;
    left: 72.81%;
    right: 0%;
    top: 0%;
    bottom: 20.91%;
    img{
        width: 2.6rem;
    }
`;

export const MottoItem = styled.div`
    position: absolute;
    left: 9.45%;
    right: 9.45%;
    top: 89.96%;
    bottom: 0%;
    img{
        width: 7.75rem;
    }
`;


export const Separator = styled.div`
    position: absolute;
    width: 290px;
    height: 0px;
    left: 0px;
    top: 130px;

    border: 1px solid #F4F7FE;
`;

export const Pages = styled.div`
    position: absolute;
    width: 259px;
    height: 316px;
    left: 31px;
    top: 168px;
`;

export const ActiveHome = styled.span`
    position: absolute;
    width: 4px;
    height: 36px;
    left: 286px;
    top: 168px;

    background: #4318FF;
    border-radius: 25px;
`;

export const DashboadLink = styled.div`
    position: absolute;
    width: 83px;
    height: 30px;
    left: 69px;
    top: 171px;
    font-family: 'DM Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 30px;
    letter-spacing: -0.02em;
    color: #2B3674;
`;

export const HomeIcon = styled.div`
    position: absolute;
    left: 11.68%;
    right: 11.66%;
    top: 13.94%;
    bottom: 16.67%;
    img{
        
        width: 18.400148391723633px;
        

    }
`;