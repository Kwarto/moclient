import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const Detail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  useEffect(() => {
    id && getProductDetails();
    // eslint-disable-next-line
  }, [id]);

  const getProductDetails = async () => {
    const docRef = doc(db, 'products', id);
    const productDetail = await getDoc(docRef);
    setProduct(productDetail.data());
  };

  console.log(product);
  return (
    <DetailWrapper>
      <SingleProductDetail className="container">
        <article className="pro-img-wrap">
          <div>
            <img src={product?.imgUrl} alt={product?.title} />
          </div>
        </article>
        <article className="pro-con">
          <div className="first">
            <h1>{product?.title}</h1>
            <h4>{product?.category}</h4>
          </div>
          <div className="sec-con">
            <h3>$ {product?.price}.00</h3>
            {product?.price === 55 && (<span>
              <h5>Bulk Purchase</h5>
              <p>20 PCS</p>
            </span>)}
          </div>
          <div className="abt">
            <p>{product?.description.substring(0, 700)}...</p>
          </div>
          <div className="add-btn">
            <Link to='/checkout'>
             <h3>Proceed To Checkout</h3>
            </Link>
          </div>
        </article>
      </SingleProductDetail>
    </DetailWrapper>
  );
};

const DetailWrapper = styled.section`
  padding: 40px 0;
`;

const SingleProductDetail = styled.div`
  padding: 20px 0;
  display: grid;
  grid-template-columns: 63% 34%;
  gap: 3%;

  .pro-img-wrap {
    /* background: rgba(55, 0, 255, 0.048); */
    border-radius: 5px;
    padding: 10px;
    div {
      width: 100%;
      img {
        width: 80%;
        height: 520px;
        margin: 20px auto;
      }
    }
  }

  .pro-con {
    transform: translateY(1rem);
    .first {
      display: flex;
      align-items: center;
      justify-content: space-between;
      h1 {
        font-size: 38px;
        color: var(--main-bg);
      }

      h4 {
        padding: 5px 15px;
        background: var(--btn-bg);
        color: var(--text-color);
        border-radius: 50px;
      }
    }

    .sec-con {
      margin-top: 30px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      h3 {
        font-size: 33px;
        color: var(--btn-bg);
      }

      h5{
        font-size: 16px;
        padding-bottom: 2px;
      }

      p{
        font-size: 12px;
      }
    }

    .abt {
      padding: 20px 0;
      line-height: 1.7;
    }

    .add-btn {
      background: var(--main-bg);
      width: 15rem;
      padding: 15px 0;
      text-align: center;
      border-radius: 50px;
      cursor: pointer;
      h3{
        color: var(--text-color);
      }
    }
  }

  @media screen and (max-width: 430px) {
    grid-template-columns: 100%;
    padding: 10px;
    .pro-img-wrap{
      div{
        img{
          height: 100%;
        }
      }
    }
    .pro-con{
      .first{
      gap: 10px;
      h1 {
        font-size: 30px;
        color: var(--main-bg);
      }
    }
    }
  }
`;

export default Detail;
