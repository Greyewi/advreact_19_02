import React, { Component } from 'react'
import {reduxForm, Field} from 'redux-form'
import emailValidator from 'email-validator'
import ErrorField from '../common/ErrorField'


class RestoreForm extends Component {

    render() {
        return (
            <form onSubmit = {this.props.handleSubmit}>
                <h2>Restore Form</h2>
                <Field name = "email" label = "Email" component = {ErrorField} />
                <button type = "submit">Submit</button>
            </form>
        )
    }
}

const validate = ({ email }) => {
    const errors = {}

    if (!email) errors.email = 'Введите почту'
    if (email && !emailValidator.validate(email)) errors.email = 'Не правильная почта'

    return errors
}

export default reduxForm({
    form: 'auth',
    validate
})(RestoreForm)