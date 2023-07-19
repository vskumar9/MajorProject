import React from 'react'

import './Users.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import UsersList from './UsersList'
import Footer from '../../components/Footer/Footer'

const Users = () => {

    return (
        <div>
        <div className='home-container-1'>
            <LeftSidebar />
            <div className="home-container-2" style={{marginTop: "30px"}}>
                <h1 style={{fontWeight: "400"}}>Users</h1>
                <UsersList /> 
            </div>
        </div>
        <Footer/>
        </div>
    )
}

export default Users
