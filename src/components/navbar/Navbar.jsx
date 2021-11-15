import './Navbar.css' 
import { Link } from 'react-router-dom';

export default function Navbar() {
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
                    <li className='navListItem'>
                        <Link className='navLink' to='/logout'>Logout</Link>
                    </li>
                </ul>
            </div>
            <div className="navR">
                <img className='navImage' src="https://via.placeholder.com/350" alt="placeholder" />
            </div>
        </div>
    )
}
