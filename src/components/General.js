import React, {useContext } from 'react'
import { Link } from 'react-router-dom'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { TextField } from '@mui/material';
import { Types } from '../Context/TypeContext';

const General = ({startDateTime,endDateTime,
  setStartDateTime,setEndDateTime,
  comments,setComments,
location,setLocation,
name,setName}) => {
  const {type} = useContext(Types)

  return (
    <div>
      <nav><a className="navbar-brand" href='/'>General 2/3</a></nav>
        <form action="">
            <div className="row gen">
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                <div className="col-md-6">
                    <DateTimePicker
                      label="Start Date & Time"
                      value={startDateTime}
                      onChange={(newVal) => console.log(newVal)}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  
                </div>

                <div className="col-md-6">
                  <DateTimePicker
                    label="End Date & Time"
                    value={endDateTime}
                    onChange={(newVal) => {setEndDateTime(newVal)}}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </div>
                </LocalizationProvider>
            </div>

            <div className="row">
              { type.value === 'Friendly' ? 
              (<div className="col-md-6">
              <input type="text" name="" id="generalInput" placeholder='Match Location' 
              value={location} onChange={e=> setLocation(e.target.value)}/>
              </div>) : 
              (<div className="col-md-6">
              <input type="text" name="" id="generalInput" placeholder='Match Location' 
               value={location} onChange={e=> setLocation(e.target.value)}/><br></br>
              <input type="text" name="" id="generalInput" placeholder='Tournament Name'
               value={name} onChange={e=> setName(e.target.value)} />
              </div>) }
              <div className="col-md-6">
                <textarea id="comments" value={comments} onChange={e=> setComments(e.target.value)} placeholder='Comments' rows="13" cols="40">
                </textarea>
              </div>
            </div>

            <Link to='/'><input className='back' type="submit" value='Back'/></Link>
            <Link to='/Teams'><input className='next' type="submit" value='Next'/></Link>
        </form></div>
  )
}


export default General