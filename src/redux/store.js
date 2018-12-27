import { createStore } from 'redux'

import rootReducer from './reducers/index'

const today = new Date()

const _hours = today.getHours()
const hours = _hours > 12 ? _hours - 12 : _hours
const minutes = today.getMinutes()
const seconds = today.getSeconds()

const startingState = {
    secondAngle: seconds * 6,
    minuteAngle: minutes * 6 + seconds * 0.1,
    hourAngle: hours * 30 + minutes * 0.5 + seconds * (0.5 / 60)
}

export default createStore(rootReducer, startingState)