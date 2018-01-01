import React    from "react";
import ReactDOM from "react-dom";
import {Header} from "../components/Header";
import {Form}   from "../components/Form";
import {Card}   from "../components/Card";

const app = document.getElementById("frp");

export class Layout extends React.Component{

  render(){
    return(
      <div>
        <Header links={[{"name":"title","href":"#1"},{"name":"title2","href":"#2"}]} />
        <Card sizeSet={["l6","offset-l3","s12","m8","offset-m2","frp-card"]} >
          <Form formItems={[{"type":"email","label":"User Name"},{"type":"password","label":"Password"}]} heading={"Log In"} action={"#"} submitName="login"/>
        </Card>
      </div>
    );
  }
}
ReactDOM.render(<Layout/>,app);
