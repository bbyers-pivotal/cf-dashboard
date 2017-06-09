import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link, Root} from 'react-router-dom'
import Home from './Home'
import AppList from './AppList'
import Navigation from './Navigation'
import FoundationList from './FoundationList'
import PipelineList from './PipelineList'
import * as actions from '../actions';
import { connect } from 'react-redux';

import { Container } from 'reactstrap';

class App extends Component {

  constructor(props) {
    super(props)
  }

  componentWillMount() {
    this.props.fetchFoundations()
  }

  render() {
    return (
      <Router>
        <Container>
          <Navigation/>
          <Route exact path="/" component={Home}/>
          <Route exact path="/apps" component={AppList}/>
          <Route exact path="/foundations" component={FoundationList}/>
          <Route exact path="/pipelines" component={PipelineList}/>
        </Container>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, actions)(App);
