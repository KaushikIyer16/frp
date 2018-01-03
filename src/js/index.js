import React                      from "react";
import ReactDOM                   from "react-dom";
import {Router, Route,
        IndexRoute, hashHistory}  from "react-router";

import {Header}                   from "../components/Header";
import {Form}                     from "../components/Form";
import {Card}                     from "../components/Card";

import {Login}                    from "../pages/Login";
import {Dashboard}                from "../pages/Dashboard";
import {Profile}                  from "../pages/Profile";

const app = document.getElementById("frp");

export class Layout extends React.Component{
  constructor(props) {
    super(props);
  }
  render(){
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
}
ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Login}></IndexRoute>
      <Route path="dashboard" component={Dashboard}></Route>
      <Route path="profile" component={Profile}></Route>
    </Route>
  </Router>
  ,app);
