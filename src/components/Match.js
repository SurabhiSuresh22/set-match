import React from 'react'
import {Link} from 'react-router-dom'
//import { Types } from '../Context/TypeContext'

const Match = ({team1,team2,name,location,comments,homeoraway1,homeoraway2,startDateTime,endDateTime,matches}) => {
  //const {type} = useContext(Types)
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
        <td><ul><li>{e.startDateTime.toUTCString()}</li></ul></td>
        <td><ul><li>{e.endDateTime.toUTCString()}</li></ul></td>
        <td><ul><li>{e.location}</li></ul></td>
        <td><ul><li style={{overflowY: 'scroll', overflowX: 'hidden', position:'relative'}}>{e.comments}</li></ul></td>
        </tr>) })}
    </tbody>
</table>
<Link to='/'><input className='back' type="submit" value='Home'/></Link>
    </div>
  )
}

export default Match