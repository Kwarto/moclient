import React, { useContext, useState } from 'react';
import {
  FaBullseye,
  FaGlobeEurope,
  FaLayerGroup,
  FaLock,
  FaUser,
  FaUserCircle,
} from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import logoImg from '../../img/logo.png';
import Category from '../Category/Category';
import {
  HeaderContainer,
  TopNavWrapper,
  TopLeft,
  TopRight,
  BottomNavWrapper,
  BTWrapper,
  BBWrapper,
  LogoWrapper,
  SearchWrapper,
  OtherWrapper,
} from './HeaderElement';
import { auth } from '../../firebase';
import { signOut } from 'firebase/auth';
const Header = () => {
  const { currentUser } = useContext(AuthContext);
  const [category, setCategory] = useState(false);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/search?name=${search}`);
    setSearch('');
  };
  return (
    <>
      <HeaderContainer>
        <TopNavWrapper>
          <TopLeft>
            <FaGlobeEurope className="d-glo" />
            <h2>Free delivery over $10 all products</h2>
          </TopLeft>
          <TopRight>
            {!currentUser ? (
              <>
                <FaUser className="user" />
                <Link to="/auth">
                  <p>Sign In</p>
                </Link>
              </>
            ) : (
              <>
                <FaLock className="user" />
                <p onClick={() => signOut(auth)}>Logout</p>
              </>
            )}
          </TopRight>
        </TopNavWrapper>
        <BottomNavWrapper>
          <BTWrapper>
            <LogoWrapper>
              <img src={logoImg} alt="logo" />
            </LogoWrapper>
            <SearchWrapper>
              <form onSubmit={handleSearch}>
                <input
                  type="text"
                  placeholder="Search"
                  onChange={(e) => {
                    setSearch(e.target.value);
                  }}
                  value={search}
                />
              </form>
              <div>All Categories</div>
            </SearchWrapper>
            <OtherWrapper>
              <FaUserCircle className='f-user'/>
              <h2>{ currentUser.displayName}</h2>
            </OtherWrapper>
          </BTWrapper>
          <BBWrapper>
            {!category ? (
              <div className="cat" onClick={() => setCategory(true)}>
                <FaLayerGroup />
                <h4>Categories</h4>
              </div>
            ) : (
              <div className="cat" onClick={() => setCategory(false)}>
                <FaBullseye />
                <h4>Hide Categories</h4>
              </div>
            )}

            <div className="nav-links">
              <Link to="/">
                <p>Home</p>
              </Link>
              <Link to="/products">
                <p>Products</p>
              </Link>
            </div>
          </BBWrapper>
        </BottomNavWrapper>
      </HeaderContainer>
      {category && <Category />}
    </>
  );
};

export default Header;
