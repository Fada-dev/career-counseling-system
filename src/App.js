import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import BookingSession from "./BookingSession";
import BookingSummary from "./BookingSummary";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/BookingSession" element={<BookingSession />} />
          <Route path="/BookingSummary" element={<BookingSummary />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
