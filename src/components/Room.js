import React, { Component } from 'react';
import './App.css';
import Device from './Device'
import PropTypes from 'prop-types'

class Room extends Component {

  // shows multiple rooms
  // children are the devices per room

  render() {
    return (
      <div className='Room'>
        <div className='Room-header'>
          <h3>{this.props.name}</h3>
          <h3><i>{this.props.temp}</i></h3>
        </div>
        <div>
          <div className='Device-guide'>
            <p className='Device-name'>Name</p>
            <p className='Device-moisture'>Moisture %</p>
            <p className='Device-lastWater'>Last Watered</p>
          </div>
        </div>
        <Device name='tg01' moisture={50} lastWater='1m'/>
        <Device name='tg02' moisture={50} lastWater='1m'/>
        <Device name='tg03' moisture={50} lastWater='1m'/>
        <Device name='tg04' moisture={50} lastWater='1m'/>
        <Device name='tg05' moisture={50} lastWater='1m'/>
        <Device name='tg06' moisture={50} lastWater='1m'/>
        <Device name='tg07' moisture={50} lastWater='1m'/>
        <Device name='tg08' moisture={50} lastWater='1m'/>
      </div>
    );
  }
}

Room.propTypes = {
  name: PropTypes.string.isRequired,
  temp: PropTypes.string.isRequired
}


export default Room;
