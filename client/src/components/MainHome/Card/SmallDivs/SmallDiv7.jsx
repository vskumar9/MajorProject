import React from 'react'
import { Link } from 'react-router-dom'

import python from '../../../../assets/img/python.svg'
import Cpp from '../../../../assets/img/cpp.png'
import java from '../../../../assets/img/java.svg'
import html from '../../../../assets/img/html.svg'
import css from '../../../../assets/img/css3.svg'
import dataScience from '../../../../assets/img/DataScience.png'


const SmallDiv7 = () => {
  return (
    <div className='main-home-8'>
        <div className="container-7">
            <div className="box-7">
                <Link to='/Python'>
                <img src={python} alt="" className='icon-7 fa-7' />
                {/* <FontAwesomeIcon icon={faSearch} className="icon-7 fa-7"/> */}
                <div className="content-7">
                    <h3>Python</h3>
                    <p>Python is an interpreted, object-oriented, high-level programming 
                        language with dynamic semantics. Its high-level built in data structures, 
                        combined with dynamic typing and dynamic binding, make it very attractive 
                        for Rapid Application Development, as well as for use as a scripting or 
                        glue language to connect existing components together. Python's simple, 
                        easy to learn syntax emphasizes readability and therefore reduces the 
                        cost of program maintenance.</p>
                </div></Link>
            </div>
            
            <div className="box-7">
                <Link to='/java'>
                    <img src={java} alt="" className='icon-7 fa-7' />
            {/* <FontAwesomeIcon icon={faSearch} className="icon-7 fa-7"/> */}
                <div className="content-7">
                    <h3>Java</h3>
                    <p>Lorem ipsum dolor 
                        sit amet consectetur adipisicing elit. Possimus 
                        et fuga, nostrum obcaecati omnis repudiandae voluptas 
                        laborum quisquam in deserunt laudantium vel ipsum 
                        nesciunt illum officiis nisi sed incidunt! Inventore!</p>
                </div></Link>
            </div>
            <div className="box-7">
            <Link to='/C++'>
                <img src={Cpp} alt="" className='icon-7 fa-7'/>
            {/* <FontAwesomeIcon icon={faSearch} className="icon-7 fa-7"/> */}
                <div className="content-7">
                    <h3>C++</h3>
                    <p>Lorem ipsum dolor 
                        sit amet consectetur adipisicing elit. Possimus 
                        et fuga, nostrum obcaecati omnis repudiandae voluptas 
                        laborum quisquam in deserunt laudantium vel ipsum 
                        nesciunt illum officiis nisi sed incidunt! Inventore!</p>
                </div></Link>
            </div>
            <div className="box-7">
                <Link to='/html'>
                    <img src={html} alt="" className='icon-7 fa-7 adj' />
            {/* <FontAwesomeIcon icon={faSearch} className="icon-7 fa-7"/> */}
                <div className="content-7">
                    <h3>HTML</h3>
                    <p>Lorem ipsum dolor 
                        sit amet consectetur adipisicing elit. Possimus 
                        et fuga, nostrum obcaecati omnis repudiandae voluptas 
                        laborum quisquam in deserunt laudantium vel ipsum 
                        nesciunt illum officiis nisi sed incidunt! Inventore!</p>
                </div></Link>
            </div>
            <div className="box-7">
                <Link to='/CSS'>
                    <img src={css} alt="" className="icon-7 fa-7" />
            {/* <FontAwesomeIcon icon={faSearch} className="icon-7 fa-7"/> */}
                <div className="content-7">
                    <h3>CSS</h3>
                    <p>Lorem ipsum dolor 
                        sit amet consectetur adipisicing elit. Possimus 
                        et fuga, nostrum obcaecati omnis repudiandae voluptas 
                        laborum quisquam in deserunt laudantium vel ipsum 
                        nesciunt illum officiis nisi sed incidunt! Inventore!</p>
                </div></Link>
            </div>
            <div className="box-7">
            <Link to='/DataScience'>
                    <img src={dataScience} alt="" className="icon-7 fa-7" />
            {/* <FontAwesomeIcon icon={faSearch} className="icon-7 fa-7"/> */}
                <div className="content-7">
                    <h3>Data Science</h3>
                    <p>Lorem ipsum dolor 
                        sit amet consectetur adipisicing elit. Possimus 
                        et fuga, nostrum obcaecati omnis repudiandae voluptas 
                        laborum quisquam in deserunt laudantium vel ipsum 
                        nesciunt illum officiis nisi sed incidunt! Inventore!</p>
                </div></Link>
            </div>
        </div>
        </div>
  )
}

export default SmallDiv7
