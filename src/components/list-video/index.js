import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Wrapper } from "./styles";

class ListVideo extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <img src="https://via.placeholder.com/300X160" alt="" srcset="" />
          <h1>Titulo do video</h1>
          <span>Nome do Canal</span>
          <p>Descrição</p>
        </Wrapper>
        <Wrapper>
          <img src="https://via.placeholder.com/300X160" alt="" srcset="" />
          <h1>Titulo do video</h1>
          <span>Nome do Canal</span>
          <p>Descrição</p>
        </Wrapper>
        <Wrapper>
          <img src="https://via.placeholder.com/300X160" alt="" srcset="" />
          <h1>Titulo do video</h1>
          <span>Nome do Canal</span>
          <p>Descrição</p>
        </Wrapper>
        <Wrapper>
          <img src="https://via.placeholder.com/300X160" alt="" srcset="" />
          <h1>Titulo do video</h1>
          <span>Nome do Canal</span>
          <p>Descrição</p>
        </Wrapper>
        <Wrapper>
          <img src="https://via.placeholder.com/300X160" alt="" srcset="" />
          <h1>Titulo do video</h1>
          <span>Nome do Canal</span>
          <p>Descrição</p>
        </Wrapper>
        <Wrapper>
          <img src="https://via.placeholder.com/300X160" alt="" srcset="" />
          <h1>Titulo do video</h1>
          <span>Nome do Canal</span>
          <p>Descrição</p>
        </Wrapper>
        <Wrapper>
          <img src="https://via.placeholder.com/300X160" alt="" srcset="" />
          <h1>Titulo do video</h1>
          <span>Nome do Canal</span>
          <p>Descrição</p>
        </Wrapper>
        <Wrapper>
          <img src="https://via.placeholder.com/300X160" alt="" srcset="" />
          <h1>Titulo do video</h1>
          <span>Nome do Canal</span>
          <p>Descrição</p>
        </Wrapper>
        <Wrapper>
          <img src="https://via.placeholder.com/300X160" alt="" srcset="" />
          <h1>Titulo do video</h1>
          <span>Nome do Canal</span>
          <p>Descrição</p>
        </Wrapper>
        <Wrapper>
          <img src="https://via.placeholder.com/300X160" alt="" srcset="" />
          <h1>Titulo do video</h1>
          <span>Nome do Canal</span>
          <p>Descrição</p>
        </Wrapper>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    listVideo: state.searchVideo.listVideo,
    loading: state.searchVideo.loading,
    error: state.searchVideo.error
  };
};

export default connect(mapStateToProps, null)(ListVideo);
