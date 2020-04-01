import React, { Component } from 'react';
import Icon from './icons';

class Action extends Component {
  render() {
    return (
      <button onClick={() => this.props.onClick()} className={`${this.props.className} action`}>
        { Icon('fas fa-plus-circle') }
        {/* 'far fa-times-circle' */}
      </button>
    );
  };
}

export default Action;
