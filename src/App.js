import React from "react";
import { Provider } from "react-redux";
import DetailVideo from "./components/detail-video";
import ListVideo from "./components/list-video";
import SearchBar from "./components/search-bar";
import { GlobalStyled } from "./globalStyles";
import store from "./store";
import { PageWrapper } from "./styles";

function App() {
  return (
    <Provider store={store}>
      <PageWrapper>
        <GlobalStyled />
        <SearchBar />
        <ListVideo />
        <DetailVideo />
      </PageWrapper>
    </Provider>
  );
}

export default App;
