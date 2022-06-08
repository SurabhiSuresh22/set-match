import React,{useContext} from 'react'
import {Link} from 'react-router-dom'
import { Types } from '../Context/TypeContext'

const Match = ({team1,team2,name,location,comments,homeoraway1,homeoraway2,startDateTime,endDateTime}) => {
  const {type} = useContext(Types)

  return (
    
    <div>
        <table className="table table-bordered">
    <thead>
        <tr>
        <th scope="col">Team 1</th>
        <th scope="col">Team 2</th>
        <th scope="col">Match Type</th>
        <th scope="col">Tournament Name</th>
        <th scope="col">Start Date & Time</th>
        <th scope="col">End Date & Time</th>
        <th scope="col">Location</th>
        <th scope="col">Comments</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td><ul><li>{team1} {homeoraway1.value}</li></ul></td>
        <td><ul><li>{team2} {homeoraway2.value}</li></ul></td>
        <td><ul><li>{type.value}</li></ul></td>
        <td><ul><li>{name}</li></ul></td>
        <td><ul><li>{startDateTime.toUTCString()}</li></ul></td>
        <td><ul><li>{endDateTime.toUTCString()}</li></ul></td>
        <td><ul><li>{location}</li></ul></td>
        <td><ul><li>{comments}</li></ul></td>
        </tr>
    </tbody>
</table>
<Link to='/'><input className='back' type="submit" value='Home'/></Link>
    </div>
  )
}

export default Match