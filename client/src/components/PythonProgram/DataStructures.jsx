import React from 'react'

import NavBar from './SideBar/NavBar'
import Footer from '../Footer/Footer'
import Structures from './Components/Structures'
const DataStructures = () => {
  return (
    <div>
        <div  className='p-divbar'>
            <NavBar />
            <div className='p-content'>
                <Structures/>
            </div>
        </div>
            <Footer/>
    </div>
  )
}

export default DataStructures
