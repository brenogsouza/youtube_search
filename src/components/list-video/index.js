import React, { Component } from "react";
import { connect } from "react-redux";
import Loading from "../loading";
import { Container, Content, Wrapper } from "./styles";

class ListVideo extends Component {
  renderVideo = video => {
    return (
      <Container>
        <Wrapper>
          <Content key={video.etag}>
            <img src={video.snippet.thumbnails.high.url} alt="imagem" />
            <h1>{video.snippet.title}</h1>
            <span>Canal: {video.snippet.channelTitle}</span>
            <p>{video.snippet.description}</p>
            <button type="button">mais detalhes</button>
          </Content>
        </Wrapper>
      </Container>
    );
  };

  render() {
    return (
      <Container>
        <Wrapper>
          {this.props.loading && (
            <div>
              <Loading>Carregando...</Loading>
            </div>
          )}
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
