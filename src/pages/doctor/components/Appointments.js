import React from 'react'
import './Appointments.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';


function createData(name, date, time) {
    return { name, date, time };
}

const rows = [
    createData('Chris Dias', '09 Jan 2023', '7:30pm'),
    createData('Parth Barai', '09 Jan 2023', '7:30pm'),
    createData('Amey Singh', '09 Jan 2023', '7:30pm'),
    createData('Parbat Singh', '09 Jan 2023', '7:30pm'),
    createData('Joel', '09 Jan 2023', '7:30pm'),
    createData('Mustafiz Ansari', '09 Jan 2023', '7:30pm'),
];

function Appointments() {

    const navigate = useNavigate();

    const attendPatient = () => {
        navigate('/doctordashboard/attendpatient')
      }


    return (
        <div className='appointments_component'>
            <div className='dashboard_top'>
                <TextField style={{ width: '500px' }} id="outlined-basic" label="Search patients here" variant="outlined" />
                <Button sx={{ ':hover': { bgcolor: '#1D242E', color: 'white' }, bgcolor: '#283342', margin: '10px' }} variant="contained"><SearchIcon /></Button>
            </div>
            <div className='appointments_header'>
                <h2>Appointments</h2>
            </div>

            {rows.map((row) => (
                <div className='appointment_cards'>
                    <div className='appointment_card'>
                        <div>
                            <h2>{row.name}</h2>
                            <p>In clinic</p>
                            <div className='date_sec'>
                                <h5>{row.date}</h5>
                                <h5>{row.time}</h5>
                            </div>
                        </div>
                        <div className='attend_button_container'>
                            <Button sx={{ ':hover': { bgcolor: '#25d9a8', color: 'black' }, bgcolor: '#0ACC97', color: 'black', margin: '10px' }} variant="contained" onClick={attendPatient}>Attend Patient</Button>
                        </div>
                    </div>

                </div>
            ))}

           

        </div>
    )
}

export default Appointments
