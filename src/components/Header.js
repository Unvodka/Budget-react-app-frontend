import React from 'react'
import './Header.css'

const Header = () => {
  const user = localStorage.getItem('user-info')

  function logOut () {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = '/login'
  }
  
  return (
    <>
      <div className='header'>
        <h1>Budget manager</h1>

        { sessionStorage.getItem('activeSession') ?
        <div className="logout-dropdown" >
          <a href='/profile-page' alt='profile'><svg className='icon-profile' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/></svg>
          {user && user} </a>
        <button className="logout" onClick={logOut}>Logout</button>
        </div>  
        : null
        }
        
      </div>      
    </>
  )
}

export default Header
