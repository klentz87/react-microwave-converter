import React, { Component } from 'react';
import logo from '../logo.svg';
import TimeFormat from 'hh-mm-ss'; // possible uninstall
import Button from './Button.js';
import Display from './Display.js';
import Power from './Power.js';
import Time from './Time.js';
import Title from './Title.js';
import FormErrors from './FormErrors.js';

const convertToSeconds = require('../utils/convertToSeconds.js').convertToSeconds
// uninstall react-time-input

class App extends Component {
  constructor() {
    super();
    this.state = {
      originalPower: '',
      yourPower: '',
      minutes: '',
      seconds: '',
      display: '',
      formErrors: {originalPower: '', 
                   yourPower: '',
                   minutes: '',
                   seconds: ''},
      originalPowerValid: false,
      yourPowerValid: false,
      minutesValid: false,
      secondsValid: false, 
      formValid: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const id = event.target.id;
    const value = event.target.value;

    this.setState({[id]: value},
                  () => { this.validateField(id, value) });
  }


  handleSubmit(event) {
    this.setState({
      display: convertToSeconds(this.state.minutes, this.state.seconds)
    }) 
    event.preventDefault();
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let originalPowerValid = this.state.originalPowerValid;
    let yourPowerValid = this.state.yourPowerValid;
    let minutesValid = this.state.minutesValid;
    let secondsValid = this.state.secondsValid;


    switch(fieldName) {
      case 'originalPower':
        originalPowerValid = value.match(/^[0-9]+$/);
        fieldValidationErrors.originalPower = originalPowerValid ? '' : ' is invalid';
        break;
      case 'yourPower':
        yourPowerValid = value.match(/^[0-9]+$/);
        fieldValidationErrors.yourPower = yourPowerValid ? '' : ' is invalid';
        break;
      case 'minutes':
        minutesValid = value.match(/^[0-9]+$/);
        fieldValidationErrors.minutes = minutesValid ? '' : ' is invalid';
        break;
      case 'seconds':
        secondsValid = value.match(/^[0-9]+$/);
        fieldValidationErrors.seconds = secondsValid ? '' : ' is invalid';
        break;                
      default:
        break;
    }
    this.setState({formErrors: fieldValidationErrors,
                    originalPowerValid: originalPowerValid,
                    yourPowerValid: yourPowerValid,
                    minutesValid: minutesValid,
                    secondsValid: secondsValid
                  }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.originalPowerValid && this.state.yourPowerValid && this.state.minutesValid && this.state.secondsValid});
  }



  render() {
    return (
      <div>
        <div className="container center">
          <Title />

          <Power 
            value={this.state.originalPower}
            onChange={this.handleChange}
            id='originalPower'
            formErrors={this.state.formErrors}
          >
            	What wattage is specified on the back of the package?
          </Power>
          
          <Power 
            value={this.state.yourPower}
            onChange={this.handleChange}
            id='yourPower'
            formErrors={this.state.formErrors}
          >
          	What is the wattage of your microwave?
          </Power>

          <Time
            minutes={this.state.minutes}
            seconds={this.state.seconds}
            onChange={this.handleChange}
            formErrors={this.state.formErrors}
          />  
          <Button 
            onSubmit={this.handleSubmit}
            isDisabled={this.state.formValid}
          />  

          <Display 
            value={this.state.display}
          /> 
        </div>
      </div>  
    )      
  }
}

export default App;
