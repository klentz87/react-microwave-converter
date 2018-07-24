import React from 'react'; 
import { Button } from 'react-bootstrap';
import { Panel } from 'react-bootstrap';
import { Fade} from 'react-bootstrap';
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
      <div className='title-component'>
      	<h1>Microwave Converter</h1>
      	<h2>Find correct cooking times for your own microwave</h2>
        <a className='toggle' onClick={ ()=> this.setState({ open: !this.state.open })}>
  			{link}
        </a>
        <Collapse in={this.state.open}>
          <div>
            <p>
              The cooking times for microwavable foods are for specific microwave wattages. Use this application to find out the correct cooking time for your own microwave.
            </p>  
          </div>
        </Collapse>
      </div>

    );
  }

};

export default Title;
