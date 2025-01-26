import './App.css';
// import Map from './components/Map' ;
import PhotoBook from './components/PhotoBook';
import HomePage from './HomePage'; // Import HomePage component
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookingSession from './BookingSession';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
        <Route path="/" element={<HomePage />} /> {/* Set HomePage as the index element */}
          <Route path="/" element={<PhotoBook />} />
          <Route path="/BookingSession" element={<BookingSession />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;