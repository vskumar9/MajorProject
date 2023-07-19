import React from 'react'
import './SideBar/Python.css'
import NavBar from './SideBar/NavBar'
import Footer from '../Footer/Footer'
import ControlTools from './Components/ControlTools'

const PythonControlTools = () => {
  return (
    <div>
        <div  className='p-divbar'>
            <NavBar />
            <div className='p-content'>
                <ControlTools/>
            </div>
        </div>
            <Footer/>
        </div>
  )
}

export default PythonControlTools
