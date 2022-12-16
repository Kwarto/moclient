import React from 'react';
import { Link} from 'react-router-dom';
import styled from 'styled-components';
import buyIco from '../../img/buy.png'
const ShopSection = ({ products }) => {
  return (
    <>
      <ProductWrapper>
        <ProductHolder className="container">
          {products?.map((item) => (
            <article className="product-card" key={item.id}>
              <div className="pro-cat">
                <p>{item.category}</p>
              </div>
              <div className="card-img-wrap">
                <Link to={`/detail/${item.id}`}>
                  <img
                    src={item.imgUrl}
                    alt="product"
                    loading="lazy"
                    style={{ height: '153px' }}
                  />
                </Link>
              </div>
              <div className="pro-meta-info">
                <Link to={`/detail/${item.id}`}>
                  <h3>{item.title}</h3>
                </Link>
              </div>
              <div className="pro-p-a">
                <span>
                  <p>${item.price}</p>
                </span>
                <span>
                  <Link to={`/detail/${item.id}`}>
                  <small title='buy now'>
                    <img src={buyIco} alt='buy now' />
                  </small>
                  </Link>
                </span>
              </div>
            </article>
          ))}
        </ProductHolder>
      </ProductWrapper>
    </>
  );
};

const ProductWrapper = styled.section`
  padding: 60px 0;
  background: rgba(0, 0, 0, 0.027);
`;

const ProductHolder = styled.div`
  padding: 20px 5px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;

  .product-card {
    padding: 30px;
    background: var(--text-color);
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(255, 0, 0, 0.041);
    height: 52vh;

    .pro-cat {
      background: var(--btn-bg);
      width: max-content;
      padding: 5px 15px;
      border-radius: 50px;
      color: var(--text-color);
    }
    .card-img-wrap {
      width: 90%;
      margin: 0 auto;
      img {
        width: 100%;
        height: 100%;
        margin: 0 auto;
      }
    }

    .pro-meta-info {
      padding-top: 8px;
      text-align: center;
      h3 {
        color: var(--main-bg);
        font-size: 18px;
        cursor: pointer;
      }
    }

    .pro-p-a {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 10px;
      transform: translateY(1.5rem);
      span {
        p {
          color: var(--btn-bg);
          font-size: 20px;
          font-weight: 600;
          transform: translateY(4px);
        }

        :nth-child(2) {
          background: var(--text-color);
          box-shadow: 0 0 10px rgba(255, 0, 0, 0.041);
          width: 30px;
          height: 30px;
          border-radius: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--text-color);
        }

        small{
          width: 40px;
          img{
            width: 100%;
          }
        }
      }
    }
  }

  @media screen and (max-width: 430px){
    grid-template-columns: 1fr;
    .product-card{
      height: 47vh;
      .pro-p-a{
      transform: translateY(4rem);
    }
    }
  }
`;

export default ShopSection;
