import React, { useState } from "react";
import { Container } from "./styles";

const SearchBar = () => {
  const [value, setValue] = useState("");

  const searchTerm = e => {
    if (e.keyCode === 13) {
      const term = e.target.value;
      console.log(term);
    }
  };

  return (
    <Container>
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Termo buscado ..."
        onChange={searchTerm}
        onKeyDown={searchTerm}
      />
    </Container>
  );
};
export default SearchBar;
