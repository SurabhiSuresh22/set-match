import React from 'react'
import {Link} from 'react-router-dom'
import Select from 'react-select'

const Teams = () => {

  const options = [
  { value: 'Home', label: 'Home' },
  { value: 'Away', label: 'Away' }
  ]
const colourStyles = {
  option: styles => ({ ...styles, backgroundColor: 'rgb(166, 165, 165)',fontWeight: '500' })
}
  return (
    <div>
    <nav><a className="navbar-brand" href='/'>Teams 3/3</a></nav>
        <form action="">
            <div className="row one">
              <div className="col-md-6">
                  <input type="text" />
              </div>
              <div className="homeoraway">
                  <Select options={options} placeholder='Home or Away' styles={colourStyles} />
              </div>
            </div>

            <div className='row two vs'>
              <p>VS</p>
            </div>

            <hr /><hr/>
            <div className="row three">
              <div className="col-md-6">
                  <input type="text" />
              </div>
              <div className="homeoraway">
                  <Select options={options} placeholder='Home or Away' styles={colourStyles} />
              </div>
            </div>
            <Link to='/General'><input className='back' type="submit" value='Back'/></Link>
            <Link to='/Match'><input className='next' type="submit" value='Submit'/></Link>
        </form>
    </div>
  )
}

export default Teams