import styled from 'styled-components';

export const HeroWrapper = styled.div`
  padding: 50px 0;
  .hero-swiper {
     width: 100%;
    .HeroSlider {
      display: grid;
      grid-template-columns: 70% 30%;
    }
    .swiper-pagination-bullet {
        background: var(--btn-bg);
        width: 10px;
        height: 10px;
      }

      @media screen and (max-width: 768px){
       .HeroSlider{
        grid-template-columns: 100%;
       } 
       .swiper-pagination-bullet {
        margin-top: 30px;
        }
      }
  }
`;

export const ContentText = styled.div`
  transform: translateY(4rem);
  margin: 10px;
  h1 {
    font-size: 50px;
    font-weight: 600;
    padding: 10px 0;
  }

  p {
    font-size: 18px;
    max-width: 400px;
    padding-bottom: 20px;
  }

  .btn{
    background: rgb(231, 69, 104);
    padding: 12px 20px;
    border-radius: 0.2rem;
    color: #fff;
    font-weight: 600;
    width: max-content;
  }

  @media screen and (max-width: 430px){
    transform: translateY(1rem);
    text-align: center;
    h1{
      font-size: 30px;
    }

    p{
      max-width: 700px;
    }

    .btn{
      display: none;
    }
  }
`;
export const ContentImg = styled.div`
  width: 100%;
  div {
    width: 100%;

    img {
      width: 100%;
    }
  }

  @media screen and (max-width: 768px){
    div{
      transform: translateX(4rem);
      img{
        width: 60%;
        margin: 0 auto;
      }
    }
  }
`;
