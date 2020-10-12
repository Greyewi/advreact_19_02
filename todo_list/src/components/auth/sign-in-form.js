import React, { Component } from 'react'
import {reduxForm, Field} from 'redux-form'
import emailValidator from 'email-validator'
import ErrorField from '../common/ErrorField'
import './style.scss'

class SignInForm extends Component {

    render() {
        return (
          <>
            <form className="sign-in-form" onSubmit = {this.props.handleSubmit}>
                <h2>Sign In Form</h2>
                <div>
                    <Field label = "email" name="email" component={ErrorField} />
                </div>
                <div>
                    <Field label = "password" name="password" component={ErrorField} type="password" />
                </div>
                <button type = "submit" >Submit</button>
            </form>
            <button onClick={this.props.googleSubmit}>Google Auth</button>
          </>
        )
    }
}

const validate = ({ email, password }) => {
  const errors = {}
  
  if (!email) errors.email = 'Введите почту'
  if (email && !emailValidator.validate(email)) errors.email = 'Не правильная почта'
  
  if (!password) errors.password = 'Введите пароль'
  return errors
}

export default reduxForm({
    form: 'auth',
    validate
})(SignInForm)