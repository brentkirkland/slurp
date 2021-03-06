import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types'
// import TimeAgo from '@jshimko/react-time-ago'
import javascriptTimeAgo from 'javascript-time-ago'
javascriptTimeAgo.locale(require('javascript-time-ago/locales/en'))
const timeAgo = new javascriptTimeAgo('en-US')
const twitter = timeAgo.style.twitter()

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

  handleLastWater () {
    console.log(this.props, 'propppppy')
    if (this.props.lastWater === '--') {
      return <p className='Device-lastWater'>--</p>
    } else if (this.props.lastWater > new Date().getTime()) {
      return <p className='Device-lastWater'>Live</p>
    } else {
      return <p className='Device-lastWater'>{timeAgo.format(new Date(Math.round(this.props.timestamp*1000)), twitter)}</p>
    }
  }

  render() {
    if (this.state.open) {
      return (
        <div className='Device'>
          <div className='Device-row' onTouchMove={this.handleMove.bind(this)} onMouseDown={this.handleClick.bind(this)}>
            <p className='Device-name'>{this.props.name}</p>
            <p className='Device-moisture'>{this.props.moisture + '%'}</p>
            {this.handleLastWater()}
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
              <p>{timeAgo.format(new Date(Math.round(this.props.timestamp)), twitter)}</p>
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
            <div className='Device-mini-bottom'>
              <p>Max Moisture:</p>
              <p>{this.props.max}</p>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className='Device'>
          <div className='Device-row'>
            <p className='Device-moisture'>{this.props.moisture + '%'}</p>
            <p className='Device-moisture'>{(this.props.conductivity*0.64).toFixed(2) + ' ppm'}</p>
            <p className='Device-moisture'>{this.props.light.toFixed(2) + ' lx'}</p>
            <p className='Device-moisture'>{(this.props.temp*9/5 + 32).toFixed(2) + ' °'}</p>
            {this.handleLastWater()}
          </div>
        </div>
      )
    }
  }
}

Device.propTypes = {
  name: PropTypes.string.isRequired,
  moisture: PropTypes.number.isRequired,
  lastWater: PropTypes.string.isRequired
}

export default Device;
