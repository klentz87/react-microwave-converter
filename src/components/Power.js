import React, { Component } from 'react';
import FormErrors from './FormErrors'
import PropTypes from "prop-types";


class Power extends Component {
  render() {
    const { value, onChange, id, children, isValid } = this.props;

    return (

      <div>
        <label>
          {children}
        </label>  
        <div className="input-group col-md-5 px-0">  
        	<input type='text' className='form-control' id={id} value={value} onChange={onChange}></input>
          <div className="input-group-append">
  			    <span className="input-group-text" id="basic-addon2">watts</span>
        	</div>
        </div>
        <div>
          <FormErrors isValid={isValid}/>
        </div>
      </div>
    )
  }
}

Power.propTypes = {
  children: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  isValid: PropTypes.bool.isRequired
}

export default Power;