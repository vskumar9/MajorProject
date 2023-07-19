import React from 'react'
import { Link } from 'react-router-dom'
import Pyton from '../../../assets/img/python.svg'

const NavBar = () => {

  return (
    
    
    <div>
        <nav className="p-sidebar">
            <header>
                <img src={Pyton} alt="Python" />
                <h2>Python Tutorial</h2>
            </header>
            <div className="scrollbox">
                <div className="scrollbox-inner">
                    <Link to='/Python' className='p'>Python Tutorial</Link>
                    <Link to='/Python/Appetite' className='p' activeclassname="P-act">Python Whattinng Your Appetite</Link>
                    <Link to='/Python/Interpreter' className='p' activeclassname="P-act">Python Interpreter</Link>
                    <Link to='/Python/Informal-Introduction' className='p' activeclassname="P-act">An Informal Introduction to Python</Link>
                    <Link to='/Python/ControlTools' className='p' activeclassname="P-act">Python More Control Flow Tools</Link>
                    <Link to='/Python/DataStructure' className='p' activeclassname="P-act">Python Data Structures</Link>
                    <Link to='/Python/Modules' className='p' activeclassname="P-act">Python Modules</Link>
                    <Link to='/Python/I-O' className='p' activeclassname="P-act">Python Input and Output</Link>
                    <Link to='/Python/error-exception' className='p' activeclassname="P-act">Python Error and Exceptions</Link>
                    <Link to='/Python/classes' className='p' activeclassname="P-act">Python Classes</Link>
                    <Link to='/Python/library' className='p' activeclassname="P-act">Python Brief Tour of the Standard Library</Link>
                    <Link to='/Python/libraty-II' className='p' activeclassname="P-act">Python Brief Tour of the Standard Library- part - II</Link>
                    <Link to='/Python/VE-packages' className='p' activeclassname="P-act">Python Virtual Environments and Packages</Link>
                    <Link to='/Python/WhatNow' className='p' activeclassname="P-act">Python What Now?</Link>
                    <Link to='/Python/InteractiveEditing' className='p' activeclassname="P-act">Python Interactive Input Editing and History Substitution</Link>
                    <Link to='/Python/Arithmetic' className='p' activeclassname="P-act">Python Floating Point Arithmetic: Issues and Limitations</Link>
                    <Link to='/Python/Appendix' className='p' activeclassname="P-act">Python Appendix</Link>
                </div>
            </div>

            <footer>
                <h2>Knowly</h2>
            </footer>
        </nav>
    </div>
  )
}

export default NavBar
