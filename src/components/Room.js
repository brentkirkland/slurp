import React, {Component} from 'react';
import './App.css';
import Device from './Device'
import PropTypes from 'prop-types'

class Room extends Component {

  componentDidMount() {
    if (this.props.roomId !== "loading") {
      this.getDevices(this.props.roomId)
    }
  }

  getDevices(room) {
    var url = "https://us-central1-slurp-165217.cloudfunctions.net/getDevices?room=" + room
    fetch(url).then(res => res.json()).then(json => this.addDevices(json))
  }

  addDevices(json) {
    this.props.addDevices(json[0], this.props.roomId)
  }

  renderRow(device, index) {
    return <Device
      name={device.device_nickname}
      major={device.major}
      moisture={device.moisture}
      lastWater={device.lastWatered}
      minor={device.minor}
      fahrenheit={device.fahrenheit}
      celcius={device.celcius}
      timestamp={device.timestamp}
      min={device.min}
      max={device.max}
      key={this.props.roomId + 'row' + index}/>
  }

  renderRows () {
    var devices = this.props.devices.get(this.props.roomId);
    if (this.props.roomId !== "loading" && devices !== undefined) {
      return devices.map(this.renderRow.bind(this))
    }
  }

  render() {
    return (
      <div className='Room'>
        <div className='Room-header'>
          <h3>{this.props.name}</h3>
          <h3>
            <i>{this.props.temp}</i>
          </h3>
        </div>
        <div>
          <div className='Device-guide'>
            <p className='Device-name'>Name</p>
            <p className='Device-moisture'>Moisture</p>
            <p className='Device-lastWater'>Watered</p>
          </div>
        </div>
        {this.renderRows()}
      </div>
    );
  }
}

Room.propTypes = {
  name: PropTypes.string.isRequired,
  temp: PropTypes.string.isRequired,
  roomId: PropTypes.string.isRequired,
  addDevices: PropTypes.func.isRequired,
  devices: PropTypes.object.isRequired
}

export default Room;
