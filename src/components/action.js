import React, { Component } from 'react';
import Icon from './icons';

class Action extends Component {
  render() {
    return (
      <div className={`${this.props.className} action`}>
        { Icon('fas fa-plus-circle') }
        {/* 'far fa-times-circle' */}
      </div>
    );
  };
}

export default Action;
