import styled from "styled-components";

export const FooterWrapper = styled.div`
 padding: 100px;
 background: rgb(3 7 70);
 color: rgba(255, 255, 255, 0.767);
`

export const FooterMain = styled.div`
 h1{
    color: rgba(214, 36, 75, 0.949);
    padding-bottom: 10px;
 }
`
export const FooterItem = styled.div`
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 div{
    h1{
        font-size: 30px;
    }
    p{
        margin: 10px 0;
        cursor: pointer;
    }
 }

 @media screen and (max-width: 768px){
    grid-template-columns: 1fr;
 }
`