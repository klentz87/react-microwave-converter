import React from 'react'; 
import { Collapse } from 'reactstrap';
import '../css/Title.css'

class Title extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapse: false };
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({collapse: !this.state.collapse })
  }
 
  render() {
  	  const link = this.state.collapse ? "less info" : "more info"

      return (
        <div className='title-div'>
        	<h1 className='title'>Microwave Converter</h1>
{/*        	<h3>Find correct cooking times for your own microwave</h3>  */}
          <a onClick={this.toggle}>
    			{link}
          </a>
          <Collapse isOpen={this.state.collapse}>
            <div>
              <p>
                The cooking times for microwavable foods are for specific microwave wattages. Use this application to find out the correct cooking time for your own microwave. The power of most microwaves is between 600 and 1200 watts.
              </p>
            </div>
          </Collapse>
        </div>

      );
    }

  };

export default Title;
