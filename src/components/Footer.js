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
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
              <div className="columns">
                <div className="column is-4">
                <section className="menu">
                    <ul className="menu-list">
                      <li><Link to="/" className="navbar-item">Home</Link></li>
                      <li><Link className="navbar-item" to="/about">About</Link></li>
                      <li><Link className="navbar-item" to="/products">
                        Products
                      </Link>
                    </li>
                    <li>
                    <Link className="navbar-item" to="/contact/examples">
                      Form Examples
                    </Link>
                    </li>
                    <li><a
                      className="navbar-item"
                      href="/admin/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Admin
                    </a></li>
                    </ul>
                  </section>
                </div>
                <div className="column is-4">
                <section>
                  
                  <p class="menu-label">Find out more</p>
                  <ul className="menu-list">
                  <li><Link className="navbar-item" to="/contact">
                      Schedule and appointment
                    </Link></li>
                  </ul>
                </section>
                </div>
                <div className="column is-4">
                <a title="facebook" href="https://facebook.com">
                  <span className="icons fas fa-lg"></span>
                </a>
                </div>
              </div>

            </div>
          
        </div>
      </footer>
    )
  }
}

export default Footer
