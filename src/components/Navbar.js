import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faFilePen, faArrowRightToBracket } from '@fortawesome/free-solid-svg-icons'



export const Navbar = ({ isAuth }) => {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faEnvelope} />
        Home
      </Link>
      {!isAuth ?
      (
      <Link to="/login">
      <FontAwesomeIcon icon={faArrowRightToBracket} />
        Login
      </Link>
      ) :
      (
        <>
        <Link to="/createpost">
        <FontAwesomeIcon icon={faFilePen} />
          記事投稿
        </Link>
        <Link to="/logout">
        <FontAwesomeIcon icon={faArrowRightToBracket} />
          Logout
        </Link>
        </>
      )}
    </nav>
  )
}
