import React    from "react";
import {Link}   from "react-router";

import {Form}   from "../components/Form";
import {Card}   from "../components/Card";
import {Header} from "../components/Header";

export class Login extends React.Component{

  constructor(props){
    super(props);
  }

  render(){

    return(
      <div>
        
        <Card sizeSet={["l6","offset-l3","s12","m8","offset-m2","frp-card"]} >
          <Form formItems={[{"type":"email","label":"User Name","name":"userName"},{"type":"password","label":"Password","name":"password"}]} heading={"Log In"} action={"/users/verify"} submitName="login"/>
        </Card>
      </div>
    );
  }
}
