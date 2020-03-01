import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Wrapper } from "./styles";

class ListVideo extends Component {
  renderVideo = video => {
    return (
      <Container>
        <Wrapper>
          <img src={video.snippet.thumbnails.high.url} alt="imagem" />
          <h1>{video.snippet.title}</h1>
          <span>{video.snippet.channelTitle}</span>
          <p>{video.snippet.description}</p>
          <button type="button">mais detalhes</button>
        </Wrapper>
      </Container>
    );
  };

  render() {
    return (
      <Container>
        <Wrapper>
          {this.props.listVideo.map(video => {
            console.log("meu video", video);
            return this.renderVideo(video);
          })}
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
