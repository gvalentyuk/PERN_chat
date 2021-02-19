import styled from "styled-components";

export const MessangerContainer = styled.div`
  width: 68%;
  height: 70vh;
  background-color: white;

  h3 {
    font-family: Roboto;
    text-align: center;
    margin-top: 3vh;
  }

  header {
    min-height: 7vh;
    border-bottom: 2px solid #e8e3e3;
    display: flex;
    justify-content: space-between;
    align-items: center;

    h4 {
      font-family: Roboto;
      margin-left: 1rem;
    }

    & .options {
      position: relative;
    }
  }
`;

export const ProfileOptions = styled.div`
  width: 9rem;
  background-color: #f0ebeb;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  right: 2rem;
  top: 1.6rem;
  border: 1px solid #cfc7c6;
  border-radius: 5px;

  p {
    margin: 0;
    cursor: pointer;
    line-height: 30px;
    width: 100%;
    background: #f0ebeb;
    color: black;
    font-family: Roboto;
    font-size: 0.9em;
    display: flex;
    align-items: center;

    i {
      width: 1rem;
      color: #5046b9;
      margin: 0 1em 0 0.2em;
    }
  }

  p:hover {
    background: #e6e6e6;
  }
`;

export const MenuBtn = styled.button`
  margin-right: 2rem;
  height: 0.8rem;
  background: transparent;
  border: none;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  cursor: pointer;
  outline: none;
  span {
    display: block;
    width: 3px;
    height: 3px;
    background: #5046b9;
  }
`;
