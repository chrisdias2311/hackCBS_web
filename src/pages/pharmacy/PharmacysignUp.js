import React from 'react'
import './PharmacysignUp.css'
import TextField from '@mui/material/TextField';
import { useState } from 'react';

function PharmacysignUp() {

    const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
          console.log("Location found: ")
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser.');
    }
  };



    return (
        <div className='pharmacy_signup'>
            {/* <h1>Pharmacy signup</h1>
      <br></br>   <br></br> */}

            <div className='signup_inner_container'>
                <br></br>
                <div className='signup_header'>
                    <h1>Sign Up</h1>
                </div>
                <br></br><br></br>
                <div className='signup_row1'>
                    <TextField sx={{ width: '400px' }} id="outlined-basic" label="Enter Email" variant="outlined" />
                </div>
                <br></br> <br></br>
                <div className='signup_row2'>
                    <TextField sx={{ paddingRight: '10px' }} id="outlined-basic" label="Pharemacy name" variant="outlined" />
                    <TextField sx={{ paddingLeft: '10px' }} id="outlined-basic" label="Contact Number" variant="outlined" />
                </div>
                <br></br><br></br>
                <div className='signup_row3'>
                    <TextField sx={{ width: '400px' }} id="outlined-basic" label="Create Password" variant="outlined" />
                </div>
                <br></br><br></br>
                <div>
                    <button onClick={getLocation}>Get Location</button>
                </div>
            </div>
        </div>
    )
}

export default PharmacysignUp
