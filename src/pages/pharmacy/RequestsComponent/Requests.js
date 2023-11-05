import React from 'react'
import './Requests.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';


function createData(patient_name, doctor_name, dist) {
    return { patient_name, doctor_name, dist };
}

const rows = [
    createData('Chris Dias', 'Dr. Amey Joshi', '3KM'),
    createData('Parth Barai', 'Dr. Sumedh Hoshing', '4KM'),
    createData('Amey Singh', 'Dr. Amey Joshi', '3.6KM'),
    createData('Parbat Singh', 'Dr. Kedar Wakankar', '1.2KM'),
    createData('Joel', 'Dr. Sumedh Hoshing', '0.5KM'),
    createData('Mustafiz Ansari', 'Dr. Amey Joshi', '3.2KM'),
];

function Requests() {

    const navigate = useNavigate();

    const attendPatient = () => {
        navigate('/doctordashboard/attendpatient')
      }

    const acceptMedicineRequest = () => {
        
    }


    return (
        <div className='appointments_component'>
            <div className='dashboard_top'>
                <TextField style={{ width: '500px' }} id="outlined-basic" label="Search patients here" variant="outlined" />
                <Button sx={{ ':hover': { bgcolor: '#1D242E', color: 'white' }, bgcolor: '#283342', margin: '10px' }} variant="contained"><SearchIcon /></Button>
            </div>
            <div className='appointments_header'>
                <h2>Incoming Requests</h2>
            </div>

            {rows.map((row) => (
                <div className='appointment_cards'>
                    <div className='appointment_card'>
                        <div>
                            <h3>Doctor: {row.doctor_name}</h3>
                            <h3>Patient: {row.patient_name}</h3>
                            <p>Distance: {row.dist}</p>
                        </div>
                        <div className='attend_button_container'>
                        <Button href="https://convertingcolors.com/rgb-color-225_232_237.html?search=RGB(225,%20232,%20237)" sx={{ ':hover': { color: '#1D242E' }, color: '#283342', margin: '10px' }} variant="text" >View Prescription</Button>
                            <Button sx={{ ':hover': { bgcolor: '#1D242E', color: 'white' }, bgcolor: '#283342', color: 'white', margin: '10px' }} variant="contained" onClick={acceptMedicineRequest}>Accept</Button>
                        </div>
                    </div>

                </div>
            ))}

           

        </div>
    )
}

export default Requests
