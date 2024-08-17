import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from './home/Home'
import Courses from './courses/Courses'
import Signup from './componetns/Signup'
function App() {
  return (
    <div>
 <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/course" element={<Courses />} />
  <Route path="/signup" element={< Signup/>} />
 </Routes>
    </div>
  )
}

export default App