import React, { Component } from 'react';

import Gradient from './gradient';
import ScheduleCourse from './scheduleCourse';
import ProgressTracker from './progressTracker';

class Schedule extends Component {
  render() {
    return (
      <div className="schedule">
        <h1 className="schedule_title">My schedule</h1>
        <ScheduleCourse title={'Problem solving'}/>
        <ScheduleCourse title={'Problem solving'}/>
        <ScheduleCourse title={'Problem solving'}/>
        <ProgressTracker/>
        <Gradient/>
      </div>
    )
  }
}

export default Schedule;
