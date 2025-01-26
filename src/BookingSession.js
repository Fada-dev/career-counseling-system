import React from 'react';

const BookingSession = () => {
  return (
    <div className="booking-session">
      <h1 className="booking-title">Booking session</h1>
      <div className="form-container">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="fullName">Full Name <span>*</span></label>
            <input type="text" id="fullName" placeholder="Last name" />
          </div>
          <div className="form-group">
            <label htmlFor="otherName">Other Name(s)</label>
            <input type="text" id="otherName" placeholder="Others" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number <span>*</span></label>
            <input type="tel" id="phoneNumber" placeholder="Enter your phone number" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email <span>*</span></label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="sessionType">Session Type</label>
            <select id="sessionType">
              <option>Select session type</option>
              <option>Career Planning</option>
              <option>Counseling Services</option>
              <option>Stress Management</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="preferredCounselor">Preferred Counselor</label>
            <select id="preferredCounselor">
              <option>Select Preferred Counselor</option>
              <option>Dr. Smith</option>
              <option>Ms. Johnson</option>
              <option>Dr. Anthony</option>

            </select>
          </div>
        </div>
        <div className="form-row">
          <div className="form-group full-width">
            <label htmlFor="specialRequests">Do you have any special requests?</label>
            <textarea id="specialRequests" rows="5" placeholder="Enter any special requests here..."></textarea>
          </div>
        </div>
        <button className="confirm-button">Confirm</button>
      </div>
    </div>
  );
};

export default BookingSession;
