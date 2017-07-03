
const { Map } = require('immutable')

const rooms = (state = Map({}), action) => {
  var new_state = state;
  switch (action.type) {
    case 'ADD_DEVICES':
      if (new_state.size === 0) {
        var empty = {}
        empty[action.room_id] = action.data
        return Map(empty)
      } else if (!new_state.has(action.room_id)) {
        return new_state.set(action.room_id, action.data)
      } else {
        const map2 = new_state.set(action.room_id, action.data);
        return map2
      }
    default:
      return state;
  }
}

export default rooms
