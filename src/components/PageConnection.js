import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as actions from '../redux/actions'

class Page extends Component {
    render(){
        return <div id="page-wrap">
            {this.props.children 
                ?
                React.cloneElement(this.props.children,this.props)
                :''}
        </div>
    }

}

function mapStateToProps(state) {
    return {
        secondAngle: state.secondAngle,
        minuteAngle: state.minuteAngle,
        hourAngle: state.hourAngle
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Page)