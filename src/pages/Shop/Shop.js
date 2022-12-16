import React, { useState, useEffect} from 'react';
import { collection, onSnapshot } from 'firebase/firestore'; 
import { db } from '../../firebase';
import ShopSection from '../../components/ShopSection/ShopSection'
const Shop = () => {
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
      <ShopSection products={products} />
    </>
  );
};

export default Shop;
