import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 20px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 20px 20px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  border-radius: 5px;
  max-width: 500px;
  width: 100%;
  padding: 25px 25px;
  background: #fff;
  justify-content: space-around;

  img {
    width: 100%;
    max-width: 500px;
    min-width: 320px;
  }
  h1 {
    font-size: 18px;
    font-weight: 300;
    margin: 10px 0px;
  }
  span {
    font-size: 12px;
    font-weight: bolder;
    margin-bottom: 10px;
  }
  p {
    font-size: 14px;
    margin-bottom: 10px;
  }
  button {
    background: transparent;
    border: 1px solid #ccc;
    color: #333;
    height: 50px;
    margin-top: 30px;
    cursor: pointer;
    outline: none;
    &:hover {
      opacity: 0.8;
      background: #069;
      color: #fff;
    }
    &:touch-action {
      opacity: 0.8;
      background: #069;
      color: #fff;
    }
  }
`;
