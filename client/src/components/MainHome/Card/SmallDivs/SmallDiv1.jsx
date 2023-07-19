import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import search from '../../../../assets/search-hom.svg'
import {  faGraduationCap } from '@fortawesome/free-solid-svg-icons'

const SmallDiv1 = () => {

    // const transition = { duration: 2, type: "spring" };

  const navigate = useNavigate()

  const learning  = () => {
    navigate('/LearningPlatform')
  }
  const TopQuestions = () => {
    navigate('/TopQuestions')
  }

  return (
    <div>
    <div className="main-home-1">
      <div className="home-box">
        <div className="home-box-1">
          <div className="cont">
            <img src={search} alt="Search-icon" className='search-logo' />
            <h2>Find the best answer to your technical question, help others answer theirs</h2>
            <button onClick={TopQuestions}>Join the community</button>
            <p>or<Link to='/Questions' className='link'> search content</Link></p>
            </div>
        </div>
      </div>
      <div className="home-box">
        <div className="home-box-1">
        <div className="cont">
            <FontAwesomeIcon icon={faGraduationCap} className='search-logo'/>
            <h2>Want a secure, private space for your technical knowledge?</h2>
            <button onClick={learning} >Study now</button>
            </div>
        </div>
      </div>
    </div>
  <div className='home-box-2'>
    <h1>Learning is 
    <div className="scroller">
      <span>
      a continuous process <br />
      acquiring knowledge <br />
      skills <br />
      attitudes <br />
      experiences <br />
      such as studying <br />
      practicing <br />
      observing <br />
      interacting <br />
      behavior <br />
      thinking 
      </span>
    </div></h1>
    <p className='note'>This a powerful tool for students/Learners to learn, engage, and share their knowledge with each other.</p>
  </div>
  </div>

)
}

export default SmallDiv1
