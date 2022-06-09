import React from 'react'
import {Link} from 'react-router-dom'
import { format } from 'date-format-parse';

const Match = ({team1,team2,name,location,comments,homeoraway1,homeoraway2,startDateTime,endDateTime,matches}) => {

  console.log(matches)
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
      {matches.map( e => { 
        return (
        <tr style={{width: '30px',height:'30px',overflow: 'scroll'}}>
        <td><ul><li>{e.team1} <p>{"("}</p>{e.homeoraway1.label}<p>{")"}</p></li></ul></td>
        <td><ul><li>{e.team2} <p>{"("}</p>{e.homeoraway2.label}<p>{")"}</p></li></ul></td>
        <td><ul><li>{e.type.type.val}</li></ul></td>
        <td><ul><li>{e.name}</li></ul></td>
        <td><ul><li>{format(e.startDateTime,'DD/MM/YY h:mm A')}</li></ul></td>
        <td><ul><li>{format(e.endDateTime.toString(),'DD/MM/YY H:mm A')}</li></ul></td>
        <td><ul><li>{e.location}</li></ul></td>
        <td><ul><li>{e.comments}</li></ul></td>
        </tr>) })}
    </tbody>
</table>
<Link to='/'><input className='back' type="submit" value='Home'/></Link>
    </div>
  )
}

export default Match