import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

import Icon from '../icons';
import Arrow from '../arrow';
import Action from '../action';

class LibraryCourse extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: true,
      height: 0
    };
  }

    renderDescrtiption = function() {
      if(!this.state.status) {
        return (
        <div className="library-course__description">
          <div><label>Course Description</label></div>
          <p>{ this.props.description }</p>
        </div>
      )
    }
  }.bind(this);

  handleCallback = function(status) {
    let height = this.state.height == 0 ? 'auto' : 0;
    if (!status) {
      document.getElementById(this.id).classList.add("library-course-selected");
    } else {
      document.getElementById(this.id).classList.remove('library-course-selected');
    }
    this.setState({
      status,
      height
    });
  }.bind(this);

  render() {
    this.id= `library-course-${this.props.id}`;
    return (
      <div id="library-course" className="library-course">
        <div className="library-course__title-check">
          <label className="library-course__title">{ this.props.title }</label>
          { Icon('fas fa-check', 'library-course__icon') }
        </div>
        <Arrow
        callback={status => this.handleCallback(status)}
        id={this.props.id}
        className="library-course__arrow"
        />
        <Action
        id={this.props.id}
        onClick={() => this.props.toggleEnrolled(this.props.id)}
        className={`library-course__action ${this.props.enrolled ? 'action-remove' : ''}`}
        />
        { this.renderDescrtiption() }
      </div>
    );
  }
};

export default connect(null, actions)(LibraryCourse);
