import React, { Component } from "react";
import { connect } from "react-redux";
import { searchVideo } from "./store/actions/searchVideo.action";
import { Container } from "./styles";

class SearchBar extends Component {
  searchTerm = e => {
    if (e.keyCode === 13) {
      const term = e.target.value;
      this.props.searchVideo(term);
    }
  };

  render() {
    return (
      <Container>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Termo buscado ..."
          onChange={this.searchTerm}
          onKeyDown={this.searchTerm}
        />
      </Container>
    );
  }
}
const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => {
  return {
    searchVideo: term => dispatch(searchVideo(term))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
