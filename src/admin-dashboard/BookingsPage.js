import React, { useState } from "react";
import { FaSearch, FaStar, FaRegStar } from "react-icons/fa";
import "./BookingsPage.css";

const BookingsPage = () => {
  // Sample booking data
  const [bookings] = useState([
    {
      id: "B001",
      name: "John Doe",
      currentLevel: "Undergraduate",
      appointment: "Feb 15, 2025, 10:30 AM",
      rating: 4,
    },
    {
      id: "B002",
      name: "Jane Smith",
      currentLevel: "Graduate",
      appointment: "Mar 03, 2025, 2:00 PM",
      rating: 5,
    },
    {
      id: "B003",
      name: "Alex Johnson",
      currentLevel: "Postgraduate",
      appointment: "Feb 28, 2025, 9:15 AM",
      rating: 3,
    },
    {
      id: "B004",
      name: "Emily Davis",
      currentLevel: "Undergraduate",
      appointment: "Mar 10, 2025, 11:45 AM",
      rating: 4,
    },
    {
      id: "B005",
      name: "Michael Brown",
      currentLevel: "Graduate",
      appointment: "Mar 20, 2025, 1:30 PM",
      rating: 5,
    },
  ]);

  const [searchQuery, setSearchQuery] = useState("");

  // Filter bookings based on searchQuery
  const filteredBookings = bookings.filter((booking) => {
    const query = searchQuery.toLowerCase();
    return (
      booking.name.toLowerCase().includes(query) ||
      booking.id.toLowerCase().includes(query) ||
      booking.currentLevel.toLowerCase().includes(query) ||
      booking.appointment.toLowerCase().includes(query)
    );
  });

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="star filled" />);
      } else {
        stars.push(<FaRegStar key={i} className="star" />);
      }
    }
    return stars;
  };

  return (
    <div className="bookings-page">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search bookings..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
        />
        <FaSearch className="search-icon" />
      </div>
      <h1 className="page-title">Booking History</h1>
      <div className="table-container">
        <table className="bookings-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" />
              </th>
              <th>Name</th>
              <th>ID</th>
              <th>Current Level</th>
              <th>Appointment Date &amp; Time</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((booking) => (
              <tr key={booking.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{booking.name}</td>
                <td>{booking.id}</td>
                <td>{booking.currentLevel}</td>
                <td>{booking.appointment}</td>
                <td>{renderStars(booking.rating)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingsPage;
