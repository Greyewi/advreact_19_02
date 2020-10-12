import React, { Component } from 'react'
import AdminRoute from './components/routes/admin'
import AuthRoute from './components/routes/auth'
import {Route, Redirect, Switch} from 'react-router-dom'
import ProtectedRoute from './components/common/ProtectedRoute'
import EmployersPage from './components/routes/employers-page'
import ClientsPage from './components/routes/clients-page'

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <ProtectedRoute path='/admin' component={AdminRoute}/>
          <ProtectedRoute path="/employers" component={EmployersPage}/>
          <ProtectedRoute path="/clients" component={ClientsPage}/>
          <Route path='/' component={AuthRoute}/>
          <Redirect from="" exact to='/auth' component={AuthRoute}/>
        </Switch>
      </div>
    )
  }
}

export default App