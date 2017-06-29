import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types'
import TimeAgo from '@jshimko/react-time-ago'

class Device extends Component {

  // shows multiple rooms
  // children are the devices per room

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      moved: false
    };
  }

  handleClick(e) {
    if (!this.state.moved) {
      this.setState({
        open: !this.state.open,
      })
    } else {
      this.setState({
        moved: false
      })
    }
  }

  handleMove (e) {
    console.log('moved')
    if (!this.state.moved) {
      this.setState({
        moved: true
      })
    }
  }

  render() {
    if (this.state.open) {
      return (
        <div className='Device'>
          <div className='Device-row' onTouchMove={this.handleMove.bind(this)} onMouseDown={this.handleClick.bind(this)}>
            <p className='Device-name'>{this.props.name}</p>
            <p className='Device-moisture'>{this.props.moisture}</p>
            <p className='Device-lastWater'>{this.props.lastWater}</p>
          </div>
          <div className='Device-stats'>
            <div className='Device-mini'>
              <p>Name:</p>
              <p>{this.props.name}</p>
            </div>
            <div className='Device-mini'>
              <p>Major:</p>
              <p>{this.props.major}</p>
            </div>
            <div className='Device-mini'>
              <p>Minor:</p>
              <p>{this.props.minor}</p>
            </div>
            <div className='Device-mini'>
              <p>Fahrenheit:</p>
              <p>{this.props.fahrenheit}</p>
            </div>
            <div className='Device-mini'>
              <p>Celcius:</p>
              <p>{this.props.celcius}</p>
            </div>
            <div className='Device-mini'>
              <p>Last Updated:</p>
              <TimeAgo date={new Date(this.props.timestamp)} />
            </div>
            <div className='Device-mini'>
              <p>Stage: </p>
                <form>
                  <input type="radio" name="gender" value="veg"/> Veg
                  <input type="radio" name="gender" value="flower"/> Flower
                </form>
            </div>
            <div className='Device-mini'>
              <p>Min Moisture:</p>
              <p>{this.props.min}</p>
            </div>
            <div className='Device-mini'>
              <p>Max Moisture:</p>
              <p>{this.props.max}</p>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className='Device'>
          <div className='Device-row' onTouchMove={this.handleMove.bind(this)} onMouseDown={this.handleClick.bind(this)}>
            <p className='Device-name'>{this.props.name}</p>
            <p className='Device-moisture'>{this.props.moisture}</p>
            <p className='Device-lastWater'>{this.props.lastWater}</p>
          </div>
        </div>
      );
    }
  }
}

Device.propTypes = {
  name: PropTypes.string.isRequired,
  moisture: PropTypes.number.isRequired,
  lastWater: PropTypes.string.isRequired
}

export default Device;
