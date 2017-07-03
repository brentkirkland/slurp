import { combineReducers } from 'redux'
import rooms from './rooms'
import devices from './devices'

const slurp = combineReducers({
  rooms,
  devices
})

export default slurp
