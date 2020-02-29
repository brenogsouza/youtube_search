import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0;

  input[type="search"] {
    height: 50px;
    margin: 0 20px;
    padding: 10px;
    width: 100%;
    max-width: 700px;
    border: 2px solid #d3d3d3;
    border-radius: 5px;
    font-size: 16px;
    outline: none;
  }
  button {
    width: 100%;
    max-width: 55px;
    border-radius: 5px;
    border: 2px solid #d3d3d3;
    background: #fff;
    font-size: 16px;
    color: #ccc;
    margin: 0 20px;
    cursor: pointer;
    outline: none;
    &:hover {
      opacity: 0.8;
    }
  }
`;
