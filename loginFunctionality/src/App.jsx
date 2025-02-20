import { useState } from 'react'
import Profie from './components/Profie.jsx'
import Login from './components/Login.jsx'
import './App.css'
import UserContextProvider from './context/UserContextProvider'

function App() {



  return (
    <UserContextProvider>
      <Login />
      <Profie />
    </UserContextProvider>
  )
}

export default App
