import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { TextField } from '@mui/material';
import { useState } from 'react';
import './Medicines.css'
import { useNavigate } from 'react-router-dom';
import AddMedicine from './AddMedicine';

function createData(name, id, group, qty) {
    return { name, id, group, qty };
}

const rows = [
    createData('Augmentin 625 Duo Tablet', 'D06ID232435452', 'Generic Medicine', 24),
    createData('Azithral 500 Tablet', 'D06ID232435450', 'Generic Medicine', 37),
    createData('Ascoril LS Syrup', 'D06ID232435455', 'Diabetes', 24),
    createData('Azee 500 Tablet', 'D06ID232435456', 'Generic Medicine', 67),
    createData('Allegra 120mg Tablet', 'D06ID232435462', 'Diabetes ', 49),
    createData('Alex Syrup', 'D06ID232435457', 'Generic Medicine', 49),
    createData('Amoxyclav 625 Tablet', 'D06ID232435458', 'Generic Medicine', 49),
    createData('Avil 25 Tablet', 'D06ID232435454', 'Generic Medicine', 49),
];

export default function Medicines() {
    const [componentController, changecomponentController] = useState('medicines');

    const changeToAddMedicines = () => {
        changecomponentController('addmedicine')
    }


    return (
        <div>
            {
                componentController === 'medicines' ?
                    <div className='medicines_container'>
                        <div className='med_inventory_list'>
                            <div className='dashboard_header'>
                                <h2>Inventory > List of Medicines</h2>
                                <p>List of Medicines available for sale</p>

                                <div className='navigation_buttons'>
                                    <Button sx={{ ':hover': { bgcolor: '#1D242E', color: 'white' }, bgcolor: '#283342', margin: '10px' }} variant="contained">List of Medicines</Button>
                                    <Button sx={{ ':hover': { bgcolor: '#1D242E', color: 'white' }, bgcolor: '#283342', margin: '10px' }} variant="contained">Medicine Groups</Button>
                                </div>
                                <br></br>
                                <TextField style={{ width: '500px', backgroundColor: 'white' }} id="outlined-basic" label="Search Medicine Inventory" variant="outlined" />
                                <br></br> <br></br>
                            </div>
                            <div className='add_medicine_button'>
                                <Button sx={{ ':hover': { bgcolor: '#1D242E', color: 'white' }, bgcolor: '#F0483E', margin: '10px' }} variant="contained" onClick={changeToAddMedicines}>Add New Item</Button>
                            </div>

                        </div>

                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Medicine Name</TableCell>
                                        <TableCell align="right">Medicine ID</TableCell>
                                        <TableCell align="right">Medicine Group</TableCell>
                                        <TableCell align="right">Oty</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.name}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.id}</TableCell>
                                            <TableCell align="right">{row.group}</TableCell>
                                            <TableCell align="right">{row.qty}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    :
                    <AddMedicine />
            }
        </div>

    );
}
