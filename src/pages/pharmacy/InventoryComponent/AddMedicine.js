import React from 'react'
import Medicines from './Medicines'
import { useState } from 'react'
function AddMedicine() {

  const [componentChanger, setComponentChanger] = useState('addmedicine');
  const changeCompoonent = () => {
    setComponentChanger('medicines')
  }


  return (
    <div>
      {
        
      }
    </div>
  )
}

export default AddMedicine
