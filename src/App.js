import React from "react";
import DetailVideo from "./components/detail-video";
import ListVideo from "./components/list-video";
import SearchBar from "./components/search-bar";
import { GlobalStyled } from "./globalStyles";

function App() {
  return (
    <div>
      <GlobalStyled />
      <SearchBar />
      <ListVideo />
      <DetailVideo />
    </div>
  );
}

export default App;
