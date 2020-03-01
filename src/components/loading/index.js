import { css } from "@emotion/core";
import React from "react";
import { BeatLoader } from "react-spinners";

const override = css`
  display: flex;
  align-items: center;
  margin: 0 auto;
  border-color: red;
  height: 100vh;
`;

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  render() {
    return (
      <div className="sweet-loading">
        <BeatLoader
          css={override}
          size={15}
          margin={2}
          //size={"150px"} this also works
          color={"#069"}
          loading={this.state.loading}
        >
          Carregando ...
        </BeatLoader>
      </div>
    );
  }
}
export default Loading;
