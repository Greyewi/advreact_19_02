import React, {Component} from 'react'
// import Menu from './menu.js'
// import Header from './header.js'
import {connect} from 'react-redux'


class Main extends Component {
  
  render() {
    
    //const {...props} = this.props
    return (
      <div className="main-container">
        {/*<Header {...props}>*/}
          {/*<Menu/>*/}
        {/*</Header>*/}
        <div className="wrapper">{this.props.children}</div>
      </div>
    )
  }
}


export default connect(null, null)(Main)