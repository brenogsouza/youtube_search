import React from "react";
import { FaSearch } from "react-icons/fa";
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
      <button type="button">
        <FaSearch />
      </button>
    </Container>
  );
};
export default SearchBar;
