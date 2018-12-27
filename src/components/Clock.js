import React, { Component } from 'react'

import styled from 'styled-components'

const StyledClock = styled.div`
    width: 500px;
    height: 500px;
    border-radius: 50%;
    background-color: whitesmoke;
    display: flex;
    justify-content: center;
    box-shadow: 0px 0px 50px 50px inset rgba(0,0,0,0.01);
    border: 10px ridge darkblue;
    .hand {
        background-color: black;
        height: 250px;
        width: 15px;
        transform-origin: bottom;
        position: absolute;
        border-radius: 50% 50% 0% 0% / 50% 50% 0% 0%;
    }
    #second-hand {
        width: 8px;
        height: 245px;
        margin-top: 5px;
        transition: transform 0.25s cubic-bezier(.57,.01,.72,1.5);
        transform: rotate(${props => props.secondAngle}deg);
        /* box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.3); */
    }
    #minute-hand {
        height: 200px;
        margin-top: 50px;
        width: 12px;
        transform: rotate(${props => props.minuteAngle}deg);
    }
    #hour-hand {
        height: 125px;
        margin-top: 125px;
        transform: rotate(${props => props.hourAngle}deg);
    }
    #dot {
        height: 30px;
        width: 30px;
        position: absolute;
        background-color: black;
        border-radius: 50%;
        align-self: center;
        box-shadow: 10px 5px 5px 1px rgba(0,0,0,0.05);
    }
`

const HourMark = styled.div`
    position: absolute;
    height: 250px;
    transform-origin: bottom;
    transform: rotate(${props => props.rotation}deg);
    .num-wrap {
        transform: rotate(${props => -props.rotation}deg);
        font-weight: bold;
        font-family: sans-serif;
        font-size: 25px;
        text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
    }
`

const MinuteMark = styled.div`
    position: absolute;
    height: 250px;
    transform-origin: bottom;
    transform: rotate(${props => props.rotation}deg);
`

export default class Clock extends Component {

    componentDidMount(){
        const ticker = setInterval(this.props.tick,1000)
    }

    render(){
        return <StyledClock {...this.props}>
            <div id="second-hand" className="hand"></div>
            <div id="minute-hand" className="hand"></div>
            <div id="hour-hand" className="hand"></div>
            <div id="dot"></div>
            {[...Array(12).keys()].map(num => {
                return <HourMark rotation={num * 30 + 30}>
                    <div className="num-wrap">{num + 1}</div>
                </HourMark>
            })}
            {[...Array(60).keys()].map(num => {
                return <MinuteMark rotation={num * 6}>
                    <div className="min-wrap">{num % 5 == 0?"":"|"}</div>
                </MinuteMark>
            })}
        </StyledClock>
    }
}