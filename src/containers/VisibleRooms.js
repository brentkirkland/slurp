import {
  connect
} from 'react-redux'

import {
  addRoom
} from '../actions'

import Rooms from '../components/Rooms'

const mapStateToProps = (state) => ({
  rooms: state.rooms
})

const mapDispatchToProps = {
  addRoom: addRoom
}

const VisibleRooms = connect(
  mapStateToProps,
  mapDispatchToProps
)(Rooms)

export default VisibleRooms
