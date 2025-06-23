import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { registerUser } from '../../api/users/usersAPI';
import NavBar from '../../components/navbar';

console.log(1);
console.log(useState);

export default function RegisterPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }


        try {
            await registerUser({ username, password, password2: confirmPassword, email });
            navigate('/login'); // Redirect to login page after successful registration
        } catch (err) {
            console.error('Registration error FULL:', err);
            console.error('Error response:', err.response);
            console.error('Registration error:', err.response?.data?.datail);
            setError(err?.response?.data?.detail || JSON.stringify(err?.response?.data) || 'User cannot be registered. Please try again.');

        }
    };

    return (
        <div className="auth-page">
            <NavBar />
            <h2>Register</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit} className="auth-form">
                <label>
                    User:
                    <input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Confirm Password:
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </label>
                <br />
                <button type="submit">Submit</button>
            </form>
            <p>
                Do you have an account? <Link to="/login">Login</Link>
            </p>
        </div>
    );

}