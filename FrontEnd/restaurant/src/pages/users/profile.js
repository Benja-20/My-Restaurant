import { useEffect, useState } from 'react';
import { getUserProfile } from '../../api/users/usersAPI';
import { useNavigate } from 'react-router-dom';
import NavBar from '../../components/navbar';

export default function ProfilePage() {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchProfile() {
            try {
                const data = await getUserProfile();
                setUser(data);
            } catch (err) {
                // Si no está autenticado o token inválido, redirigir a login
                navigate('/login');
            }
        }
        fetchProfile();
    }, [navigate]);

    if (!user) return <p>Cargando perfil...</p>;

    return (
        <div className="profile-page">
            <NavBar />
            <h2>Perfil de Usuario</h2>
            <p><strong>Username:</strong> {user.username}</p>
            {user.email && <p><strong>Email:</strong> {user.email}</p>}
            {/* Muestra aquí otros campos de tu UserSerializer */}
        </div>
    );
}
