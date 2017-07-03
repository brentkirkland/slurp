import React, {Component} from 'react';
import './App.css';
import PropTypes from 'prop-types'
import VisibleRoom from '../containers/VisibleRoom'

class Rooms extends Component {

  componentDidMount() {
    this.getRoom('test_garage')
  }

  getRoom(room) {
    var url = "https://us-central1-slurp-165217.cloudfunctions.net/getRoom?room=" + room
    fetch(url)
    .then(res => res.json())
    .then(json => json[0].map(this.addRoom.bind(this)))

  }

  addRoom (room, index) {
    this.props.addRoom(room.room_id, room.room_nickname, room.avg_temp, room.time)
  }

  renderRoom (room, index) {
    return (
      <VisibleRoom name={room.nickname} temp={room.temp + "° F"} roomId={room.id} key={'room' + index} />
    )
  }

  renderRooms () {
    return this.props.rooms.rooms.map(this.renderRoom.bind(this))
  }

  render() {
    if (this.props.rooms.rooms.length > 0) {
      return (
        <div className="Rooms">
          {this.renderRooms()}
          <div className="Rooms-updated">
            <p>New readings on the hour.</p>
          </div>
        </div>
      )
    } else {
      return (
        <div className="Rooms">
          <VisibleRoom name="Loading" temp="--" roomId="loading"/>
        </div>
      );
    }
  }
}

Rooms.propTypes = {
  addRoom: PropTypes.func.isRequired,
  rooms: PropTypes.object.isRequired
}

export default Rooms;
