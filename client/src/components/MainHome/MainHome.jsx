import React from 'react'

import './MainHome.css'
import SmallDiv1 from './Card/SmallDivs/SmallDiv1'
import SmallDiv2 from './Card/SmallDivs/SmallDiv2'
import SmallDiv3 from './Card/SmallDivs/SmallDiv3'
import SmallDiv4 from './Card/SmallDivs/SmallDiv4'
import SmallDiv5 from './Card/SmallDivs/SmallDiv5'
import SmallDiv6 from './Card/SmallDivs/SmallDiv6'
import SmallDiv7 from './Card/SmallDivs/SmallDiv7'



const MainHome = () => {

  return (
    <div>
            <div className='Main-home'>
              <SmallDiv1/>
              <SmallDiv2/>
              <SmallDiv3/>
              <SmallDiv4/>
              <SmallDiv5/>
              <SmallDiv6/>
              <SmallDiv7/>
            </div>

    </div>
  )
}

export default MainHome
