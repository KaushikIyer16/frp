import React from 'react';
import ReactDOM from 'react-dom';

export class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      formItems : this.props.formItems
    }
  }

  render(){
    let form = this.state.formItems.map((items,index) => {
      return(<div class="row" key={index}>
              <div class="input-field col l12 m12 s12">
                <input id={items.label} type={items.type} class="validate"/>
                <label for={items.label}>{items.label}</label>
              </div>
            </div>);
    });
    return(
      <div className="container">
        <div className="row">
          <h3>{this.props.heading}</h3>
          <div className="col l12 m12 s12">
            <form action={this.props.action}>
              {form}
              <button className="wbb-button btn waves-effect waves-light" type="submit" name={this.props.submitName} style={{fontWeight:600}}>{this.props.submitName}
              </button>
            </form>
          </div>
        </div>
      </div>

    );
  }
}
