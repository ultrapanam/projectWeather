import React, { Component } from 'react';
import logo from '../../static/icons/logo.svg';
import { Animated } from 'react-animated-css';


class Logo extends Component {

render() {
    return (
      <Animated
        className="home-logo-container"
        animationIn="fadeInUp"
        animationOut="fadeOutDown"
        isVisible={this.props.isMounted}
        animateOnMount={false}
        animationInDelay={500}
        animationOutDelay={500}
        animationInDuration={500}
        animationOutDuration={500}
      >
        <img src={logo} className="home-logo" alt="logo" />
      </Animated>
    )
  }
}

export default Logo;
