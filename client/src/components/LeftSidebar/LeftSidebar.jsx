import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'
import Globe from  '../../assets/Globe.svg'

const LeftSidebar = () => {
    return (
        <div className='left-sidebar'>
            <nav className='side-nav'>
                <NavLink to='/TopQuestions' className='side-nav-links' activeclassname='active'>
                    <p>Home</p>
                </NavLink>
                <NavLink to='/About' className='side-nav-links' activeclassname='active'>
                    <p>About</p>
                </NavLink>
                <div className='side-nav-div'>
                    <div><p>PUBLIC</p></div>
                    <NavLink to='/Questions' className='side-nav-links' activeclassname='active'>
                        <img src={Globe} alt="Globe" />
                        <p style={{paddingLeft: "10px"}}> Questions </p>
                    </NavLink>
                    <NavLink to='/Tags' className='side-nav-links' activeclassname='active' style={{paddingLeft: "40px"}}>
                        <p>Tags</p>
                    </NavLink>
                    <NavLink to='/Users' className='side-nav-links' activeclassname='active' style={{paddingLeft: "40px"}}>
                        <p>Users</p>
                    </NavLink>
                </div>
                <NavLink to='/RecentDevelopments' className='side-nav-links' activeclassname='active'>
                    <p>RecentDevelopments</p>
                </NavLink>
                <NavLink to='/whatNewInIT' className='side-nav-links' activeclassname='active'>
                    <p>What's new in IT</p>
                </NavLink>
            </nav>
        </div>
    )
}

export default LeftSidebar
