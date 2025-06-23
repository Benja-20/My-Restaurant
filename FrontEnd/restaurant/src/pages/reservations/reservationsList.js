import { useEffect, useState } from "react";
import { getReservations } from "../../api/reservations/reservationsAPI";
import { Link } from "react-router-dom";

export default function ReservationList() {
    const [reservations, setReservations] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await getReservations();
                setReservations(data);
            } catch (err) {
                setError('Reservation could not be made. Please try again.');
            }
        } fetchData();
    }, []);

    return (
        <div className='reservations-page'>
            <h2>My Reservations</h2>
            {error && <p className='error'>{error}</p>}
            <Link to="/reservations/new">Make a new reservation</Link>
            <ul>
                {reservations.map((reservation) => (
                    <li key={reservation.id}>
                        <p>Date: {reservation.date}</p>
                        <p>Time: {reservation.time}</p>
                        <p>Guests: {reservation.guests}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}