import React, { Component } from 'react';

import Icon from '../icons';
import Arrow from '../arrow';
import Action from '../action';

class LibraryCourse extends Component {
  render() {
    return (
      <div className="library-course">
        <div className="library-course__title-check">
          <label className="library-course__title">Problem Solving</label>
          { Icon('fas fa-check', 'library-course__icon') }
        </div>
        <Arrow className="library-course__arrow"/>
        <Action className="library-course__action"/>
        <div className="library-course__description">
          <label>Course Description</label>
          <p>Sunt et aliquip. Ad ex coniunctione ab esse do expetendis quo quis arbitrantur
          mandaremus aliqua aliquip, legam si est fugiat consequat. Iis o
          comprehenderit.Elit a vidisse si tempor. Te non multos ipsum labore, te o legam
          possumus. Ad sint quibusdam, ad nisi et minim, eu mandaremus et vidisse hic quo
          et transferrem.</p>
        </div>
      </div>
    );
  }
};

export default LibraryCourse;
