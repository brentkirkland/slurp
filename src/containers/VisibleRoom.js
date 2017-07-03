import {
  connect
} from 'react-redux'

import {
  addDevices
} from '../actions'

import Room from '../components/Room'

const mapStateToProps = (state) => ({
  devices: state.devices
})

const mapDispatchToProps = {
  addDevices: addDevices
}

const VisibleRoom = connect(
  mapStateToProps,
  mapDispatchToProps
)(Room)

export default VisibleRoom
