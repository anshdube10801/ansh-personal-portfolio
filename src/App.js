import React from 'react'
import './App.css'
import Dashboard from './Components/Dashboard/Dashboard'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App () {
  return (
    <>
    <Router>
        <Routes>
        <Route exact path="/" element={<Dashboard />} />
     </Routes>
      </Router>
    </>
  )
}

export default App
