import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import General from './components/General';
import Type from './components/Type';
import Teams from './components/Teams';
import Match from './components/Match';
import {useState} from 'react'

function App() {
  const [startDateTime, setStartDateTime] = useState(new Date())
  const [endDateTime, setEndDateTime] = useState(new Date())
  const [location,setLocation] = useState('')
  const [comments,setComments] = useState('')
  const [team1,setTeam1] = useState('')
  const [team2,setTeam2] = useState('')
  const [name,setName] = useState('')
  const [homeoraway1,setHomeorAway1] = useState('')
  const [homeoraway2,setHomeorAway2] = useState('')

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Type/>} exact/>

        <Route path="/General" element={<General 
        startDateTime={startDateTime} 
        setStartDateTime={setStartDateTime}
        endDateTime={endDateTime}
        setEndDateTime={setEndDateTime}
        location={location}
        setLocation={setLocation}
        name={name}
        setName={setName}
        comments={comments}
        setComments={setComments} />}/>
        
        <Route path="/Teams" element={<Teams 
        team1={team1} setTeam1={setTeam1} 
        team2={team2} setTeam2={setTeam2}
        homeoraway1={homeoraway1} setHomeorAway1={setHomeorAway1}
        homeoraway2={homeoraway2} setHomeorAway2={setHomeorAway2}/>}/>
        
        <Route path="/Match" element={<Match team1={team1} team2={team2} 
        homeoraway1={homeoraway1} homeoraway2={homeoraway2} 
        name={name} location={location} comments={comments} 
        startDateTime={startDateTime}  endDateTime={endDateTime}/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
