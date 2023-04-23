import React from 'react';
import {Link} from 'react-router-dom';
class Navbar extends React.Component{
    render () {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <span className="navbar-brand" href="#">Navbar</span>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <span className="nav-link" href="#"><Link to="/about">About</Link></span>
                </li>
                <li className="nav-item">
                    <span className="nav-link" href="#"><Link to="/contact">Contact</Link></span>
                </li>
                <li className="nav-item">
                    <span className="nav-link" href="#"><Link to="/login">Login</Link></span>
                </li>
                <li className="nav-item">
                    <span className="nav-link" href="#"><Link to="/user/:username">Users</Link></span>
                </li>
                </ul>
                
            </div>
            </nav>
        )
    }
}
export default Navbar;


