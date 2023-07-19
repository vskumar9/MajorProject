import React from 'react'

import AbtList from '../AbtList'
import logo from '../../../assets/logo-2.png'

const AboutDiv1 = () => {


    const abtList = [{
        id: 1,
        tagName: "100+ million",
        tagDesc: "Monthly visitors to our network",
    },{
        id: 2,
        tagName: "21+ million",
        tagDesc: "Questions asked to-date"
    },{
        id: 3,
        tagName: "13.6 seconds",
        tagDesc: "Average time between new questions"
    },{
        id: 4,
        tagName: "50.6+ billion",
        tagDesc: "Times a developer got help."
    }]

  return (
    <div className='about-container-1'>
      <h1 className='aboutus'><img src={logo} alt="site_logo" style={{width:'200px'}}/>About Us</h1>
        <div className="about-container-1-1">
      <div className='about-box-1'>
        <div className="about-cont">
      <h1>Who we are</h1>
      <h2>Empowering the world to develop technology through collective knowledge.</h2>
      <p>Our public platform serves 100 million people every month, making it one of the most popular websites in the world.
      Our asynchronous knowledge management and collaboration offering, Stack Overflow for Teams, is transforming how people work.</p>
      </div>
      </div>
      </div>
      <div className='abtlist-container'>
                    {
                        abtList.map((tag) => (
                            <AbtList tag={tag} key={abtList.id}/>
                        ))
                    }
        </div>
    </div>
  )
}

export default AboutDiv1
