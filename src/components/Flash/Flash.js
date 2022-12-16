import React from 'react'
import {FlashWrapper, FlashContainer, FlashHeadWrap, FlashItemsWrapper} from './FlashElement'
import {FaPlus, FaStar, FaXing} from 'react-icons/fa'

import FlashImg1 from '../../img/flash-1.png'
import FlashImg2 from '../../img/flash-2.png'
import FlashImg3 from '../../img/flash-3.png'
import FlashImg4 from '../../img/flash-4.png'
import FlashImg5 from '../../img/slide-1.png'
import FlashImg6 from '../../img/shops-4.png'

import {Navigation} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation'

const card_list = [
    {
        discount: 'out of stock',
        title: 'Hoodie',
        ImgFlash: FlashImg1,
        rating: <FaStar className='f-star'/>,
        price: 8,
        sup: 88,
        add: <FaPlus className='a-crt'/>
    },
    {
        discount: 'out of stock',
        title: 'Air Nike',
        ImgFlash: FlashImg2,
        rating: <FaStar className='f-star'/>,
        price: 9,
        sup: 41,
        add: <FaPlus className='a-crt'/>
    },
    {
        discount: 'out of stock',
        title: 'Nike Easy Wear',
        ImgFlash: FlashImg5,
        rating: <FaStar className='f-star'/>,
        price: 10,
        sup: 12,
        add: <FaPlus className='a-crt'/>
    },
    {
        discount: 'out of stock',
        title: 'Ladies Wallet',
        ImgFlash: FlashImg4,
        rating: <FaStar className='f-star'/>,
        price: 6,
        sup: 99,
        add: <FaPlus className='a-crt'/>
    },
    {
        discount: 'out of stock',
        title: 'Nike Jordan',
        ImgFlash: FlashImg6,
        rating: <FaStar className='f-star'/>,
        price: 20,
        sup: 88,
        add: <FaPlus className='a-crt'/>
    },
    {
        discount: 'out of stock',
        title: 'Men Suite',
        ImgFlash: FlashImg3,
        rating: <FaStar className='f-star'/>,
        price: 30,
        sup: 18,
        add: <FaPlus className='a-crt'/>
    },
]

function Flash() {
  return (
    <>
     <FlashWrapper>
        <FlashContainer className='container'>
          <FlashHeadWrap>
            <FaXing className='f-ico' />
            <h1>Flash Deals</h1>
          </FlashHeadWrap>
          <FlashItemsWrapper>
          <Swiper className='swiper_flash'
           // install Swiper modules
           modules={[Navigation]}
           spaceBetween={40}
          //  slidesPerView={4}
           navigation={{clickable: true}}
           breakpoints={{
            0: {
              width: 0,
               slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
              
            },
            1200: {
              width: 1200,
              slidesPerView: 3,
            },
          }}
           >
             {
               card_list.map(({discount, title, ImgFlash, rating, price, sup, add }) => {
                return(
                    <>
                     <SwiperSlide className='slideshow'>
                      <h6>{discount}</h6>
                       <div className='card-img'>
                           <img src={ImgFlash} alt="" />
                       </div>
                       <h5>{title}</h5>
                       <div className='rate'>
                           {rating}{rating}{rating}{rating}{rating}
                       </div>
                       <div className='p-cart'>
                           <p>${price}<sup>{sup}</sup></p>
                           {add}
                       </div>
                      </SwiperSlide>
                    </>
                )
               })
             }
          </Swiper>
          </FlashItemsWrapper>
        </FlashContainer>
     </FlashWrapper>
    </>
  )
}

export default Flash