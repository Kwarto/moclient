import React from 'react'
import { FaCheck } from 'react-icons/fa'
import styled from 'styled-components'
const Complete = () => {
  return (
    <CompleteWrapper>
        <div className="correct">
              <FaCheck size={30} className='ico' />
              <h2>Thank you for your order !</h2>
              <p>Click on the button below to complete your purchase..</p>
              <div className='btn'>
                <a href="https://p.hbtl.co/tYYMHj" target="_blank" rel="noopener noreferrer">Click to pay</a>
              </div>
        </div>
    </CompleteWrapper>
  )
}

const CompleteWrapper = styled.div`
 padding: 40px 0;

 .correct{
    min-height: 70vh;
    width: 70%;
    margin: 0 auto;
    text-align: center;

    .ico{
        background: var(--main-bg);
        color: var(--text-color);
        width: 90px;
        height: 90px;
        border-radius: 100px;
        padding: 3px;
    }

    h2{
        padding: 20px 0;
        font-size: 40px;
    }

    .btn{
      margin: 20px auto;
      padding: 10px 20px;
      width: 13rem;
      background: var(--main-bg);
      border-radius: .5rem;
      a{
        color: var(--text-color);
        font-size: 18px;
        font-weight: 600;
      }
    }

    @media screen and (max-width: 430px){
      min-height: 20vh;
      h2{
        font-size: 25px;
      }
    }
 }
`
export default Complete