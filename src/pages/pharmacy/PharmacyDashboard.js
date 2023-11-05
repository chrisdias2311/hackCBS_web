import React from 'react'
import './PharmacyDashboard.css'

import Dashboard from './DashboardComponent/Dashboard';

import PharmacyLogo from './images/pharmacy_logo.jpg'
import DashboardIcon from '@mui/icons-material/Dashboard';
import InventoryIcon from '@mui/icons-material/Inventory';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import RequestPageOutlinedIcon from '@mui/icons-material/RequestPageOutlined';

import { useParams, useNavigate } from 'react-router-dom';
import Inventory from './InventoryComponent/Inventory';
import Requests from './RequestsComponent/Requests';

function PharmacyDashboard() {
    const params = useParams();
    const navigate = useNavigate();

    const navigateToDashboard = () => {
        navigate('/pharmacydashboard/dashboard')
    }
    const navigateToInventory = () => {
        navigate('/pharmacydashboard/inventory')
    }
    const navigateToReports = () => {
        navigate('/pharmacydashboard/reports')
    }
    const navigateToRequests = () => {
        navigate('/pharmacydashboard/requests')
    }

    return (
        <div className='pharmacy_dashboard'>
            <div className='pharma_appbar'>
                <div className='pharmd_top'>
                    <img src={PharmacyLogo}></img>
                    <h2>Pharma One</h2>
                </div>
                <div className='bottom'>

                    {
                        params.ext === 'dashboard' ?
                            <div className='selected_element'>
                                <DashboardIcon style={{ marginRight: '20px' }} />
                                <h3>Dashboard</h3>
                            </div>
                            :
                            <div onClick={navigateToDashboard} className='element'>
                                <DashboardIcon style={{ marginRight: '20px' }} />
                                <h3>Dashboard</h3>
                            </div>
                    }

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
                    }
                    {
                        params.ext === 'requests' ?
                            <div className='selected_element'>
                                <RequestPageOutlinedIcon style={{ marginRight: '20px' }} />
                                <h3>Requests</h3>
                            </div>
                            :
                            <div onClick={navigateToRequests} className='element'>
                                <RequestPageOutlinedIcon style={{ marginRight: '20px' }} />
                                <h3>Requests</h3>
                            </div>
                    }


                    <div className='element'>
                        <ExitToAppIcon style={{ marginRight: '20px' }} />
                        <h3>Sign Out</h3>
                    </div>
                </div>
            </div>
            <div className='pharma_right_component'>
                {
                    params.ext === 'dashboard' ?
                        <Dashboard />
                        :
                        (
                            params.ext === 'inventory' ? <Inventory /> 
                            :
                            <Requests/>
                        )
                }
                {/* <Dashboard /> */}
            </div>
        </div>
    )
}

export default PharmacyDashboard