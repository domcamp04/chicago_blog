import './Navbar.css' 
import { Link } from 'react-router-dom';
import React, { Component } from 'react'

export default class Navbar extends Component {
    render(){
    return (
        <div className='nav'>
            <div className="navL">
                <a href="https://www.instagram.com/chicago/"><i className="topIcon fab fa-instagram-square"></i></a>
                <a href="https://www.facebook.com/ChooseChicago/"><i className="topIcon fab fa-facebook-square"></i></a>
                
            </div>
            <div className="navC">
                <ul className='navList'>
                    <li className='navListItem'>
                        <Link className='navLink' to='/'>Home</Link>
                    </li>
                    <li className='navListItem'>
                        <Link className='navLink' to='/write'>New-Post</Link>
                    </li>
                    <li className='navListItem'>
                        <Link className='navLink' to='/register'>Register</Link>
                    </li>
                    <li className='navListItem'>
                        <Link className='navLink' to='/login'>Login</Link>
                    </li>
                </ul>
            </div>
            <div className="navR">
                {  this.props.user ? <h2 className='text-center'>{this.props.user.email}</h2>: null}
                    <li className='navListItem'>
                        { this.props.user ? <Link className='navLink' to='/logout' onClick={this.props.logout}>Logout</Link>: null}
                    </li>
            </div>
        </div>
    )
}
}