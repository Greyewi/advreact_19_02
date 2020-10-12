import React, {Component} from 'react'
import {reduxForm} from 'redux-form'
import emailValidator from 'email-validator'
//import ErrorField from '../common/ErrorField'

export class ClientsForm extends Component {

    render() {
        return (
          <div>Клиенты</div>
        )
    }
}

const validate = ({firstname, lastname, email}) => {
    const errors = {}

    if (!email) errors.email = 'required field'
    if (email && !emailValidator.validate(email)) errors.email = 'invalid email'

    if (!firstname) errors.firstname = 'required field'

    if (!lastname) errors.lastname = 'required field'

    return errors
}

export default reduxForm({
    form: 'client',
    validate
})(ClientsForm)