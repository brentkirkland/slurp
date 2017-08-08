import React, {Component} from 'react';
import './App.css';
import Device from './Device'
import PropTypes from 'prop-types'

class Room extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tab: 'raw'
    };
  }

  componentDidMount() {
    if (this.props.roomId !== "loading") {
      this.getDevices(this.props.roomId)
    }
  }

  getDevices(room) {
    var url = "https://us-central1-slurp-165217.cloudfunctions.net/getScans?room=" + room
    fetch(url).then(res => res.json()).then(json => this.addDevices(json))
  }

  addDevices(json) {
    this.props.addDevices(json[0], this.props.roomId)
  }

  renderRow(device, index) {
    console.log(device)
    return <Device name={device.device_nickname || 'test_device'} moisture={device.moisture} temp={device.temperature} light={device.light} timestamp={device.timestamp} conductivity={device.conductivity} max={device.max} key={this.props.roomId + 'row' + index}/>
  }

  renderRows() {
    var devices = this.props.devices.get(this.props.roomId);
    if (this.props.roomId !== "loading" && devices !== undefined) {
      return devices.map(this.renderRow.bind(this))
    }
  }

  changeToStats(e) {
    this.setState({tab: 'stats'})
  }

  changeToGraph(e) {
    this.setState({tab: 'graph'})
  }

  changeToRaw(e) {
    this.setState({tab: 'raw'})
  }

  renderTab() {
    if (this.state.tab === 'raw') {
      return (
        <div>
          <div className='Tab-section'>
            <span className='Span-bold' onMouseDown={this.changeToStats.bind(this)}>Stats</span>
            <span className='Span-bold' onMouseDown={this.changeToGraph.bind(this)}>Graph</span>
            <span className='Span-bold'>
              <u>Raw Data</u>
            </span>
          </div>
          <div className='Device-guide'>
            <p className='Device-moisture'>Moisture</p>
            <p className='Device-moisture'>Fertility</p>
            <p className='Device-moisture'>Light</p>
            <p className='Device-moisture'>Temperature</p>
            <p className='Device-moisture'>Time</p>
          </div>
          {this.renderRows()}
        </div>
      )
    } else if (this.state.tab === 'graph') {
      return (
        <div>
          <div className='Tab-section'>
            <span className='Span-bold' onMouseDown={this.changeToStats.bind(this)}>Stats</span>
            <span className='Span-bold'>
              <u>Graph</u>
            </span>
            <span className='Span-bold' onMouseDown={this.changeToRaw.bind(this)}>Raw Data</span>
          </div>
          <div className='Tab-area'>
            <p>Graphs coming soon.</p>
          </div>
        </div>
      )
    } else {
      return (
        <div>
          <div className='Tab-section'>
            <span className='Span-bold'>
              <u>Stats</u>
            </span>
            <span className='Span-bold' onMouseDown={this.changeToGraph.bind(this)}>Graph</span>
            <span className='Span-bold' onMouseDown={this.changeToRaw.bind(this)}>Raw Data</span>
          </div>
          <div className='Tab-area'>
            <p>Quick stats coming soon.</p>
          </div>
        </div>
      )
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
        <div></div>
        {this.renderTab()}
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
