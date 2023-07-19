import React from 'react'
import './SideBar/Python.css'
import NavBar from './SideBar/NavBar'
import Footer from '../Footer/Footer'
import InformalIntroduction from './Components/InformalIntroduction'

const PythonInformalIntroduction = () => {
  return (
    <div>
        <div  className='p-divbar'>
            <NavBar />
            <div className='p-content'>
                <InformalIntroduction/>
            </div>
        </div>
            <Footer/>
        </div>
  )
}

export default PythonInformalIntroduction
