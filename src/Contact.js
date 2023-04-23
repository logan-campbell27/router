import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './Navbar';
import About from './About';
import Login from './Login';
import User from './User';

const Contact = () =>{
    return(<div>
        <BrowserRouter>
        <Navbar/>
        {this.state.isLoggedIn ? <span>You are logged in</span> : <span>Not Logged in</span>}
        <Routes>
            <Route path="/about" component={About}/>
            <Route path="/login" render={()=><Login onClick={this.handleLogin}/>}/>
            <Route path="/contact" render = {
                () => (this.state.isLoggedIn ? <Contact/> : <Login/>)
            } />
            <Route path="/user/:username" component={User}/>
        </Routes>
        </BrowserRouter>
    </div>)
}
export default Contact;