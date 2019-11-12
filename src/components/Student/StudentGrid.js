import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './StudentGrid.css';

class StudentGrid extends Component {
  render() {
    const { gridData } = this.props;
    return (
      <div className={'studGrid-wrapper'}>
        <div className={'studGrid-header'}>
          <span className={'stud-name'}>Name: {gridData.name}</span>
          <span className={'stud-id'}>Roll No: {gridData.rollNo}</span>
          <span className={'stud-class'}>Class: {gridData.class}</span>
        </div>
        <div className={'stud-marks-wrapper'}>
          <span className={'stud-marks-heading'}>marks</span>
          <div className={'stud-marks'}>
            <span>{gridData.marks.s1}</span>
            <span>{gridData.marks.s2}</span>
            <span>{gridData.marks.s3}</span>
          </div>
          <span
            className={'stud-marks-total'}>Total Marks: {gridData.marks.s1 + gridData.marks.s2 + gridData.marks.s3}</span>
        </div>
      </div>
    );
  }
}

StudentGrid.propTypes = {
  gridData: PropTypes.object,
};


StudentGrid.defaultProps = {
  gridData: {},
};

export default StudentGrid;