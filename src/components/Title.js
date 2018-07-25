import React from 'react'; 
import { Collapse } from 'react-bootstrap';
import '../css/Title.css'

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  }

render() {
	const link = this.state.open ? "less info" : "more info"

    return (
      <div className='title-div'>
      	<h1 className='title'>Microwave Converter</h1>
      	<h2>Find correct cooking times for your own microwave</h2>
        <a className='toggle' onClick={ ()=> this.setState({ open: !this.state.open })}>
  			{link}
        </a>
        <Collapse in={this.state.open}>
          <div>
            <p>
              The cooking times for microwavable foods are for specific microwave wattages. Use this application to find out the correct cooking time for your own microwave.
            </p>  
            <p>
              The power of most microwaves is between 600 and 1200 watts.
            </p>
          </div>
        </Collapse>
      </div>

    );
  }

};

export default Title;
