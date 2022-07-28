import styled from "styled-components";

export const GridLayout = styled.div`
height: 100vh;
width: 100vw;
max-width: 100%;
display: grid;
grid-template-areas: 
"header"
"main"
"footer";
grid-template-rows: 1fr 8fr 1fr;
background-color: #353b48;
`

export const HeaderBackground = styled.header`
grid-area: header;
background-color: #e67e22;
display: flex;
justify-content: center;
box-shadow: 10px 0px 5px 0px black;
border-bottom: 1px solid #aa969647;
`

export const Main = styled.main`
grid-area: main;
background-color: #f5f6fa;
display: flex;
align-items: center;
justify-content: center;

`

export const Footer = styled.footer`
grid-area: footer;
display: flex;
justify-content: center;
background-color: #262626;
color: #c8d6e5;
padding: 30px;

p{
    font-size: 12px;
}
`