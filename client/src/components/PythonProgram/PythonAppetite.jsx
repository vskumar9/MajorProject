import React from 'react'
import './SideBar/Python.css'
import './pythonComponents.css'
import NavBar from './SideBar/NavBar'
import Footer from '../Footer/Footer'
import Appetite from './Components/Appetite'


const PythonAppetite = () => {
  return (
    <div>
        <div  className='p-divbar'>
            <NavBar />
            <div className='p-content'>
                <Appetite/>
            </div>
        </div>
            <Footer/>
        </div>
  )
}

export default PythonAppetite
