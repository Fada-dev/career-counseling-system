import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import BookingSession from "./BookingSession";
import BookingSummary from "./BookingSummary";
import AdminDashboard from "./admin-dashboard/AdminDashboard";
import DashboardPage from "./admin-dashboard/DashboardPage";
import BookingsPage from "./admin-dashboard/BookingsPage";
import CounselorsPage from "./admin-dashboard/CounselorsPage";
import ReportPage from "./admin-dashboard/ReportPage";
import SettingsPage from "./admin-dashboard/SettingsPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path ="/HomePage" element={<HomePage />} />
          <Route path="/BookingSession" element={<BookingSession />} />
          <Route path="/BookingSummary" element={<BookingSummary />} />
          <Route path="/admin" element={<AdminDashboard />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="bookings" element={<BookingsPage />} />
            <Route path="counselors" element={<CounselorsPage />} />
            <Route path="report" element={<ReportPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
