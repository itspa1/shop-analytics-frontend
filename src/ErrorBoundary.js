import React, { Component } from "react";
import { Button } from "semantic-ui-react";

import "./loadingComponent.css";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    try {
      this.setState({ hasError: true });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="errorPageBody">
          <center>
            Sorry, there was a problem Loading the page. If the problem
            persists, please contact Syook support.
          </center>
          <center>
            <Button
              primary
              compact
              content="Reload"
              onClick={() => window.location.reload()}
            />
          </center>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
