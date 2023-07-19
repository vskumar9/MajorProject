import React from 'react'
import {  useNavigate } from 'react-router-dom'
// import FontAwesomeIcon, { fa0, faChartLine } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import heart from '../../../assets/img/heart.svg'
import hand from '../../../assets/img/waving-hand.svg'
import transparent from '../../../assets/img/transparent.svg'
import chemistry from '../../../assets/img/chemistry.svg'
import community from '../../../assets/img/community.svg'
import { faArrowUpRightDots } from '@fortawesome/free-solid-svg-icons'

const AboutDiv3 = () => {
    const navigate = useNavigate()
    const learnMore = () => {
    navigate('/sorry')
     }
   

    const checkAuth = () => {
            navigate('/')
    }


  return (
    <div>
          <h4 className='our-service'>Our Public Platform</h4>
      <div className='service'>
        <div className="service-1">
          <p className='service-p'>Where developers and technologists go to gain and share knowledge.</p>
          <button onClick={checkAuth} className='Paricepate-btn'>Paricepate</button>
        </div>
        </div>
        <div className='about-boxes'>
          <div className='about-box'>
            <h4 className='box'>For Teams</h4>
            <p className='box-p'>Where developers and technologists share private knowledge with coworkers.</p>
            <button onClick={learnMore} className='box-btn'>Learn more</button>
          </div>
          <div className='about-box'>
            <h4 className='box'>Talent</h4>
            <p className='box-p'>Where companies build their employer brand to attract top tech talent.</p>
            <button onClick={learnMore} className='box-btn'>Learn more</button>
          </div>
          <div className='about-box'>
            <h4 className='box'>Advertising</h4>
            <p className='box-p'>Where companies reach the world’s largest audience of developers and technologists.</p>
            <button onClick={learnMore} className='box-btn'>Learn more</button>
          </div>
          <div className='about-box'>
            <h4 className='box'>Collectives</h4>
            <p className='box-p'>Where developer communities connect with the specific technologies they use the most.</p>
            <button onClick={learnMore} className='box-btn'>Learn more</button>
          </div>
        </div>


        <div>
          <h1 className='our-core'>Our core values</h1>
          <div className="core-boxes">
          <div className='core-box'>
            <img src={heart} alt="heart_symbol" className='core-img'/>
            <h4 className='core-h'>Adopt a customer-first mindset</h4>
            <p className='core-p'>Authentically serve our customers by empowering, listening, and collaborating with our fellow Stackers.</p>
          </div>
          <div className='core-box'>
            <img src={hand} alt="hand_symbol" className=' core-img '/>
            <h4 className='core-h'>Be flexible and inclusive</h4>
            <p className='core-p'>We do our best work when a diverse group of people collaborate in an environment of respect and trust. 
              Create space for different voices to be heard, and allow flexibility in how people work.</p>
          </div>
          <div className='core-box'>
            <img src={transparent} alt="compass_symbol" className='core-img'/>
            <h4 className='core-h'>Be transparent</h4>
            <p className='core-p'>Communicate openly and honestly, both inside and outside the company. Encourage transparency 
              from others by being empathetic, reliable, and acting with integrity.</p>
          </div>
          <div className='core-box'> 
            <img src={chemistry} className='core-img' alt="chemistry_symbol" />
            <h4 className='core-h'>Empower people to deliver outstanding results</h4>
            <p className='core-p'>Give people space to get their job done, support them when they need it, and practice blameless accountability.</p>
          </div>
          <div className='core-box'>
            <img src={community} className='core-img' alt="community_symbol" />
            <h4 className='core-h'>Keep community at our center</h4>
            <p className='core-p'>Community is at the heart of everything we do. Nurture healthy communities where everyone is encouraged to learn and give back.</p>
          </div>
          <div className='core-box'>
            <FontAwesomeIcon icon={faArrowUpRightDots} className='core-icon' />
            {/* <img src="heart" alt="growth_symbol" /> */}
            <h4 className='core-h'>Learn, share, grow</h4>
            <p className='core-p'>Adopt a Growth Mindset. Be curious and eager to learn. Aim for ethical, sustainable, long-term growth, both personally and in the company.</p>
          </div>
        </div>
        </div>


    </div>
  )
}

export default AboutDiv3
