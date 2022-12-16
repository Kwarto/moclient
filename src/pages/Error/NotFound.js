import React from 'react'
import { NotWrapper } from './NotFoundElement'
import errorImg from '../../img/404.png'
const NotFound = () => {
  return (
    <NotWrapper>
        <div className='container'>
          <img src={errorImg} alt='error page' />
        </div>
    </NotWrapper>
  )
}

export default NotFound