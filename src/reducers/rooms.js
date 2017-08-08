var initial_state = {rooms: []}

const rooms = (state = initial_state, action) => {
  var new_state = state;
  switch (action.type) {
    case 'ADD_ROOM':
      console.log(action)
      var room = {
        id: action.id,
        nickname: action.id,
        temp: action.temp,
        time: action.time
      }
      new_state.rooms.push(room)
      return Object.assign({}, new_state)
    default:
      return state;
  }
}

export default rooms
