import logo from './logo.svg';
import './App.css';

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import PharmacyDashboard from './pages/pharmacy/PharmacyDashboard';
import HospitalDashboard from './pages/hospital/HospitalDashboard';
import DoctorDashboard from './pages/doctor/DoctorDashboard';
import AttendPatient from './pages/doctor/components/AttendPatient';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/hospital" element={<HospitalDashboard />} />
        <Route path="/pharmacydashboard/:ext" element={<PharmacyDashboard />} />
        <Route path="/doctordashboard" element={<DoctorDashboard />} />
        <Route path="/doctordashboard/attendpatient" element={<AttendPatient />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
