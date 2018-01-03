import React from "react";
import ReactDOM from "react-dom";
import {Link} from "react-router";

export class Header extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      headerLinks: this.props.links
    }
  }

  render(){
    let headerItems = this.state.headerLinks.map((links,index) => {
      return(<li key={index}><Link key={index} to={links.href}>{links.name}</Link></li>);
    });
    return(
      <div className="navbar-fixed">

        <nav>
          <div className="nav-wrapper default-primary-color">
            <a href="index.php" className="brand-logo"><img src="" alt="" class="img-responsive" width="120"></img></a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              {headerItems}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
