import styled from "styled-components";

export const HeaderCss = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  background-color: #e67e22;
`

export const DivLogo = styled.div`
display: flex;
color: rgb(5, 4, 3);
margin-right:800px;
`

export const DivLupaCarrinho = styled.div`
display: flex;
align-items: center;
justify-items: flex-end;
float: right;  

a img {
    align-items: center;
    width: 20px;
    height: auto;
    margin-left: 20px;
}

input {
    background-color:white;
    position: relative;
    left: 0;
    color: rgb(1, 1, 1);
    padding: 7px;
    margin: 10px;
    border-radius: 20px;
}
`                        

export const Logo = styled.h4`
font-style: normal;
font-weight: 600;
font-size: 48px;
display: flex;
align-items: center;
color: #302622;
mix-blend-mode: normal;
`