import React, { useState,useContext } from 'react'
import { Link } from 'react-router-dom'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TextField } from '@mui/material';
import { Types } from '../Context';

const General = () => {
  const {type,setType} = useContext(Types)
  
  const [selectedDateTime, setSelectedDateTime] = useState(new Date())

  
  return (
    <div>
      <nav><a className="navbar-brand" href='/'>General 2/3</a></nav>
        <form action="">
            <div className="row gen">
              <div className="col-md-6">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DateTimePicker
                    label="Start Date & Time"
                    value={selectedDateTime}
                    onChange={(newVal) => {setSelectedDateTime(newVal)}}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
              </div>
              <div className="col-md-6">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                  label="End Date & Time"
                  value={selectedDateTime}
                  onChange={(newVal) => {setSelectedDateTime(newVal)}}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
                
              </div>
            </div>

            <div className="row gen">
              
              { type.value === 'Friendly' ? (<div className="col-md-6">
              <input type="text" name="" id="generalInput" placeholder='Match Location' />
              </div>) : (<div className="col-md-6">
              <input type="text" name="" id="generalInput" placeholder='Match Location' /><br></br>
              <input type="text" name="" id="generalInput" placeholder='Tournament Name' />
              </div>) }
              <div className="col-md-6">
                <textarea id="w3review" name="w3review" placeholder='Comments' rows="10" cols="40">
                </textarea>
              </div>
            </div>

            <Link to='/'><input className='back' type="submit" value='Back'/></Link>
            <Link to='/Teams'><input className='next' type="submit" value='Next'/></Link>
        </form></div>
  )
}


export default General