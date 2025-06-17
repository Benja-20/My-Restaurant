import React from "react";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../../api/users/usersAPI";

export default function NavBar() {
    const navigate = useNavigate();
    const isAuthenticated = Boolean(localStorage.getItem('access'));

    const handleLogout = async () => {
        try {
            await logoutUser(refresh);
        } catch (err) {
            console.log('Logout error:', err);
        } finally {
            localStorage.removeItem('access');
            localStorage.removeItem('refresh');
            navigate('/login');
        }
    };
    return (
        <nav id="navbar">
            <ul>
                {/* ... tus otros enlaces ... */}
                {isAuthenticated && (
                    <li className="Navbar_element">
                        <button onClick={handleLogout}>
                            Logout
                        </button>
                    </li>
                )}
            </ul>
        </nav>
    )
}