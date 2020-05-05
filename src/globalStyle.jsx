import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
 body {
     font-family: ${(props) => props.theme.h_font} !important;
     color: #333 !important;
 }

 h6 {
     font-family: "Publico Banner Web", serif !important;
     font-size:18px !important;
     line-height:18px !important;
     font-weight:300 !important;
 }

 h2 {
    font-family: ${(props) => props.theme.btn_font} !important;
    font-size:40px !important;
    line-height:40px !important;
 }

 h2:after {
    content: "";
    display: block;
    width: 50px;
    height: 3px;
    margin:5px 1px;
    background-color: ${(props) => props.theme.line_color};
}

p {
    margin-top: 25px !important;
    font-family: ${(props) => props.theme.para_font} !important;
    font-size:17px !important;
    font-weight:400;
    line-height: 28px !important;
}

button {
    font-family: ${(props) => props.theme.btn_font} !important;
    font-size:14px !important;
    background: transparent;
    border:2px solid ${(props) => props.theme.line_color};
    color: ${(props) => props.theme.line_color};
    padding: 12px 18px;
}

@media (max-width:768px) {
    h2{
        font-size:30px !important;
        line-height:32px !important;
    }

    h6{
        margin-top:20px !important;
    }

    p {
        font-size: 15px !important;
    }
}
`;

export const Title = styled.h1`
font-family: ${(props) => props.theme.h_font};
font-size: 56px;
color: ${(props) => props.theme.color_h};
line-height: 60px;
width:50%;
font-weight:500;
margin-bottom:30px;

@media (max-width: 955px) {
    width:75% !important;
    font-size:48px !important;
}

@media (max-width: 750px) {
    width: 100% !important;
    font-size:36px !important;
    line-height:45px !important;
}
`;
