import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Events = () => {
  const [events, setEvents] = useState([
    { id: 1, title: 'Youth Panel', date: '02/03/23', time: '13:00 - 15:30', details: '1 Manager, 0 Workers, 0 Guests' },
    { id: 2, title: 'Digital Inclusion Event', date: '06/03/23', time: '10:00 - 15:00', details: '0 Managers, 4 Workers, 0 Guests' },
  ]);

  const [isFormVisible, setFormVisible] = useState(false);
  const [newEvent, setNewEvent] = useState({ title: '', date: '', time: '', details: '' });

  const toggleForm = () => {
    setFormVisible(!isFormVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const addEvent = () => {
    if (!newEvent.title || !newEvent.date || !newEvent.time || !newEvent.details) {
      alert("All fields are required");
      return;
    }

    setEvents([...events, { ...newEvent, id: events.length + 1 }]);
    setNewEvent({ title: '', date: '', time: '', details: '' });
  };

  return (
    <div className="events-container max-w-7xl mx-auto p-6 space-y-6 bg-[#ECD4EA] text-[#693B69] rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Upcoming Events</h2>
        <button
          onClick={toggleForm}
          className="bg-[#511F52] text-white p-2 rounded-lg flex items-center hover:bg-[#693B69] transition duration-300"
        >
          {isFormVisible ? <FaMinus className="mr-2" /> : <FaPlus className="mr-2" />}
          {isFormVisible ? "Close" : "Add Event"}
        </button>
      </div>

      <div
        className={`transition-all duration-500 overflow-hidden ${isFormVisible ? 'max-h-full' : 'max-h-0'}`}
        style={{ transition: 'max-height 0.5s ease' }}
      >
        <div className="event-form bg-[#A987A8] p-4 rounded-lg shadow-md space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Event Title"
            value={newEvent.title}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg bg-[#ECD4EA] text-[#693B69]"
          />
          <input
            type="date"
            name="date"
            placeholder="Event Date"
            value={newEvent.date}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg bg-[#ECD4EA] text-[#693B69]"
          />
          <input
            type="time"
            name="time"
            placeholder="Event Time"
            value={newEvent.time}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg bg-[#ECD4EA] text-[#693B69]"
          />
          <input
            type="text"
            name="details"
            placeholder="Event Details"
            value={newEvent.details}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg bg-[#ECD4EA] text-[#693B69]"
          />
          <button
            onClick={addEvent}
            className="w-full bg-[#511F52] text-white p-2 rounded-lg flex items-center justify-center hover:bg-[#693B69] transition duration-300"
          >
            <FaPlus className="mr-2" /> Add Event
          </button>
        </div>
      </div>

      <ul className="event-list space-y-4">
        {events.map(event => (
          <li
            key={event.id}
            className="event-item bg-[#511F52] p-4 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-lg font-semibold text-white">{event.title}</h3>
            <p className="text-sm text-[#A987A8]">{event.date} at {event.time}</p>
            <p className="text-sm text-[#ECD4EA]">{event.details}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Events;
