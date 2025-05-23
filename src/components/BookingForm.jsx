import '@styles/BookingForm.css';
import '@styles/Button.css';

import {useState} from 'react';

const BookingForm = ({availableTimes, dispatch}) => {
// Add defensive default in case availableTimes is undefined
const availableTimesList = Array.isArray(availableTimes) ? availableTimes : [];

const [date, setDate] = useState('2025-05-19');
const [time, setTime] = useState(availableTimesList.length > 0 ? availableTimesList[0] : '');
const [guestCount, setGuestCount] = useState(1);
const [occasion, setOccasion] = useState('Not selected');

const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form has been submitted.');

    setDate('2025-05-19');
    setTime(availableTimesList.length > 0 ? availableTimesList[0] : '');
    setGuestCount(1);
    setOccasion('Not selected');
}

const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch({type: 'UPDATE_TIMES', date: e.target.value});
}

const handleTimeChange = (e) => {
    setTime(e.target.value);
}

    return(
        <div className="form-container">
            <form onSubmit={handleSubmit} className='form'>
                <label htmlFor="res-date">Choose date</label>
                <input
                type="date"
                id="res-date"
                value={date}
                onChange={handleDateChange}
                />
                <label htmlFor="res-time">Choose time:</label>
                <select
                id="res-time"
                value={time}
                onChange={handleTimeChange}
                >
                    {availableTimesList.map((time) => (
                        <option key={time}>{time}</option>
                    ))}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input
                type="number"
                min="1" max="10"
                id="guests"
                value={guestCount}
                onChange={(e) => setGuestCount(parseInt(e.target.value) || 0)}
                />
                <label htmlFor="occasion">Occasion</label>
                <select
                id="occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                >
                    <option value="Not selected">Not selected</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                </select>

                <button type="submit" className="btn-primary">Make Your Reservation</button>
            </form>
        </div>
    );
};

export default BookingForm;