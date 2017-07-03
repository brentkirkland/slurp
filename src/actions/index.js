export const addRoom = (id, nickname, temp, time) => ({
  type: 'ADD_ROOM',
  id: id,
  nickname: nickname,
  temp: temp,
  time: time
})

export const addDevice = (id, room_id, nickname, moisture, temp, lastWatered) => ({
  type: 'ADD_DEVICE',
  id: id,
  room_id: room_id,
  nickname: nickname,
  moisture: moisture,
  temp: temp,
  lastWatered: lastWatered
})

export const addDevices = (data, room_id) => ({
  type: 'ADD_DEVICES',
  data: data,
  room_id: room_id
})
