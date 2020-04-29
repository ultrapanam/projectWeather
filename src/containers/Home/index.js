import React, { Component } from 'react';
import axios from 'axios';
import DocumentTitle from 'react-document-title';
import { connect } from 'react-redux';
import { Animated } from 'react-animated-css';
import Logo from '../../components/Logo';
import { changeAreMounted } from '../../utils/crossComponent/actions';
import '../Home/containers/Home/App.css';

class Home extends Component {
  componentDidMount() {
    this.props.changeAreMounted(true);
  }

  onClick = (e) => {
    console.log('Sending a GET API Call !!!');
    axios
      .get('/api/')
      .then(res => {
        console.log(res);
      })
      .then(response => {
        console.log(JSON.stringify(response));
      });
  }

  onFakeAnotherPage = () => {
    this.props.changeAreMounted(false);
    // here you an assigne go to another page function
    this.awaitBeforeFunctionRun(true, 1000, this.props.changeAreMounted);
  }

  awaitBeforeFunctionRun(value, time, callback) {
    this.timer = setTimeout(function() {
      if (value !== null) {
        callback(value);
      } else {
        callback();
      }
    }, time);
  }

  render() {
    return (
      <Animated
        className="home"
        animationIn="fadeIn"
        animationOut="fadeOu"
        isVisible={this.props.componensAreMounted}
        animateOnMount={false}
        animationInDuration={500}
        animationOutDuration={500}
      >
        <DocumentTitle title="React template" />
        <header className="home-header">
          <Logo isMounted={this.props.componensAreMounted} />
          <p>
            Edit <code>src/containers/Home/index.js</code> and save to reload.
          </p>
          <a
            href="https://react-bootstrap.github.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more about React Bootstrap.
          </a>
          <a
            href="https://www.npmjs.com/package/react-animated-css"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read more about React Animate.
          </a>
          <button type="button" onClick={this.onFakeAnotherPage}>
            Fake go to another page
          </button>
          <button type="button" onClick={this.onClick}>
            Send API request
          </button>
        </header>
      </Animated>
    )
  }
}

function mapStateToProps(state) {
  return {
    componensAreMounted: state.cross.componensAreMounted,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeAreMounted(areMounted) {
      dispatch(changeAreMounted(areMounted));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
