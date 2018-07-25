import React, { Component } from 'react';
import logo from '../logo.svg';
import Button from './Button.js';
import Display from './Display.js';
import Power from './Power.js';
import Time from './Time.js';
import Title from './Title.js';

const converter = require('../utils/converter.js').converter
const convertToSeconds = require('../utils/convertToSeconds').convertToSeconds
const convertSecondsToTimeFormat = require ('../utils/convertSecondsToTimeFormat').convertSecondsToTimeFormat

class App extends Component {
  constructor() {
    super();
    this.state = {
      originalPower: '',
      yourPower: '',
      minutes: '',
      seconds: '',
      displayResult: '',
      displayOriginalPower: '',
      displayYourPower: '',
      displayPackageTime: '',
      originalPowerValid: true,
      yourPowerValid: true,
      minutesValid: true,
      secondsValid: true, 
      formValid: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const id = event.target.id;
    const value = event.target.value;
    const toValidate = event.target.id + 'Valid'

    this.setState({[id]: value},
                  () => { this.validateField([toValidate], value) });
  }


  handleSubmit(event) {
    const value = converter(this.state.originalPower, this.state.yourPower, this.state.minutes, this.state.seconds)  
    const element = document.getElementById("display-id")
      this.setState({
        displayResult: convertSecondsToTimeFormat(value),
        displayOriginalPower: this.state.originalPower,
        displayYourPower: this.state.yourPower,
        displayPackageTime: convertSecondsToTimeFormat(convertToSeconds(this.state.minutes, this.state.seconds)),
        originalPower: '',
        yourPower: '',
        minutes: '',
        seconds: '',
        formValid: false
      }, () => {element.scrollIntoView()}) 

    event.preventDefault();
  }

  validateField(name, value) {   
      if (value.match(/^(\s*|\d+)$/)) {
          this.setState({ [name]: true
        }, this.validateForm);  
      } else {
          this.setState({ [name]: false},
           this.validateForm);
      }
  }

  validateForm() {
    this.setState({formValid: this.state.originalPowerValid 
                           && this.state.yourPowerValid 
                           && this.state.minutesValid 
                           && this.state.secondsValid
                           && this.state.yourPower !== ''
                           && this.state.originalPower !== ''
                           && (this.state.minutes !== '' || this.state.seconds !== '')});
  }



  render() {
    return (
      <div>
        <div className="app container center">
          
          <div className='title-component'>          
            <Title />
          </div>  

          <div className='original-power-component'>
            <h2 className='section-header'>On the package</h2>
            <Power 
              value={this.state.originalPower}
              onChange={this.handleChange}
              id='originalPower'
              isValid={this.state.originalPowerValid}
            >
                What wattage is specified on the back of the package?
            </Power>
          </div>  

          <div className='time-component'>  
            <Time
              minutes={this.state.minutes}
              seconds={this.state.seconds}
              onChange={this.handleChange}
              formErrors={this.state.formErrors}
              isSecondsValid={this.state.minutesValid}
              isMinutesValid={this.state.secondsValid}
            />  
          </div>  
          
          <div className='your-microwave-component'>  
            <h2 className='section-header'>Your microwave</h2>
            <Power 
              value={this.state.yourPower}
              onChange={this.handleChange}
              id='yourPower'
              isValid={this.state.yourPowerValid}
            >
              What is the wattage of your microwave?
            </Power>
          </div>  

          <div className='button-component'>
            <Button 
              onSubmit={this.handleSubmit}
              isDisabled={this.state.formValid}
            />  
          </div>
            
          <div className='display-component' id='display-id'>
            <Display 
              packageTime={this.state.displayPackageTime}
              yourPower={this.state.displayYourPower}
              originalPower={this.state.displayOriginalPower}
              resultTime={this.state.displayResult}
            />
          </div>  

        </div>
      </div>  
    )      
  }
}

export default App;
