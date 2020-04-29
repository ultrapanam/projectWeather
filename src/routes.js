import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

const Home = React.lazy(() => import('./containers/Home'));

class Routes extends React.Component {
  componentDidMount() {
    console.log('Routes component is mounted');
    console.log(`Props componensAreMounted: ${this.props.componensAreMounted}`);
  }

  render() {
    // Here you can assign some components to show on all pages, for example some Navbar or Footer
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div style={{ display: 'none' }}>
          Fake component to show on all pages
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Suspense>
    );
  }
}

function mapStateToProps(state) {
  return {
    componensAreMounted: state.cross.componensAreMounted,
  };
}

function mapDispatchToProps(dispatch) {
  return {
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
