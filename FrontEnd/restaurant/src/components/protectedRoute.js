import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ client, isAuthenticated }) {
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    return client;
}