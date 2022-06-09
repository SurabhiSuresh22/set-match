import React from 'react'
import {Link} from 'react-router-dom'
import Select from 'react-select'
import {Types} from '../Context/TypeContext';
import {useNavigate} from 'react-router-dom'
import {useContext} from 'react'

const Teams = ({team1,team2,setTeam1,setTeam2,homeoraway1,homeoraway2,setHomeorAway1,setHomeorAway2,
  name,location,comments,startDateTime,endDateTime,matches,setMatches }) => {
  const navigate = useNavigate()
  const type = useContext(Types)
  const options = [
  { val: 'Home', label: 'Home' },
  { val: 'Away', label: 'Away' }
  ]
const colourStyles = {
  option: styles => ({ ...styles, backgroundColor: 'rgb(166, 165, 165)',fontWeight: '500' })
}

const handleSubmit = (e) =>{
  e.preventDefault()
  let match = {
    type,team1,team2,name,location,comments,homeoraway1,homeoraway2,startDateTime,endDateTime
  }
  setMatches([...matches, match])
  navigate('/Match')
}

  return (
    <div>
    <nav><a className="navbar-brand" href='/'>Teams 3/3</a></nav>
        <form onSubmit={handleSubmit} >
            <div className="row one">
              <div className="col-md-6">
                  <input type="text" placeholder='Team 1 Name' value={team1} onChange={e=> setTeam1(e.target.value)}/>
              </div>
              <div className="homeoraway">
                  <Select options={options} value={homeoraway1} onChange={e=> setHomeorAway1(e)} placeholder='Home or Away' styles={colourStyles} />
              </div>
            </div>

            <div className='row two vs'>
              <p>VS</p>
            </div>

            <hr /><hr/>
            <div className="row three">
              <div className="col-md-6">
                  <input type="text" placeholder='Team 2 Name' value={team2} onChange={e=> setTeam2(e.target.value)}/>
              </div>
              <div className="homeoraway">
                  <Select options={options} value={homeoraway2} onChange={e=> setHomeorAway2(e)} placeholder='Home or Away' styles={colourStyles} />
              </div>
            </div>
            <Link to='/General'><input className='back' type="submit" value='Back'/></Link>
            <button type='submit'>Submit</button>
            {/* <Link to='/Match'><input className='next' type="submit" value='Submit' /></Link> */}
        </form>
    </div>
  )
}

export default Teams