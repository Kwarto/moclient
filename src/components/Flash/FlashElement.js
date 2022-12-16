import styled from "styled-components";

export const FlashWrapper = styled.div`
 padding: 60px 0;
 background: rgb(241,241,255);
 margin-top: 10px;
`

export const FlashContainer = styled.div``

export const FlashHeadWrap = styled.div`
 display: flex;
 align-items: center;
 gap: 8px;

 h1{
    font-size: 30px;
 }

 .f-ico{
    font-size: 20px;
    color: rgb(231,69,104);
 }

 .swiper_flash{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
 }
`

export const FlashItemsWrapper = styled.div`
.slideshow{
   background: white;
 box-shadow: 0 5px 10px rgba(241, 240, 240, 0.918);
 border: 1px solid rgb(241,241,255);
 border-radius: .3rem;
 
 h6{
    background: rgb(231,69,104);
    color: #fff;
    width: max-content;
    padding: 5px 15px;
    border-radius: 50px;
    margin: 5px 10px;
 }

 h5{
    text-align: center;
    font-size: 20px;
    font-weight: 500;
 }
 .card-img{
    width: 100%;
    text-align: center;
    
    img{
        width: 50%;
        animation: Spinner 60s linear infinite;
    }

 }

 .rate{
    text-align: center;
    padding: 15px 0;

    .f-star{
        color: rgb(253, 210, 17);
        margin: 3px;
    }
 }

 .p-cart{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    color: rgb(231,69,104);
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;

    .a-crt{
        border: 1px solid rgb(241,241,255);
        padding: 5px;
        font-size: 30px;
        cursor: pointer;
    }
 }
 @media screen and (max-width: 468px){
   margin-right: 10px;
  }
}
  .swiper-button-next, .swiper-button-prev{
     color: red;
     width: 10px;
     height: 10px;
  }
`