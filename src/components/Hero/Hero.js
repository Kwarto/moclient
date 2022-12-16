import React, { useState, useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import { HeroWrapper, ContentText, ContentImg } from './HeroElement';

// import Swiper core and required modules
import { Autoplay, Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, 'products'),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setProducts(list);
      },
      (error) => {
        console.log(error);
      }
    );

    return () => {
      unsub();
    };
  }, []);
  return (
    <>
      <HeroWrapper>
        <Swiper
          className="hero-swiper"
          // install Swiper modules
          modules={[Autoplay, Pagination]}
          spaceBetween={40}
          pagination={{ clickable: true }}
          autoplay={{ delay: 10000, disableOnInteraction: false }}>
          <>
            {products?.map((item) => (
              <SwiperSlide key={item.id} className="HeroSlider">
                <ContentText>
                  <h1>{item.title}</h1>
                  <p>{item.description.substring(0, 120)}</p>
                  <Link to={`/detail/${item.id}`}>
                    <p className="btn">View collection</p>
                  </Link>
                </ContentText>
                <ContentImg>
                  <div>
                    <Link to={`/detail/${item.id}`}>
                      <img src={item.imgUrl} alt={item.title} />
                    </Link>
                  </div>
                </ContentImg>
              </SwiperSlide>
            ))}
          </>
        </Swiper>
      </HeroWrapper>
    </>
  );
};

export default Hero;
