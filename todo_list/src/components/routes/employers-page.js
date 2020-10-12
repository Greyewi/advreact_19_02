import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addPerson} from '../../ducks/people'
import Employers from '../employers'

class PersonPage extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <Employers/>
            </div>
        )
    }
}

export default connect(null, {addPerson})(PersonPage)