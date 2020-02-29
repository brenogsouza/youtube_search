import React from "react";
import { Container } from "./styles";

const SearchBar = ({ icon }) => {
  return (
    <Container>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Termo buscado"
      />
    </Container>
  );
};
export default SearchBar;
