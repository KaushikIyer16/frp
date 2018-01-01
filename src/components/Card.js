import React from 'react';
import ReactDOM from 'react-dom';

export class Card extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let classSet = "col";
    for (let classNames of this.props.sizeSet) {
      classSet+=" "+classNames;
    }
    return (
      <div className="row">
        <div className={classSet}>
          <div className="card-panel">
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}
