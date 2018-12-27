import React, { Component } from 'react'
import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

import Header from './Header'
import Clock from './Clock'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Bowlby+One+SC');
    html {
        line-height: 2;
    }
    body {
        margin: 0;
    }
`

const StyledPage = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    background-color: mediumblue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export default class Page extends Component {

    render(){
        return <StyledPage>
            <GlobalStyle/>
            <Header/>
            <Clock {...this.props}/>
        </StyledPage>
    }
}