import React from 'react';
import styled from 'styled-components';
import pay1 from '../../img/bank-transfer-logo.webp';
import pay2 from '../../img/Master.png';
import pay3 from '../../img/mobilemoney.jpg';
import pay4 from '../../img/paypal.png';
const ProductBox = ({ product }) => {
  return (
    <ImgWrapper>
      <div>
        <img src={pay1} alt="payment" />
      </div>
      <div>
        {' '}
        <img src={pay2} alt="payment" />
      </div>
      <div>
        <img src={pay3} alt="payment" />
      </div>
      <div>
        <img src={pay4} alt="payment" />
      </div>
    </ImgWrapper>
  );
};

const ImgWrapper = styled.div`
  width: 100%;
  transform: translateY(2rem);
  display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-direction: column;
  div{
    width: 50%;
    margin: 0 auto;
    img{
        width: 80%;
        height: 70%;
    }
  }

  @media screen and (max-width: 430px) {
  display: none;
 }
`;

export default ProductBox;
