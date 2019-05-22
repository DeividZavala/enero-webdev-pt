import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({ _id, email, username, logout }) => (
  <nav className='uk-navbar-container' uk-navbar='true'>
    <div className='uk-navbar-left'>
      <a className='uk-navbar-item uk-logo' href='#'>
        Logo
      </a>
    </div>

    <div className='uk-navbar-right'>
      {!_id ? (
        <ul className='uk-navbar-nav'>
          <li>
            <Link to='/login'>Iniciar sesión</Link>
          </li>
          <li>
            <Link to='/register'>Registro</Link>
          </li>
        </ul>
      ) : (
        <ul className='uk-navbar-nav'>
          <li onClick={logout}>
            <a href='#'>Cerrar sesión</a>
          </li>
        </ul>
      )}
    </div>
  </nav>
)

export default NavBar
