import React from 'react'
import '../DoctorDashboard.css'

import PharmacyLogo from '../../pharmacy/images/pharmacy_logo.jpg'
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

import { useParams, useNavigate } from 'react-router-dom';
import Appointments from '../components/Appointments';
import AttendPatientComponent from './AttendPatientComponent';


function AttendPatient() {
  const params = useParams();
  const navigate = useNavigate();

  const navigateToAppointments = () => {
    navigate('/doctordashboard')
  }
  const attendPatient = () => {
    navigate('/doctordashboard/attendpatient')
  }
  const navigateToInventory = () => {
    navigate('/pharmacydashboard/inventory')
  }
  const navigateToReports = () => {
    navigate('/pharmacydashboard/reports')
  }

  return (
    <div className='doctor_dashboard'>
      <div className='doctor_appbar'>
        <div className='top'>
          <img src={PharmacyLogo}></img>
          <h2>CarePlus+</h2>
        </div>
        <div className='bottom'>

          {
            params.ext === 'dashboard' ?
              <div className='selected_element'>
                <DashboardIcon style={{ marginRight: '20px' }} />
                <h3>Appointments</h3>
              </div>
              :
              <div onClick={navigateToAppointments} className='element'>
                <DashboardIcon style={{ marginRight: '20px' }} />
                <h3>Appointments</h3>
              </div>
          }
{/* 
          {
            params.ext === 'inventory' ?
              <div className='selected_element'>
                <InventoryIcon style={{ marginRight: '20px' }} />
                <h3>Inventory</h3>
              </div>
              :
              <div onClick={navigateToInventory} className='element'>
                <InventoryIcon style={{ marginRight: '20px' }} />
                <h3>Inventory</h3>
              </div>
          }
          {
            params.ext === 'reports' ?
              <div className='selected_element'>
                <AssessmentIcon style={{ marginRight: '20px' }} />
                <h3>Reports</h3>
              </div>
              :
              <div onClick={navigateToReports} className='element'>
                <AssessmentIcon style={{ marginRight: '20px' }} />
                <h3>Reports</h3>
              </div>
          } */}


          <div className='element'>
            <ToggleOnIcon style={{ marginRight: '20px' }} />
            <h3>Configuration</h3>
          </div>
          <div className='element'>
            <ExitToAppIcon style={{ marginRight: '20px' }} />
            <h3>Sign Out</h3>
          </div>
        </div>
      </div>
      <div className='pharma_right_component'>
        <AttendPatientComponent/>
      </div>
    </div>
  )
}

export default AttendPatient

// Doctor Name         
// Date
// Time
// Status