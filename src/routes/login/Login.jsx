import { Link } from 'react-router-dom'
import './Login.css'

export default function Login() {
    return (
        <div className='login'>
            <span className="loginTitle">Login</span>
            <form className='loginForm'>
                <label className='inputLabel'>Email</label>
                <input type="text" placeholder='Email...' className='loginInput' />
                <label className='inputLabel'>Password</label>
                <input type="text" placeholder='Password...' className='loginInput' />
                <button className='loginButton'>Login</button>
                <button className='loginRegisterButton'>
                    <Link className='loginRegisterButton' to='/register'>Register Here</Link>
                </button>
            </form>
        </div>
    )
}
