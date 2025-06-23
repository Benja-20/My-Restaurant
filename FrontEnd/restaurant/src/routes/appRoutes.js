import ReservationList from '../components/ReservationList';
import NewReservation from '../pages/reservations/newReservation';
import protectedRoute from './protectedRoute';



{/* … dentro de <Routes> … */ }
<>
    <Route
        path="/reservations"
        element={
            <ProtectedRoute>
                <ReservationsList />
            </ProtectedRoute>
        }
    />
    <Route
        path="/reservations/new"
        element={
            <ProtectedRoute>
                <NewReservation />
            </ProtectedRoute>
        }
    />
</> 
