import React from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
      <div className="content has-text-centered">
                    <img
                    src={logo}
                    alt="Test"
                    style={{ width: '14em', height: '10em' }}
                  />
      </div>
        <div className="content has-text-centered black">
          <nav className="navbar has-background-black has-text-white-ter">
            <div className="container">
                <div className="columns">
                    <div className="column is-4">
                    <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                  <img
                    src={logo}
                    alt="Kaldi"
                    style={{ width: '100px', height: '100px' }}
                  />
                </Link>
                <a
                  className="navbar-item"
                  href="/admin/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Admin
                </a>
              </div>
              <div className="navbar-end" />
                    </div>
                    <div className="column is-4">
                        
                    </div>
                    <div className="column is-4">
                    </div>
                </div>
              
            </div>
          </nav>
        </div>
      </footer>
    )
  }
}

export default Footer
