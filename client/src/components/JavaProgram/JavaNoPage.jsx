import React from 'react'
import NoPage from './Components/NoPage'
import Footer from '../Footer/Footer'
import SideBar from './SideBar/SideBar'
import './SideBar/Java.css'

const JavaNoPage = () => {
  return (
    <div>
        <div  className='j-divbar'>
            <SideBar />
            <div className='j-content'>
                <NoPage/>
            </div>
        </div>
            <Footer/>
        </div>
  )
}

export default JavaNoPage
