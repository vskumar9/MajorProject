import React from 'react'


import Rocket from '../../../../assets/rocket.svg'
import Earth from '../../../../assets/earth.svg'
import Diamond from '../../../../assets/diamond.svg'

const SmallDiv5 = () => {
  return (
    
<div className='main-home-5'>
<div className="container">
  <div className="card-1">
    <div className="icon"><img src={Rocket} alt="" /></div>
    <div className="content">
      <h2>Personal growth</h2>
      <p>Learning helps you develop new skills, broaden your knowledge base, and gain a deeper understanding of the world around you. It can also improve your critical thinking and problem-solving abilities.</p>
    </div>
  </div>
  <div className="card-1">
    <div className="icon"><img src={Earth} alt="" /></div>
    <div className="content">
    <h2>Career advancement Adaptability</h2>
      <p>Learning new skills and knowledge can make you more marketable in the workforce and help you advance in your career.
        In today's rapidly changing world, learning helps you adapt to new technologies, processes, and ways of thinking.</p>
    </div>
  </div>
  <div className="card-1">
    <div className="icon"><img src={Diamond} alt="" /></div>
    <div className="content">
    <h2>Mental health</h2>
      <p>Learning can also contribute to your overall well-being by keeping your mind engaged and active. Reducing stress, Reducing stress, Improving memory and cognitive function, Providing a sense of purpose, Encouraging social connections.</p>
    </div>
  </div>
</div>
</div>
  )
}

export default SmallDiv5
