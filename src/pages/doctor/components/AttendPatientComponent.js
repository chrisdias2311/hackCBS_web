import React from 'react'
import './Appointments.css'
import './AttendPatientComponent.css'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const filter = createFilterOptions();


function createData(name, date, time, status) {
    return { name, date, time, status };
}

const rows = [
    createData('Dr. Sumedh Hoshing', '07 Jan 2023', '7:30pm', 'Completed'),
    createData('Dr. Kedar Wakankar', '26 October 2023', '7:00pm', 'Completed'),
    createData('Dr. Amey Joshi', '25th September 2023', '8:15pm', 'Missed'),
];

function AttendPatientComponent() {
    const [value, setValue] = React.useState(null);
    const [image, setImage] = useState('');

    const [addMedicine, setAddMedicine] = useState(false);

    const [medicines, setMedicines] = useState([]); // Array to store added medicines
    const [newMedicine, setNewMedicine] = useState({
        name: '',
        days: '',
        instructions: '',
        selectedTimes: [],
    });

    const handleMedicineChange = (e) => {
        const { name, value } = e.target;
        setNewMedicine({ ...newMedicine, [name]: value });
    };

    const handleInstructionChange = (e) => {
        setNewMedicine({ ...newMedicine, instructions: e.target.value });
    }

    const handleCheckboxChange = (e) => {
        const { name, checked } = e.target;
        let updatedTimes;
        if (checked) {
            updatedTimes = [...newMedicine.selectedTimes, name];
        } else {
            updatedTimes = newMedicine.selectedTimes.filter((time) => time !== name);
        }
        setNewMedicine({ ...newMedicine, selectedTimes: updatedTimes });
    };

    const handleAddMedicine = () => {
        if (newMedicine.name && newMedicine.days) {
            setMedicines([...medicines, newMedicine]);
            setNewMedicine({
                name: '',
                days: '',
                instructions: '',
                selectedTimes: [],
            });
        }
    };

    const numberOfDays = (e) => {
        setNewMedicine({ ...newMedicine, days: e.target.value });
    }

    const handleSaveMedicine = () => {
        console.log("The title: ", value.title)
        setNewMedicine({ ...newMedicine, name: value.title })

        const formdata = new FormData();
        formdata.append('name', newMedicine.name);
        formdata.append('days', newMedicine.days);
        formdata.append('duration', newMedicine.selectedTimes);
        formdata.append('instructions', newMedicine.instructions);
        formdata.append('file', image);

        setMedicines([...medicines, newMedicine]);
        setNewMedicine({
            name: '',
            days: '',
            instructions: '',
            selectedTimes: [],
        });

        setAddMedicine(false);

        console.log('Medicines', medicines)
    };

    const savePrescription = () => {
        // Extract the IDs of all medicines and make a POST request to send them to the backend
    };





    const [componentChange, setComponentChanger] = useState('history');

    const navigate = useNavigate();

    const attendPatient = () => {
        navigate('/doctordashboard/attendpatient')
    }

    const changeToHistory = () => {
        setComponentChanger('history')
    }
    const changeToPastAppointments = () => {
        setComponentChanger('pastappointments')
    }
    const changeToDiagnose = () => {
        setComponentChanger('diagnose')
    }
    const openForm = () => {
        setAddMedicine(true)
    }

    const handleImageChange = (event) => {
        setImage(event.target.files[0]);
        console.log('Type...', image)
        // imageData.append('file', formData.image);
        // setImageUpload(true);
    }


    return (
        <div className='appointments_component'>
            <div className='dashboard_top'>
                <TextField style={{ width: '500px' }} id="outlined-basic" label="Search patients here" variant="outlined" />
                <Button sx={{ ':hover': { bgcolor: '#1D242E', color: 'white' }, bgcolor: '#283342', margin: '10px' }} variant="contained"><SearchIcon /></Button>
            </div>
            <div className='appointments_header'>
                <Button onClick={changeToHistory} sx={{ ':hover': { bgcolor: '#1D242E', color: 'white' }, bgcolor: '#283342', margin: '10px' }} variant="contained">Patient History</Button>
                <Button onClick={changeToPastAppointments} sx={{ ':hover': { bgcolor: '#1D242E', color: 'white' }, bgcolor: '#283342', margin: '10px' }} variant="contained">Past Appointments</Button>
                <Button onClick={changeToDiagnose} sx={{ ':hover': { bgcolor: '#1D242E', color: 'white' }, bgcolor: '#283342', margin: '10px' }} variant="contained">Diagnose & Prescribe</Button>
            </div>

            {
                componentChange === 'pastappointments' ?
                    <div>
                        <h2>Past Appointments</h2>
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
                                        <Button sx={{ ':hover': { bgcolor: '#25d9a8', color: 'black' }, bgcolor: '#0ACC97', color: 'black', margin: '10px' }} variant="text" onClick={attendPatient}>View reports</Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    :
                    (
                        componentChange === 'history' ?
                            <div className='appointment_cards'>
                                <h2>Patient History</h2>
                                <div className='appointment_card'>
                                    <div>
                                        <h2>Medical Conditions</h2>
                                        <p>Thyroid</p>
                                        <p>Arthritis</p>
                                    </div>
                                </div>

                                <br></br>
                                <div className='appointment_card'>
                                    <div>
                                        <h2>Medication</h2>
                                        <p>Thyronom 65mg</p>
                                        <p>Cartigen 360</p>
                                        <p>GemCal Tablets</p>
                                    </div>
                                </div>
                                <br></br>
                                <div className='appointment_card'>
                                    <div>
                                        <h2>Allergies</h2>
                                        <p>Dust Allergy</p>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className='appointment_cards'>
                                <h2>Diagnose and Prescribe</h2>
                                <div className='add_medicine_card'>
                                    <div>
                                        <h2>Diagnosis</h2>
                                        <br></br>
                                        <TextField
                                            onChange={handleInstructionChange}
                                            style={{ width: '500px' }}
                                            id="outlined-multiline-flexible"
                                            label="Enter Diagnosis details"
                                            multiline
                                            maxRows={4}
                                        />
                                    </div>

                                    <br></br>

                                    <div>
                                        <Button onClick={openForm} sx={{ ':hover': { bgcolor: '#1D242E', color: 'white' }, marginLeft: '0px', bgcolor: '#283342', margin: '10px' }} variant="contained">Add Medicine</Button>

                                        <br></br> <br></br>

                                        {
                                            addMedicine === true ?
                                                <div className='add_medicine_form'>
                                                    <div className='add_medicine_row_1'>
                                                        <Autocomplete

                                                            value={value}
                                                            onChange={(event, newValue) => {
                                                                if (typeof newValue === 'string') {
                                                                    setValue({
                                                                        title: newValue,
                                                                    });
                                                                    setNewMedicine({ ...newMedicine, name: newValue.title })
                                                                } else if (newValue && newValue.inputValue) {
                                                                    // Create a new value from the user input
                                                                    setValue({
                                                                        title: newValue.inputValue,
                                                                    });
                                                                    setNewMedicine({ ...newMedicine, name: newValue.inputValue })
                                                                } else {
                                                                    setValue(newValue);
                                                                    setNewMedicine({ ...newMedicine, name: newValue.title })
                                                                }
                                                            }}
                                                            filterOptions={(options, params) => {
                                                                const filtered = filter(options, params);

                                                                const { inputValue } = params;
                                                                // Suggest the creation of a new value
                                                                const isExisting = options.some((option) => inputValue === option.title);
                                                                if (inputValue !== '' && !isExisting) {
                                                                    filtered.push({
                                                                        inputValue,
                                                                        title: `Add "${inputValue}"`,
                                                                    });
                                                                }

                                                                return filtered;
                                                            }}
                                                            selectOnFocus
                                                            clearOnBlur
                                                            handleHomeEndKeys
                                                            id="free-solo-with-text-demo"
                                                            options={top100Films}
                                                            getOptionLabel={(option) => {
                                                                // Value selected with enter, right from the input
                                                                if (typeof option === 'string') {
                                                                    return option;
                                                                }
                                                                // Add "xxx" option created dynamically
                                                                if (option.inputValue) {
                                                                    return option.inputValue;
                                                                }
                                                                // Regular option
                                                                return option.title;
                                                            }}
                                                            renderOption={(props, option) => <li {...props}>{option.title}</li>}
                                                            sx={{ width: 300 }}
                                                            freeSolo
                                                            renderInput={(params) => (
                                                                <TextField  {...params} label="Select Medicine" />
                                                            )}
                                                        />
                                                        <TextField onChange={numberOfDays} sx={{ marginLeft: '20px' }} id="outlined-basic" label="Enter course period (Days)" variant="outlined" />

                                                    </div>
                                                    <br></br>
                                                    <div className='add_medicine_row_2'>
                                                        <label className='check_box_component'>
                                                            <input
                                                                type="checkbox"
                                                                name="Before Breakfast"
                                                                checked={newMedicine.selectedTimes.beforeBreakfast}
                                                                onChange={handleCheckboxChange}
                                                            />
                                                            Before Breakfast
                                                        </label>
                                                        <label>
                                                            <input
                                                                type="checkbox"
                                                                name="After Breakfast"
                                                                checked={newMedicine.selectedTimes.beforeBreakfast}
                                                                onChange={handleCheckboxChange}
                                                            />
                                                            After Breakfast
                                                        </label>
                                                    </div>
                                                    <div className='add_medicine_row_2'>
                                                        <label className='check_box_component'>
                                                            <input
                                                                type="checkbox"
                                                                name="Befor Lunch"
                                                                checked={newMedicine.selectedTimes.beforeBreakfast}
                                                                onChange={handleCheckboxChange}
                                                            />
                                                            Before Lunch
                                                        </label>
                                                        <label>
                                                            <input
                                                                type="checkbox"
                                                                name="After Lunch"
                                                                checked={newMedicine.selectedTimes.beforeBreakfast}
                                                                onChange={handleCheckboxChange}
                                                            />
                                                            After Lunch
                                                        </label>
                                                    </div>
                                                    <div className='add_medicine_row_2'>
                                                        <label className='check_box_component'>
                                                            <input
                                                                type="checkbox"
                                                                name="Before Dinner"
                                                                checked={newMedicine.selectedTimes.beforeBreakfast}
                                                                onChange={handleCheckboxChange}
                                                            />
                                                            Before Dinner
                                                        </label>
                                                        <label>
                                                            <input
                                                                type="checkbox"
                                                                name="After Dinner"
                                                                check ed={newMedicine.selectedTimes.beforeBreakfast}
                                                                onChange={handleCheckboxChange}
                                                            />
                                                            After Dinner
                                                        </label>
                                                    </div>

                                                    <br></br>

                                                    <Button variant="contained" value={image} component="label" onChange={handleImageChange}>
                                                        Upload Image
                                                        <input hidden type="file" />
                                                    </Button>
                                                    <IconButton color="primary" aria-label="upload picture" component="label" onChange={handleImageChange}>
                                                        <input hidden type="file" />
                                                        <PhotoCamera />
                                                    </IconButton>

                                                    <br></br> <br></br> <br></br>

                                                    <Button onClick={handleSaveMedicine} sx={{ ':hover': { bgcolor: '#1D242E', color: 'white' }, marginLeft: '0px', bgcolor: '#283342', margin: '10px' }} variant="contained">Add to prescription</Button>
                                                </div>
                                                :
                                                <></>
                                        }
                                    </div>
                                </div>

                                <div className='add_medicine_card'>
                                    <h2>Prescription</h2>
                                    {
                                        medicines.length !== 0 ?
                                            <div className='actual_prescription'>
                                                <div className='prescription_header'>
                                                    <h3>Diagnose: {medicines[0].instructions}</h3>
                                                </div>
                                                {
                                                    medicines.map((medicine) => (
                                                        <div className='prescription_row'>
                                                            <p>Medicine name: {medicine.name}</p>
                                                            <p>Course period: {medicine.days} days</p>
                                                            <p>Timings: {medicine.selectedTimes.join(', ')}</p> {/* Joining array elements with a comma separator */}
                                                            <p>---------------------------------------------------------------------------------</p>
                                                        </div>
                                                        
                                                    ))
                                                }
                                                
                                            </div>
                                            :
                                            <></>

                                    }
                                    <Button onClick={savePrescription} sx={{ ':hover': { bgcolor: '#1D242E', color: 'white' }, marginLeft: '0px', bgcolor: '#283342', margin: '10px' }} variant="contained">Save Prescription</Button>
                                </div>
                            </div>
                    )
            }

        </div>
    )
}

export default AttendPatientComponent


const top100Films = [
    { title: 'Augmentin 625 Duo Tablet', year: 1994 },
    { title: 'Azithral 500 Tablet', year: 1972 },
    { title: 'Ascoril LS Syrup', year: 1974 },
    { title: 'Azee 500 Tablet', year: 2008 },
    { title: 'Allegra 120mg Tablet', year: 1957 },
    { title: "Alex Syrup", year: 1993 },
    { title: 'Amoxyclav 625 Tablet', year: 1994 },
];
