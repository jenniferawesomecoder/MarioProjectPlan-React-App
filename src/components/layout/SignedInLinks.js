import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../actions/authActions'

 const SignedInLinks = (props) => {
    
    return (
    <ul className="right">
      <li><NavLink to='/create'>New Project</NavLink></li>
      <li><a onClick={props.signOut}>Log Out</a></li>
      <li><NavLink className='btn btn-floating pink lighten-1' to='/'>NN</NavLink></li>

    </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null,mapDispatchToProps)(SignedInLinks)