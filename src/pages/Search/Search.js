import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebase';

const Search = () => {
  const [data, setData] = useState({});
  const [err, setErr] = useState(false);
  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  };

  let Query = useQuery();
  let search = Query.get('name');
  console.log('search', search);
  useEffect(() => {
    searchData();
    // eslint-disable-next-line
  }, [search]);

  const searchData = async () => {
    const q = query(
      collection(db, 'products'),
      where(search, '==', 'title')
    );
    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setData(...doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <>
      <SearchContent>
        {err && <span>Something went wrong</span>}
        <h1>{ data?.title}</h1>
      </SearchContent>
    </>
  );
};

const SearchContent = styled.div`
  width: 40%;
  height: 300px;
  margin: 10% auto;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(16, 3, 94, 0.103);
  border-radius: 10px;
`;

export default Search;
