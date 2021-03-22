import React from 'react';
import { Link } from 'react-router-dom';
import Logo  from '../../src/resources/Logo.png';
import './NavBar.css';

const Cabecalho = props => {
    return (
      <div>
       <nav className="navbar">
          <div className="navbar-container">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />                        
              </button>
              <Link className="navbar-brand"  to='/'>Logo</Link>
            </div>
            <div className="collapse navbar-collapse" id="Navbar">
              <ul className="nav navbar-nav navbar-right">
                <li> <img src={Logo }/></li>
                <li><Link to='/'>INICIO</Link></li>
                <li><Link to='/servico'>SERVICOS</Link></li>
                <li><Link to='/portfolio'>PORTFOLIO</Link></li>
                <li><Link to='/precos'>PRECOS</Link></li>
                <li><Link to='/contato'>FALE CONOSCO</Link></li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="jumbotron text-center">
        <h1>Decorcid</h1>
        <p>We specialize in blablabla</p>
        <form>
          <div className="input-group">
            <input
              type="email"
              className="form-control"
              size={50}
              placeholder="Email Address"
              required
            />
            <div className="input-group-btn">
              <button type="button" className="btn btn-danger">
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>

      
        
      </div>
    )
}

export default Cabecalho