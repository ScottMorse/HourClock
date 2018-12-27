export default function reducer(state = {
    secondAngle: 0,
    minuteAngle: 0
},action){
    switch(action.type){
        case 'TICK':
            const secondAngle = state.secondAngle + 6
            const minuteAngle = state.minuteAngle + 0.1
            const hourAngle = state.hourAngle + (0.1 / 60)
            return {
                ...state,
                // secondAngle: secondAngle == 360 ? 0:secondAngle,
                // minuteAngle: minuteAngle == 360 ? 0:minuteAngle,
                // hourAngle: hourAngle == 360 ? 0:hourAngle,
                secondAngle,
                minuteAngle,
                hourAngle
            }
        default:
            return state
    }
}