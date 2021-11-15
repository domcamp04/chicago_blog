import './Register.css'
import { Link } from 'react-router-dom'


export default function Register() {
    return (
        <div className='register'>
            <span className="registerTitle">Register</span>
            <form className='registerForm'>
                <label className='inputLabel'>First Name</label>
                <input type="text" placeholder='First Name...' className='registerInput' />
                <label className='inputLabel'>Last Name</label>
                <input type="text" placeholder='Last Name...' className='registerInput' />
                <label className='inputLabel'>Email</label>
                <input type="text" placeholder='Email...' className='registerInput' />
                <label className='inputLabel'>Password</label>
                <input type="text" placeholder='Password...' className='registerInput' />
                <label className='inputLabel'>Confirm Password</label>
                <input type="text" placeholder='Confirm Password...' className='registerInput' />
                <button className='registerButton'>Register</button>
                <button className='registerLoginButton'>
                    <Link className='registerLoginButton' to='/login'>Login Here</Link>
                </button>
            </form>
        </div>
    )
}
