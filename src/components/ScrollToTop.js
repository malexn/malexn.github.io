import React, { Component } from "react";
import "../css/projects.css";

class ScrollUp extends Component {
  state = {
    intervalId: 0,
    thePosition: false
  };
  componentDidMount() {
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        this.setState({ thePosition: true });
      } else {
        this.setState({ thePosition: false });
      }
    });
    window.scrollTo(0, 0);
  }

  onScrollStep = () => {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  };

  scrollToTop = () => {
    let intervalId = setInterval(this.onScrollStep, this.props.delayInMs);
    this.setState({ intervalId: intervalId });
  };

  renderGoTopIcon = () => {
    if (this.state.thePosition) {
      return (
        <div className="move-top" onClick={this.scrollToTop}>
          <i className="icon-chevron-up"></i>
        </div>
      );
    }
  };
  render() {
    return <React.Fragment>{this.renderGoTopIcon()}</React.Fragment>;
  }
}

export default ScrollUp;
