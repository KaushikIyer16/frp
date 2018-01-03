import React      from "react";

import {Form}     from "../components/Form";
import {Card}     from "../components/Card";
import {Header}   from "../components/Header";

export class Profile extends React.Component{

  constructor(props){
    super(props);
  }

  render(){
    // <Header links={[{"name":"Profile","href":"#1"},{"name":"Logout","href":"#2"}]} />
    return(
      <div>
        <Header links={[{"name":"Profile","href":"profile"},{"name":"Dashboard","href":"dashboard"}]} />
        <h1>This is the profile</h1>
        {this.props.children}
      </div>
    );
  }
}
