import React from 'react'
import './Dashboard.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
function DashboardComponent() {
  return (
    <div className='dashboard_component_main'>
      {/* Top Bar */}
      <div className='dashboard_top'>
        <TextField style={{ width: '500px' }} id="outlined-basic" label="Search for anything here" variant="outlined" />
        <Button sx={{ ':hover': { bgcolor: '#1D242E', color: 'white' }, bgcolor: '#283342', margin: '10px' }} variant="contained"><SearchIcon /></Button>
      </div>

      {/* Header Bar  */}
      <div className='dashboard_header_container'>
        <div className='dashboard_header'>
          <h2>Dashboard</h2>
          <p>A quick data overview of the inventory history</p>
        </div>
        <div className='download_button_container'>
          <Button sx={{ ':hover': { bgcolor: 'white', color: 'black' }, bgcolor: 'white', color: 'black', margin: '10px' }} variant="contained">Download reports ⬇</Button>
        </div>
      </div>


      {/* Dashboard Cards */}
      <div className='dashboard_cards'>
        <div className='dash_card' id='green_card'>
          <HealthAndSafetyOutlinedIcon style={{fontSize:'2.5rem', color:'green'}}/>
          <h2>Good</h2>
          <p>Inventory status</p>
          <div className='greenshade'>
          <p className='detailed_reports'>View detailed reports >> </p>
          </div>
        </div>

        <div className='dash_card'>
          <MonetizationOnOutlinedIcon style={{fontSize:'2.5rem', color:'yellow'}}/>
          <h2>₹ 8,55,875</h2>
          <p>Revenue Jan 2022</p>
          <div className='yellowshade'>
          <p className='detailed_reports'>View detailed reports >> </p>
          </div>
        </div>

        <div className='dash_card'>
          <MedicalServicesOutlinedIcon style={{fontSize:'2.5rem', color:'blue'}}/>
          <h2>298</h2>
          <p>Medicines Available</p>
          <div className='blueshade'>
          <p className='detailed_reports'>View detailed reports >> </p>
          </div>
        </div>

        <div className='dash_card'>
          <WarningAmberOutlinedIcon style={{fontSize:'2.5rem', color:'red'}}/>
          <h2>01</h2>
          <p>Medicine Shortage</p>
          <div className='redshade'>
            <p className='detailed_reports'>View detailed reports >> </p>
          </div>
        </div>
      </div>




      {/* Dashboard Boxes   */}
      <div className='dashboard_boxes'>

        <div className='dashboard_box'>
          <div className='box_top'>
            <h3>Inventory</h3>
          </div>
          <div className='box_bottom'>
            <div className='box_bottom_left'>
              <h2>298</h2>
              <p>Total no of Medicines</p>
            </div>
            <div className='box_bottom_right'>
              <h2>24</h2>
              <p>Medicine Groups</p>
            </div>
          </div>
        </div>

        <div className='dashboard_box'>
          <div className='box_top'>
            <h3>Quick Report</h3>
          </div>
          <div className='box_bottom'>
            <div className='box_bottom_left'>
              <h2>70,856</h2>
              <p>Qty of Medicines Sold</p>
            </div>
            <div className='box_bottom_right'>
              <h2>5,288</h2>
              <p>Invoices Generated</p>
            </div>
          </div>
        </div>
      </div>

      <div className='dashboard_boxes'>````
        <div className='dashboard_box'>
          <div className='box_top'>
            <h3>MyPharmacy</h3>
          </div>
          <div className='box_bottom'>
            <div className='box_bottom_left'>
              <h2>04</h2>
              <p>Total no of Suppliers</p>
            </div>
            <div className='box_bottom_right'>
              <h2>05</h2>
              <p>Total no of Users</p>
            </div>
          </div>
        </div>

        <div className='dashboard_box'>
          <div className='box_top'>
            <h3>Customers</h3>
          </div>
          <div className='box_bottom'>
            <div className='box_bottom_left'>
              <h2>845</h2>
              <p>Total no of Customers</p>
            </div>
            <div className='box_bottom_right'>
              <h2>Adali Mumab</h2>
              <p>Frequently bought them</p>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}

export default DashboardComponent