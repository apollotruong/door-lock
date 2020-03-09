import React from "react";
import loading from "../assets/loading.svg";

const Loading = () => (
  <div className="spinner" class="styles.center">
    <img src={loading} alt="Loading" />
    <br />
    This may take a while!
  </div>
);

export default Loading;

var styles = `center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
`;
