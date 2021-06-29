import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = (props) => {

  return (
    <div>
      <Link to='/categories' style={{paddingRight: '10px'}}>Categories  </Link>
      <Link to='/categories/new'>Add Category</Link>
    </div>

  )
}

export default NavBar