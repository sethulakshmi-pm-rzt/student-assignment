import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

class StudentPage extends Component {
  render() {
    return (
      <div>
        jshdsjdsjhdb
      </div>
    );
  }
}

StudentPage.propTypes = {
  dispatch: PropTypes.func,
  history: PropTypes.array,
  screenId: PropTypes.string,
};


StudentPage.defaultProps = {
  dispatch: f => f,
  history: [],
  screenId: '',
};

const getRouterWrapperComponent = (component, reducer, ...rest) => {
  return () => <RouterWrapper render={component} asynReducer={() => reducer} {...rest} />;
};

export default StudentPage;