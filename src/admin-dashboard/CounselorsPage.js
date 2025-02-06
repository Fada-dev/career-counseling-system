import React, { useState } from 'react';
import './CounselorsPage.css'; // Import CSS for custom styles
import counselor1 from '../images/counselor1.jpg';
import counselor2 from '../images/counselor2.jpg';
import counselor3 from '../images/counselor3.jpg';
import counselor4 from '../images/counselor4.jpg';
import counselor5 from '../images/counselor5.jpg';
import counselor6 from '../images/counselor6.jpg';

const counselors = [
  { id: 1, name: 'Jane Doe', image: counselor1 },
  { id: 2, name: 'John Smith', image: counselor2 },
  { id: 3, name: 'Emma Johnson', image: counselor3 },
  { id: 4, name: 'Michael Brown', image: counselor4 },
  { id: 5, name: 'Olivia Davis', image: counselor5 },
  { id: 6, name: 'Daniel Wilson', image: counselor6 },
];

const CounselorsPage = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="counselors-container">
      {!showForm ? (
        <>
          <div className="add-counselor-button">
            <button className="add-button" onClick={() => setShowForm(true)}>
              Add New Counselor
            </button>
          </div>
          <div className="counselors-grid-2cols">
            {counselors.map((counselor) => (
              <div key={counselor.id} className="counselor-card">
                <img
                  src={counselor.image}
                  alt={counselor.name}
                  className="counselor-image"
                />
                <h3 className="counselor-name">{counselor.name}</h3>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="form-container">
          <h2 className="form-title">Add New Counselor</h2>
          <div className="form-group">
            <label className="form-label">Name<span className="required">*</span></label>
            <input type="text" className="input-field" placeholder="Enter name" />
          </div>
          <div className="form-group">
            <label className="form-label">Image<span className="required">*</span></label>
            <div className="image-upload">
              <input type="file" className="upload-button" />
            </div>
          </div>
          <div className="form-actions">
            <button className="submit-button">Submit</button>
            <button className="close-button" onClick={() => setShowForm(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CounselorsPage;
