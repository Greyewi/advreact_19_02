import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Route, NavLink} from 'react-router-dom'
import SignInForm from '../../auth/sign-in-form'
import RestoreForm from '../../auth/restore-form'
import {signIn, signGoogleIn} from '../../../ducks/auth'

class AuthRoute extends Component {

    render() {
      
        return (
            <div>
                <div>
                   <div><NavLink to = "/auth/sign-in" activeStyle = {{ color: 'red' }}>Sign In</NavLink></div>
                   <div><NavLink to = "/auth/restore" activeStyle = {{ color: 'red' }}>Restore</NavLink></div>
                   <div><NavLink to = "/admin" activeStyle = {{ color: 'red' }}>Admin</NavLink></div>
                   <div><NavLink to = "/employers" activeStyle = {{ color: 'red' }}>Employers</NavLink></div>
                   <div><NavLink to = "/clients" activeStyle = {{ color: 'red' }}>Clients</NavLink></div>
                </div>
                <h1>Аутентификация</h1>
                <div>
                    <Route path = "/auth/sign-in" render = {() => <SignInForm
                      googleSubmit={this.handleSignGoogleIn}
                      onSubmit = {this.handleSignIn}/>}
                    />
                    <Route path = "/auth/restore" render = {() => <RestoreForm onSubmit = {this.handleSignIn}/>}/>
                </div>
            </div>
        )
    }

    handleSignIn = ({ email, password }) => this.props.signIn(email, password)
    handleSignGoogleIn = () => this.props.signGoogleIn()
}

export default connect(null, { signIn, signGoogleIn })(AuthRoute)