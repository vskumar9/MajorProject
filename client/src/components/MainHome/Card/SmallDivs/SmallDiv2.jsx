import React from 'react'
import { useNavigate, Link } from 'react-router-dom'


// import illoPublic from '../../../assets/illo-public.svg'
import illoPublic from '../../../../assets/illo-public.svg'
import illoTeam from '../../../../assets/illo-teams.svg'
import LOG from '../../../../assets/LOG.png'
import logo from '../../../../assets/logo-2.png'

const SmallDiv2 = () => {

  const navigate = useNavigate()

  const learning  = () => {
    navigate('/LearningPlatform')
  }

  const TopQuestions = () =>{
    navigate('/TopQuestions')
  }
  return (
    <div className="main-home-2">
        <div className="sd">
          <div className="sd-1">
            <div className="cont">
          <h1><img src={logo} alt="logo" style={{width:'300px'}} /></h1>
          <img src={illoPublic} alt="public" style={{width:'300px'}}/>
          <h2>A public platform building the definitive 
            collection of coding questions & answers</h2>
          <h4>A community-based space to find and contribute answers 
            to technical challenges, and one of the most popular websites 
            in the world.</h4>
          <hr /><button onClick={TopQuestions}>Join the community</button>
          <p>or<Link to='/Questions' className='link'> search content</Link></p>
          </div>
          </div>
        </div>
        <div className="sd">
        <div className="sd-1">
        <div className="cont">
          <h1><img src={LOG} alt="logo" style={{width:'50px'}} /> Learning</h1>
          <img src={illoTeam} alt="LEARNING" style={{width:'300px'}}/>
          <h2>Learning is the acquisition of new knowledge, skills, or behaviors that enable personal and professional growth.</h2>
          <h4>Learning can occur in various contexts, including formal education, on-the-job training, or personal exploration, and it is essential for success in both personal and professional life.</h4>
          <hr /><button onClick={learning}>Now start learning</button>
          </div>
          </div>
        </div>
    </div>
  )
}

export default SmallDiv2
