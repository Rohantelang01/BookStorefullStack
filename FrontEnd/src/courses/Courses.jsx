import React from 'react'
import NavBar from '../componetns/NavBar'
import Footer from '../componetns/Footer'
import Course from '../componetns/Course'

function Courses() {
  return (
   <>
   <NavBar/>
   <div className='min-h-screen'>
   <Course/>
   </div>

   <Footer />
   </>
  )
}

export default Courses