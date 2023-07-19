import React from 'react'
import { Link } from 'react-router-dom'
import Java from '../../../assets/img/java.svg'

const SideBar = () => {
  return (
    <div>
        <nav className="p-sidebar">
            <header>
                <img src={Java} alt="Python" />
                <h2>Java Tutorial</h2>
            </header>
            <div className="scrollbox">
                <div className="scrollbox-inner">
                    <Link to='/Java' className='p'>Java Tutorial</Link>
                    <Link to='/Java/Appetite' className='p' activeclassname="P-act">Java Whattinng Your Appetite</Link>
                    <Link to='/Java/Interpreter' className='p' activeclassname="P-act">Java Interpreter</Link>
                    <Link to='/Java/Informal-Introduction' className='p' activeclassname="P-act">An Informal Introduction to Java</Link>
                    <Link to='/Java/ControlTools' className='p' activeclassname="P-act">Java More Control Flow Tools</Link>
                    <Link to='/Java/DataStructure' className='p' activeclassname="P-act">Java Data Structures</Link>
                    <Link to='/Java/Modules' className='p' activeclassname="P-act">Java Modules</Link>
                    <Link to='/Java/I-O' className='p' activeclassname="P-act">Java Input and Output</Link>
                    <Link to='/Java/error-exception' className='p' activeclassname="P-act">Java Error and Exceptions</Link>
                    <Link to='/Java/classes' className='p' activeclassname="P-act">Java Classes</Link>
                    <Link to='/Java/library' className='p' activeclassname="P-act">Java Brief Tour of the Standard Library</Link>
                    <Link to='/Java/libraty-II' className='p' activeclassname="P-act">Java Brief Tour of the Standard Library- part - II</Link>
                    <Link to='/Java/VE-packages' className='p' activeclassname="P-act">Java Virtual Environments and Packages</Link>
                    <Link to='/Java/WhatNow' className='p' activeclassname="P-act">Java What Now?</Link>
                    <Link to='/Java/InteractiveEditing' className='p' activeclassname="P-act">Java Interactive Input Editing and History Substitution</Link>
                    <Link to='/Java/Arithmetic' className='p' activeclassname="P-act">Java Floating Point Arithmetic: Issues and Limitations</Link>
                    <Link to='/Java/Appendix' className='p' activeclassname="P-act">Java Appendix</Link>
                </div>
            </div>

            <footer>
                <h2>Website Name</h2>
            </footer>
        </nav>
    </div>
  )
}

export default SideBar
