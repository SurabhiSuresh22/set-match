import React,{useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import Select from 'react-select'
import {Types} from '../Context'

const Type = () => {
    
  const {type,setType} = useContext(Types)
  const options = [
  { value: 'Friendly', label: 'Friendly' },
  { value: 'Tournament', label: 'Tournament' }
  ]
  const colourStyles = {
  option: styles => ({ ...styles, backgroundColor: 'rgb(166, 165, 165)',fontWeight: '500' })
}
  // const [type,setType] = useState('')

  return (
    <div>
        <nav><a className="navbar-brand" href='/'>Type 1/3</a></nav>
        <form action="">
          <div className='select'>
            <Select options={options} value={type} onChange={e=> setType(e)} placeholder='Match Type' styles={colourStyles} />
          </div>
            <Link to='/General'><input className='next' type="submit" value='Next'/></Link>
        </form>
    </div>
  )
}

export default Type