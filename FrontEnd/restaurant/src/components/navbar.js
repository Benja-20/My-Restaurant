import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { logoutUser } from "../api/users/usersAPI";
import "../assets/navbar.css"



function NavBar() {
    const location = useLocation();
    const navigate = useNavigate();
    const isLoginPage = location.pathname === '/login';
    const isAuthenticated = Boolean(localStorage.getItem('access'));

    const handleLogout = async () => {
        const refresh = localStorage.getItem('refresh');
        console.log('Sending lougout request')
        try {
            await logoutUser(refresh);
        } catch (err) {
            console.log('Logout error:', err);
        } finally {
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            navigate('/login');
        }
    }

    return (<div>
        <nav id="navbar">
            <ul>
                <li className="Navbar_element"><Link to="/">Home</Link></li>
                <li className="Navbar_element"><Link to={isLoginPage ? '/users/register/' : '/login'}>{isLoginPage ? 'Sign In' : 'Log In'}</Link></li>
                <li className="Navbar_element"><Link to='/reservations'>Reservations</Link> </li>
                {isAuthenticated ? (
                    <>
                        <li className="Navbar_element"><Link to='/me'>Me</Link></li>
                        <li className="Navbar_element"><button onClick={handleLogout}>Logout</button></li>
                    </>
                ) : null}
            </ul>
        </nav>
    </div>)
}

export default NavBar;