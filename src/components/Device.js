import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types'

class Device extends Component {

  // shows multiple rooms
  // children are the devices per room

  render() {
    return (
      <div className='Device'>
        <p className='Device-name'>{this.props.name}</p>
        <p className='Device-moisture'>{this.props.moisture}</p>
        <p className='Device-lastWater'>{this.props.lastWater}</p>
      </div>
    );
  }
}

Device.propTypes = {
  name: PropTypes.string.isRequired,
  moisture: PropTypes.number.isRequired,
  lastWater: PropTypes.string.isRequired
}

export default Device;
