import styled from "styled-components";

export const OfferWrapper = styled.div`
 padding: 100px 0;
 background: var(--text-color);
 display: grid;
 grid-template-columns: repeat(4, 1fr);
 gap: 1rem;
 place-items: center;

 article{
    margin: 0 10px;
    div{
        width: 100%;
        background: rgb(241,241,255);
        padding: 10px;
        text-align: center;

        h3{
            padding: 10px;
            color: var(--main-bg);
        }

        .l-ico{
            font-size: 50px;
            background: var(--text-color);
            padding: 13px;
            border-radius: 50px;
            margin: 8px 0;
            color: var(--btn-bg);
        }
    }
 }

 @media screen and (max-width: 468px){
    grid-template-columns: 1fr;
 }
`