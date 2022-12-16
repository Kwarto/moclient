import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { db } from '../../firebase';
import ProductBox from './ProductBox';

const initialState = {
  email: '',
  number: '',
  country: '',
  city: '',
  address: '',
  payment: '',
  zipCode: '',
  mobileMoneyNum: '',
  moPin: ''
};

const paymentOption = ['Bank Transfer', 'Mobile Money', 'PayPal'];

const Checkout = () => {
  const [form, setForm] = useState({ initialState });
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const {
    email,
    number,
    country,
    city,
    address,
    zipCode,
    payment,
    mobileMoneyNum,
    moPin,
  } = form;
  const handleSubmit = () => {};
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onPaymentChange = (e) => {
    setForm({ ...form, payment: e.target.value });
  };

  useEffect(() => {
    id && getProductDetails();
    // eslint-disable-next-line
  }, [id])
  
  const getProductDetails = async () => {
    const prodRef = doc(db, 'products', id);
    const snapshot = await getDoc(prodRef);
    if (snapshot.exists()) {
      setProduct({...snapshot.data()});
    }
  }

  return (
    <CheckoutWrapper>
      <CheckoutContainer className="container">
        <LeftContent>
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <input
                type="text"
                name="email"
                placeholder="Enter Email"
                value={email}
                onChange={handleChange}
              />
              <input
                type="number"
                name="number"
                placeholder="Enter Phone"
                value={number}
                onChange={handleChange}
              />
            </div>
            <div className="form-container">
              <input
                type="text"
                name="country"
                placeholder="Country /State"
                value={country}
                onChange={handleChange}
              />
              <input
                type="text"
                name="city"
                placeholder="City /Town"
                value={city}
                onChange={handleChange}
              />
            </div>
            <div className="form-container">
              <input
                type="text"
                name="address"
                placeholder="Residential Address"
                value={address}
                onChange={handleChange}
              />
              <input
                type="text"
                name="zip code"
                placeholder="Zip Code"
                value={zipCode}
                onChange={handleChange}
              />
            </div>
            <div className="form-container">
              <select value={payment} onChange={onPaymentChange}>
                <option>Please Select Payment Plan</option>
                {paymentOption.map((option, index) => (
                  <option value={option || ''} key={index}>
                    {option}
                  </option>
                ))}
              </select>
              <input
                type="number"
                name="mobileMoneyNum"
                placeholder="Mobile Money Number"
                value={mobileMoneyNum}
                onChange={handleChange}
              />
            </div>
            <div className="form-container">
              <input
                type="password"
                name="moPin"
                placeholder="Mobile Money Pin"
                min={4}
                max={4}
                value={moPin}
                onChange={handleChange}
              />
              <input type="button" value="Submit" />
            </div>
          </form>
        </LeftContent>
        <RightContent>
          <ProductBox product={product} />
        </RightContent>
      </CheckoutContainer>
    </CheckoutWrapper>
  );
};

const CheckoutWrapper = styled.section`
  padding: 40px 0;
  min-height: calc(69vh - 50px);
`;
const CheckoutContainer = styled.div`
  display: grid;
  grid-template-columns: 74% 25%;
  gap: 1%;

  @media screen and (max-width: 430px) {
    grid-template-columns: 100%;
  }
`;
const LeftContent = styled.div`
  padding: 20px 0; 

  form {
    .form-container {
      display: flex;
      align-items: center;
      gap: 1rem;
      margin: 20px 0;
      input,
      select {
        padding: 15px 20px;
        width: 100%;
        appearance: none;
        background: #fff;
        box-shadow: 0 0 10px rgba(12, 10, 10, 0.075);
        font-size: 15px;
        font-weight: bold;
      }
      input[type="button"]{
         background-color: var(--main-bg);
         color: #fff;
         cursor: pointer;
         font-size: 20px;
         font-weight: bold;
         padding: 11px 20px;
      }
    }
  }

  @media screen and (max-width: 430px) {
    form{
      .form-container{
        flex-direction: column;
      }
    }
  }
`;
const RightContent = styled.div`
`;
export default Checkout;
