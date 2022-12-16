import styled from 'styled-components';

export const HeaderContainer = styled.header`
  min-height: 30vh;
  box-shadow: 0 2px 5px rgba(3, 5, 99, 0.027);
`;
export const TopNavWrapper = styled.div`
  background: var(--main-bg);
  min-height: calc(30vh - 22vh);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`;
export const TopLeft = styled.div`
  padding-left: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  .d-glo {
    color: var(--text-color);
  }
  h2 {
    font-size: 16px;
    text-transform: capitalize;
    color: var(--text-color);
  }

  @media screen and (max-width: 768px) {
    padding-left: 5px;
    h2{
        font-size: 10px;
    }
  }
`;

export const TopRight = styled.div`
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  color: var(--text-color);
  border-left: 2px solid red;
  cursor: pointer;

  .user {
    padding-left: 8px;
    font-size: 20px;
  }

  p {
    font-size: 16px;
    font-weight: 600;
    color: var(--text-color);
  }

  @media screen and (max-width: 430px) {
    padding-right: 5px;
    p{
        font-size: 15px;
    }
  }
`;

export const BottomNavWrapper = styled.nav`
  padding: 20px;
  @media screen and (max-width: 768px) {
    padding: 5px;
  }
`;

export const BTWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LogoWrapper = styled.div`
  img {
    width: 12rem;
  }
  @media screen and (max-width: 768px) {
   width: 100%;
   img{
    width: 11rem;
   }
  }
`;
export const SearchWrapper = styled.div`
  border-radius: 50px;
  box-shadow: 0 0 10px rgba(12, 3, 95, 0.068);
  display: flex;
  align-items: center;
  width: 55%;
  form {
    width: 80%;
    border-right: 3px solid #f1f1;
    input {
      background: rgb(255, 255, 255);
      width: 100%;
      padding: 16px 20px;
      border-radius: 50px 0 0 50px;
      font-size: 16px;
    }
  }

  div {
    width: 20%;
    text-align: center;
    background: #ffff;
    padding: 14.8px;
    border-radius: 0 50px 50px 0;

    p {
      font-size: 16px;
      font-weight: 600;
      display: none;
    }
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    margin: 15px;
    form{
        border-right: none;
        width: 100%;
        input{width: 100%; padding:15px 20px;  border-radius: 50px;}
    }

    div{
        width: 0%;
        display: none;
        border: none;
    }
  }
`;
export const OtherWrapper = styled.div`
  width: 10%;
  display: flex;
  align-items: center;
  gap: 10px;
  h2{
    font-size: 18px;
    font-weight: 600;
  }
  .f-user{
    font-size: 20px;
  }

   @media screen and (max-width: 430px) {
     transform: translate(7rem, -7.8rem);

   }

`;

export const BBWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  transform: translateY(1.2rem);

  div {
    background: rgba(0, 6, 15, 0.13);
    min-height: 8vh;
    border-radius: 2px;
    color: black;
  }
  .cat {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    width: 10rem;
    cursor: pointer;
  }

  .nav-links {
    display: flex;
    align-items: center;
    justify-content: space-between;
    p {
      cursor: pointer;
      padding: 0 30px;
      font-weight: 500;
      color: #000;
    }
  }

  @media screen and (max-width: 430px){
    transform: translateY(1px);
    .nav-links{
        p{padding: 0 30px;}
    }
  }
`;
