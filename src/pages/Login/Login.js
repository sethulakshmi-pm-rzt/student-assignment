import React, { Component } from 'react';
import './Login.css';

class Login extends Component {
  render() {
    return (
      <div className="login-wrapper">
        <h2 className={"login-heading"}>Welcome to Embibe</h2>
        <form className="student-login-wrapper">
          <span className={'login-id'}>Enter the id</span>
          <input
            className={'login-inputBox'}
            type={'input'}
            placeholder={'Enter the stud-id'}
            onBlur={(e) => {
              console.log('BB', e.target.value);
            }}
          />
          <button
            className={'login-submit-button'}
            type='button'
          >Submit
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {};


Login.defaultProps = {};

export default Login;