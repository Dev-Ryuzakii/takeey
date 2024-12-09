import React from 'react'
import { Route, Routes} from 'react-router-dom'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Home from './components/Home'
const App = () => {
  return (
   <Routes>
    <Route path="/" element={<SignIn />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/home" element={<Home/>} />
   </Routes>
  )
}

export default App