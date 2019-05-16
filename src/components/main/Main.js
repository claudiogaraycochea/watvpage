import React, { Component } from 'react';
import './Main.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Run from '../run/Run';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    <Component {...props} />
  )} />
)

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="main">
        <div className="content">
          <BrowserRouter>
            <Switch>
              <Route path="/:websiteId" component={Run} />
            </Switch>
          </BrowserRouter>
        </div>
      </div>
    );
  }
}

export default Main;