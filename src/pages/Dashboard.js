import React      from "react";
import {Link}     from "react-router";

import {Form}     from "../components/Form";
import {Card}     from "../components/Card";
import {Header}   from "../components/Header";

import {Profile}  from "../pages/Profile";

export class Dashboard extends React.Component{

  constructor(props){
    super(props);
  }
  render(){

    return(
      <div>
        <Header links={[{"name":"Profile","href":"profile"},{"name":"Dashboard","href":"dashboard"}]} />
        <h1>This is the dashboard</h1>

        {this.props.children}
      </div>
    );
  }
}
