import React from 'react'
import {Link} from 'react-router-dom'

const Match = () => {
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
        <td><ul><li>Mark</li><li>Mark</li></ul></td>
        <td><ul><li>Mark</li><li>Mark</li></ul></td>
        <td><ul><li>Mark</li><li>Mark</li></ul></td>
        <td rowSpan={2}></td>
        <td><ul><li>Mark</li><li>Mark</li></ul></td>
        <td><ul><li>Mark</li><li>Mark</li></ul></td>
        <td><ul><li>Mark</li><li>Mark</li></ul></td>
        <td><ul><li>Mark</li><li>Mark</li></ul></td>
        </tr>
    </tbody>
</table>
<Link to='/'><input className='back' type="submit" value='Home'/></Link>
    </div>
  )
}

export default Match