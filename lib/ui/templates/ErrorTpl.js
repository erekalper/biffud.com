import React, { Component, Fragment } from "react";

export default class ErrorPageTpl extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Fragment>
        <h1>404</h1>
      </Fragment>
    );
  }
}

ErrorPageTpl.propTypes = {};