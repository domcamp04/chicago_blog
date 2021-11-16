import { Link, Navigate } from 'react-router-dom'
import React, { Component } from 'react'
import './Login.css'

export default class Login extends Component {
    render(){
    return this.props.user ? <Navigate to='/' />:(
        <div className='login'>
            <span className="loginTitle">Login</span>
            <form className='loginForm' onSubmit={(e) => this.props.login(e)}>
                <label className='inputLabel'>Email</label>
                <input type="text" name='email' placeholder='Email...' className='loginInput' />
                <label className='inputLabel'>Password</label>
                <input type="password" name='password' placeholder='Password...' className='loginInput' />
                <button className='loginButton'>Login</button>
                <button className='loginRegisterButton'>
                    <Link className='loginRegisterButton' to='/register'>Register Here</Link>
                </button>
            </form>
        </div>
    )
}
}
