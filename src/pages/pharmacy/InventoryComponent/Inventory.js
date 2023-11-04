import React from 'react'
import './Inventory.css'
import Medicines from './Medicines';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';
import MedicalServicesOutlinedIcon from '@mui/icons-material/MedicalServicesOutlined';
import WarningAmberOutlinedIcon from '@mui/icons-material/WarningAmberOutlined';
function Inventory() {
    const [componentChanger, setComponentChanger] = useState('inventory');

    const changeCompoonent = ()=> {
        setComponentChanger('medicines')
    } 


    return (
        <div className='dashboard_component_main'>
            {
                componentChanger === 'inventory' ?
                    <div>

                        {/* Top Bar */}
                        <div className='dashboard_top'>
                            <TextField style={{ width: '500px' }} id="outlined-basic" label="Search for anything here" variant="outlined" />
                            <Button sx={{ ':hover': { bgcolor: '#1D242E', color: 'white' }, bgcolor: '#283342', margin: '10px' }} variant="contained"><SearchIcon /></Button>
                        </div>

                        {/* Header Bar  */}
                        <div className='dashboard_header_container'>
                            <div className='dashboard_header'>
                                <h2>Inventory</h2>
                                <p>List of Medicines available for sale</p>

                                <div className='navigation_buttons'>
                                    <Button sx={{ ':hover': { bgcolor: '#1D242E', color: 'white' }, bgcolor: '#283342', margin: '10px' }} variant="contained" onClick={changeCompoonent}>List of Medicines</Button>
                                </div>
                            </div>
                        </div>


                        {/* Dashboard Cards */}
                        <div className='dashboard_cards'>

                            <div className='dash_card'>
                                <MonetizationOnOutlinedIcon style={{ fontSize: '2.5rem', color: 'yellow' }} />
                                <h2>₹ 8,55,875</h2>
                                <p>Revenue Jan 2022</p>
                                <div className='yellowshade'>
                                    <p className='detailed_reports'>View detailed reports >> </p>
                                </div>
                            </div>

                            <div className='dash_card'>
                                <MedicalServicesOutlinedIcon style={{ fontSize: '2.5rem', color: 'blue' }} />
                                <h2>298</h2>
                                <p>Medicines Available</p>
                                <div className='blueshade'>
                                    <p className='detailed_reports'>View detailed reports >> </p>
                                </div>
                            </div>

                            <div className='dash_card'>
                                <WarningAmberOutlinedIcon style={{ fontSize: '2.5rem', color: 'red' }} />
                                <h2>01</h2>
                                <p>Medicine Shortage</p>
                                <div className='redshade'>
                                    <p className='detailed_reports'>View detailed reports >> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <Medicines />
            }

        </div>
    )
}

export default Inventory
