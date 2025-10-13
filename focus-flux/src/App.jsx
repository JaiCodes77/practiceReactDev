import React from 'react' 
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Dungeon from './pages/Dungeon'
import Quests from './pages/Quests'
import Stats from './pages/Quests'
import Navbar from './components/Navbar'
import Reports from './pages/Reports';

function App() {
  return (
    <div>
       <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Dungeon" element={<Dungeon/>} />
        <Route path="/Quests" element={<Quests/>}/> 
        <Route path="/Stats" element={<Stats/>}/> 

        <Route path="/Dashboard" element={<Dashboard/>}>
          <Route path="reports" element={<Reports/>} />
        </Route> 
        
      </Routes>
    </div>
  )
}

export default App