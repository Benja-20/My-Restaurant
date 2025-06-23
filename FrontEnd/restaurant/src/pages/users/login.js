import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { loginUser } from "../../api/users/usersAPI";
import NavBar from "../../components/navbar";

export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { access, refresh } = await loginUser({ username, password });
            localStorage.setItem('access', access);
            localStorage.setItem('refresh', refresh);
            navigate('/me'); // Redirect to home page after successful login
        }
        catch (err) {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="auth-page">
            <NavBar />
            <h2>Login</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit} className="auth-form">
                <label>
                    User
                    <input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Password
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Submit</button>
            </form>
            <p>
                Do not have an account? <Link to="/signup">Sign In</Link>
            </p>
        </div>
    );
};


