import React from 'react'
import './SideBar/Python.css'
import NavBar from './SideBar/NavBar'
import Footer from '../Footer/Footer'
import Interpreter from './Components/Interpreter'

const PythonInterpreter = () => {
  return (
    <div>
        <div  className='p-divbar'>
            <NavBar />
            <div className='p-content'>
                <Interpreter/>
            </div>
        </div>
            <Footer/>
        </div>
  )
}

export default PythonInterpreter
