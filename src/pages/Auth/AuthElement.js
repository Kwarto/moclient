import styled from 'styled-components';

export const AuthWrapper = styled.section`
  min-height: 68vh;
  display: grid;
  grid-template-columns: 58% 40%;
  gap: 2%;
  width: 90%;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    grid-template-columns: 100%;
    min-height: 60vh;
  }
`;

export const LeftWrapper = styled.div`
  width: 100%;
  img {
    width: 70%;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const RightWrapper = styled.div`
  padding: 30px 0;

  .title {
    font-size: 36px;
    font-weight: 600;
    padding-bottom: 10px;
    padding-left: 10px;
  }

  .form-container {
    form {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      .user {
        background: var(--main-bg);
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        aspect-ratio: 1/1;
        width: 16%;
        height: 16%;
        border-radius: 100%;
        color: var(--text-color);

        .f-cam {
          font-size: 20px;
          cursor: pointer;
        }
      }

      input,
      button {
        width: 98%;
        padding: 15px;
        margin: 10px 0;
        box-shadow: 0 0 10px rgba(3, 5, 99, 0.027);
        border-radius: 5px;
        font-size: 16px;

        ::placeholder {
          font-size: 16px;
          font-weight: 600;
        }
      }

      button {
        background: var(--main-bg);
        color: var(--text-color);
        font-size: 20px;
        font-weight: 600;
        cursor: pointer;
      }
    }

    .last {
      padding-left: 8px;
      padding-top: 20px;
      display: flex;
      align-items: center;
      gap: 10px;

      span {
        color: var(--btn-bg);
        font-weight: bold;
        cursor: pointer;
      }
    }
  }
`;
