import React from 'react'
import './SideBar/Python.css'
import './pythonComponents.css'
import NavBar from './SideBar/NavBar'
import Footer from '../Footer/Footer'
import Tutorial from './Components/Tutorial'

const PythonTutorial = () => {
  return (
    <div>
        <div  className='p-divbar'>
            <NavBar />
            <div className='p-content'>
                <Tutorial/>
            </div>
        </div>
            <Footer/>
        </div>
  )
}

export default PythonTutorial
