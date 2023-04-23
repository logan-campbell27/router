import React from 'react';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import User from './User';
import { Routes, Route, BrowserRouter, Link } from 'react-router-dom';
import Navbar from './Navbar';

class App extends React.Component{
    state ={isLoggedInt: false};

    handleLogin = (status) => {
        this.setState({isLoggedIn: status},()=>{
            console.log("App says login statue = ",this.state.isLoggedIn)
        });
    }

    render () {
        return (
            <div>
        <BrowserRouter>
        <Navbar/>

        <Routes>
            <Route path="/about" component={About}/>
            <Route path="/login" render={()=><Login onClick={this.handleLogin}/>}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/user/:username" component={User}/>
        </Routes>
        
        <h5>Some friends of mine</h5>

        <ul>
            <li><Link to ="/user/Morgan">Morgan Wallen</Link></li>
            <li><Link to ="/user/Hardy">Hardy</Link></li>
            <li><Link to ="/user/Juice">Juice Wrld</Link></li>
            <li><Link to ="/user/Mac">Mac Miller</Link></li>
            <li><Link to ="/user/Hillsong">Hillsong</Link></li>

        </ul>
        </BrowserRouter>
    
        </div>)

    }
}

export default App;