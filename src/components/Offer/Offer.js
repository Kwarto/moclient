import React from 'react'
import {OfferWrapper} from './OfferElement'
import { FaCreditCard, FaHeadphones, FaShieldAlt, FaShippingFast } from 'react-icons/fa'
function Offer() {
  return (
    <>
      <OfferWrapper>
        <article>
            <div>
                <FaShippingFast className='l-ico'/>
                <h3>Worldwide Delivery</h3>
                <p>
                    We offer international and local delivery on all products. Our delivery is done on time as set and faster
                </p>
            </div>
        </article>
        <article>
            <div>
                <FaCreditCard className='l-ico'/>
                <h3>Worldwide Delivery</h3>
                <p>
                    We offer international and local delivery on all products. Our delivery is done on time as set and faster
                </p>
            </div>
        </article>
        <article>
            <div>
                <FaShieldAlt className='l-ico'/>
                <h3>Shop with confidence</h3>
                <p>
                    We offer international and local delivery on all products. Our delivery is done on time as set and faster
                </p>
            </div>
        </article>
        <article>
            <div>
                <FaHeadphones className='l-ico'/>
                <h3>24/7 Support</h3>
                <p>
                    We offer international and local delivery on all products. Our delivery is done on time as set and faster
                </p>
            </div>
        </article>
      </OfferWrapper>
    </>
  )
}

export default Offer