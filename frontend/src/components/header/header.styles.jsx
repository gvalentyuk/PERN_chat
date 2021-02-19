import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 60%;
  height: 8vh;
  background: #5046b9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Roboto, sans-serif;
  margin-bottom: 7vh;

  @media (max-width: 768px) {
    width: 85%;
  }
`;

export const LogoContainer = styled.div`
  margin-left: 5vw;

  h2 {
    color: white;
    letter-spacing: 2px;
  }
`;

export const UserAltContainer = styled.div`
  margin-right: 5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  position: relative;

  p {
    color: white;
  }

  i {
    margin: 2px 0 0 3px;
    color: white;
  }
`;

export const ImageAltContainer = styled.div`
  width: 40px;
  margin-right: 10px;

  img {
    width: 100%;
  }
`;

export const ProfileOptions = styled.div`
  width: 120px;
  height: 50px;
  background: aliceblue;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  right: 0;
  top: 25px;

  p {
    line-height: 30px;
    width: 100%;
    background: aliceblue;
    text-align: center;
    color: black;
  }

  p:hover {
    background: #e5eaf1;
  }
`;
