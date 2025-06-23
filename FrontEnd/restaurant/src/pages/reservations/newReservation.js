import { useState } from "react";
import { createReservation } from "../../api/reservations/reservationsAPI";
import { useNavigate } from "react-router-dom";

export default function NewReservation() {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(1);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createReservation({ date, time, guests });
            navigate('/reservations');
        } catch (err) {
            setError('Failed to create reservation');
        }
    }
    return (
        <div>
            <h2>New Reservation</h2>
            {error && <p className='error'>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Date:</label>
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Time:</label>
                    <input
                        type="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Guests:</label>
                    <input
                        type="number"
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        min="1"
                        required
                    />
                </div>
                <button type="submit">Create Reservation</button>
            </form>
        </div>
    )
};
