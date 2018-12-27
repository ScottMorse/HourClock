import React, { Component } from 'react'

import styled from 'styled-components'

const StyledTitle = styled.h1`
    font-family: "Bowlby One SC";
    letter-spacing: 1px;
    color: whitesmoke;
    margin: -10px 0 20px 0;
`

export default class Header extends Component{
    render(){
        return <StyledTitle>What Time Is It Right Now?</StyledTitle>
    }
}