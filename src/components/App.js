import React, { Component } from 'react';
import Button from './Button.js';
import Display from './Display.js';
import Power from './Power.js';
import Time from './Time.js';
import Title from './Title.js';
import NavigationBar from './NavigationBar';
import FooterPage from "./FooterPage";
import "../css/App.css"
import { Container } from 'mdbreact';
import { Row, Col } from "mdbreact";

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
    })
    
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
        <div>
          <div id="navbar-and-content" className="text-white">

                <NavigationBar />
                
                <div className="d-flex">
   
                  <Container className="content">   
                
                    <Title />  

                    <Row className="my-5 white-text">

                      <Col md="7" xs="8">
                        <Power 
                          value={this.state.originalPower}
                          onChange={this.handleChange}
                          id='originalPower'
                          isValid={this.state.individualValidations.originalPower}
                          className="mt-3"
                        >
                          What wattage is specified on the back of the package?
                        </Power>

                        <Time
                          minutes={this.state.minutes}
                          seconds={this.state.seconds}
                          onChange={this.handleChange}
                          isSecondsValid={this.state.individualValidations.minutes}
                          isMinutesValid={this.state.individualValidations.seconds}
                          className="mb-3"
                        />  
                      
                        <Power 
                          value={this.state.yourPower}
                          onChange={this.handleChange}
                          id='yourPower'
                          isValid={this.state.individualValidations.yourPower}
                        >
                          What is the wattage of your microwave?
                        </Power>
                      
                        <Button 
                          onSubmit={this.handleSubmit}
                          isDisabled={this.state.formValid}
                        />  
                      </Col>

                      <Col md="5" xs="12">
                        <Display 
                          display={this.state.display}
                        />
                      </Col>
                    </Row>  
                  </Container>  
                </div>  

          </div>

          <FooterPage/>
          
        </div>  
    )      
  }
}

export default App;
