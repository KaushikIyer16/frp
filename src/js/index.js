import React    from "react";
import ReactDOM from "react-dom";
import {Header} from "../components/Header";
import {Form}   from "../components/Form";

const app = document.getElementById("frp");

export class Layout extends React.Component{

  render(){
    return(
      <div>
      <Header links={[{"name":"title","href":"#1"},{"name":"title2","href":"#2"}]} />
      <Form formItems={[{"type":"text","label":"User Name"},{"type":"password","label":"Password"}]} heading={"Log In"} action={"#"}/>
      </div>
    );
  }
}
ReactDOM.render(<Layout/>,app);
