import React from 'react'
import { Link } from 'react-scroll'

const Header = () => {
  return (
    <header className='main-header' id='header'>
      <div className='bg-color'>
        <nav className='nav navbar-default navbar-fixed-top'>
          <div className='container'>
            <div className='navbar-header'>
              <button
                type='button'
                className='navbar-toggle collapsed'
                data-toggle='collapse'
                data-target='#mynavbar'
                aria-expanded='false'
                aria-controls='navbar'
              >
                <span className='fa fa-bars'></span>
              </button>
              <a href='index.html' className='navbar-brand'>
                교육그룹 INI Dream
              </a>
            </div>
            <div
              className='collapse navbar-collapse navbar-right'
              id='mynavbar'
            >
              <ul className='nav navbar-nav'>
                <li className='active'>
                  <Link to='header' smooth={true} duration={500}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to='feature' smooth={true} duration={500}>
                    I&I EDU
                  </Link>
                </li>
                <li>
                  <Link to='portfolio' smooth={true} duration={500}>
                    I&I APP SERVICE
                  </Link>
                </li>
                <li>
                  <Link to='contact' smooth={true} duration={500}>
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
