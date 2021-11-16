import './Register.css'
import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom'


export default class Register extends Component {
    render(){
    return this.props.user ? <Navigate to='/' /> :(
        <div className='register'>
            <span className="registerTitle">Register</span>
            <form className='registerForm' onSubmit={(e) => this.props.register(e) }>
                <label className='inputLabel'>Email</label>
                <input type="text" name='email' placeholder='Email...' className='registerInput' />
                <label className='inputLabel'>Password</label>
                <input type="password" name='password' placeholder='Password...' className='registerInput' />
                <label className='inputLabel'>Confirm Password</label>
                <input type="password" name='confirmPass' placeholder='Confirm Password...' className='registerInput' />
                <button className='registerButton'>Register</button>
                <button className='registerLoginButton'>
                    <Link className='registerLoginButton' to='/login'>Login Here</Link>
                </button>
            </form>
        </div>
    )
}
}
