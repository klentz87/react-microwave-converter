import React, { Component } from 'react';
import Button from './Button.js';
import Display from './Display.js';
import Power from './Power.js';
import Time from './Time.js';
import Title from './Title.js';
import NavigationBar from './NavigationBar';
import { Card } from 'reactstrap';

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
      display: {
              result: '',
              originalPower: '',
              yourPower: '',
              packageTime: ''
      },       
      individualValidations: {
              originalPower: true,
              yourPower: true,
              minutes: true,
              seconds: true,
      },
      formValid: true
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const id = event.target.id;
    const value = event.target.value;

    this.setState({[id]: value},
                  () => { this.validateField([id], value) });
  }


  handleSubmit(event) {
    const value = converter(this.state.originalPower, this.state.yourPower, this.state.minutes, this.state.seconds)  
    const element = document.getElementById("display-id");

    let display = {...this.state.display};
    display.result = convertSecondsToTimeFormat(value);
    display.originalPower = this.state.originalPower;
    display.yourPower = this.state.yourPower;
    display.packageTime = convertSecondsToTimeFormat(convertToSeconds(this.state.minutes, this.state.seconds));

    this.setState({
      display,
      originalPower: '',
      yourPower: '',
      minutes: '',
      seconds: '',
      formValid: false
    }, () => {element.scrollIntoView()})
    
    event.preventDefault();
  }

  validateField(name, value) {   
      
      let individualValidations = {...this.state.individualValidations};

      if (value.match(/^(\s*|\d+)$/)) {
          individualValidations[name] = true
          this.setState({ individualValidations
        }, this.validateForm);  
      } else {
          individualValidations[name] = false
          this.setState({ individualValidations },
           this.validateForm);
      }
  }

  validateForm() {
    this.setState({formValid: this.state.individualValidations.originalPower 
                           && this.state.individualValidations.yourPower
                           && this.state.individualValidations.minutes
                           && this.state.individualValidations.seconds
                           && this.state.yourPower !== ''
                           && this.state.originalPower !== ''
                           && (this.state.minutes !== '' || this.state.seconds !== '')});
  }





  render() {
    return (
      <div className="body">
        <NavigationBar />
          <Card className="app container center">

            <div className='title-component'>          
              <Title />
            </div>  

            <div className='original-power-component'>
              <h2 className='section-header'>On the package</h2>
              <Power 
                value={this.state.originalPower}
                onChange={this.handleChange}
                id='originalPower'
                isValid={this.state.individualValidations.originalPower}
              >
                  What wattage is specified on the back of the package?
              </Power>
            </div>  

            <div className='time-component'>  
              <Time
                minutes={this.state.minutes}
                seconds={this.state.seconds}
                onChange={this.handleChange}
                isSecondsValid={this.state.individualValidations.minutes}
                isMinutesValid={this.state.individualValidations.seconds}
              />  
            </div>  
            
            <div className='your-microwave-component'>  
              <h2 className='section-header'>Your microwave</h2>
              <Power 
                value={this.state.yourPower}
                onChange={this.handleChange}
                id='yourPower'
                isValid={this.state.individualValidations.yourPower}
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
                display={this.state.display}
              />
            </div>  

          </Card>
      </div>  
    )      
  }
}

export default App;
