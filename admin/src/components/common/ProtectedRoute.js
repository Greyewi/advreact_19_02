import React, { Component } from 'react'
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {userSelector} from '../../ducks/auth'
import Main from '../main'
//import AuthRoute from '../routes/auth'


class ProtectedRoute extends Component {
  
  render() {
    const {component, ...rest} = this.props // Собираем всё, кроме component, его вручную передаем
    return <Route {...rest} render = {this.getComponent}/>
  }
  
  getComponent = (...args) => {
    return this.props.isAuthorized ? <Main title={this.props.title} ><this.props.component {...args} /></Main> :
      <h1>403 Тебе сюда нельзя!</h1>
  }
}

export default connect(state => ({
  isAuthorized: userSelector(state)
}), null, null, { pure: false })(ProtectedRoute)