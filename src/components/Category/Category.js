import React from 'react'
import styled from 'styled-components'
import CatMenImg from '../../img/cat1.png'
import CatWoImg from '../../img/cat2.png'
import CatSenImg from '../../img/cat3.png'
import CatImg4 from '../../img/cat4.png'
import CatImg6 from '../../img/cat6.png'
const Category = () => {
  return (
    <Cat>
        <div>
          <img src={CatMenImg} alt="categories small profile" />
          <h4>Men</h4>
        </div>
        <div>
          <img src={CatWoImg} alt="categories small profile" />
          <h4>Women</h4>
        </div>
        <div>
          <img src={CatSenImg} alt="categories small profile" />
          <h4>Sneakers</h4>
        </div>
        <div>
          <img src={CatImg4} alt="categories small profile" />
          <h4>Bags</h4>
        </div>
        <div>
          <img src={CatImg6} alt="categories small profile" />
          <h4>Clothing</h4>
        </div>
       </Cat>
  )
}

const Cat = styled.div`
 position: absolute;
 z-index: 100;
 width: 15%;
 height: 43vh;
 background: white;
 box-shadow: 0 0 10px rgba(241, 240, 240, 0.144);
 transition: all 2s ease;

 div{
    margin: 9px 20px;
    display: flex;
    align-items: center;
    gap: 30px;
    cursor: pointer;
    padding: 6px;
    transition: all 2s ease;
    img{
        width: 30px;
    }

    h5{
        font-size: 18px;
        font-weight: 500;
    }

    &:hover{
        background: rgba(221, 70, 90, 0.795);
        color: #fff;
    }
 }

 @media screen and (max-width: 768px){
  width: 50%;
  height: 35vh;
 }
`

export default Category