import React, { Component } from 'react'
import { render } from 'react-dom'

import { Provider } from 'react-redux'

import store from './redux/store'

import PageConnection from './components/PageConnection'
import Page from './components/Page'

class App extends Component {
    render(){
        return <Provider store={store}>
            <PageConnection>
                <Page/>
            </PageConnection>
        </Provider>
    }
}

render(<App/>,document.getElementById('root'))