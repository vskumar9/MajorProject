import React from 'react'
import { Routes, Route } from 'react-router-dom'

import PythonTutorial from './components/PythonProgram/PythonTutorial'
import PythonAppetite from './components/PythonProgram/PythonAppetite'
import PythonInterpreter from './components/PythonProgram/PythonInterpreter'
import PythonInformalIntroduction from './components/PythonProgram/PythonInformalIntroduction'
import PythonControlTools from './components/PythonProgram/PythonControlTools'
import PythonNoPage from './components/PythonProgram/PythonNoPage'
import DataStructures from './components/PythonProgram/DataStructures'
// import './components/PythonProgram/'


const AllProgramming = () => {
  return (
    <Routes>
        <Route path='/Python' element={<PythonTutorial/>}/>
        <Route path='/Python/Appetite' element={<PythonAppetite/>}/>
        <Route path='/Python/Interpreter' element={<PythonInterpreter/>}/>
        <Route path='/Python/Informal-Introduction' element={<PythonInformalIntroduction/>}/>
        <Route path='/Python/ControlTools' element={<PythonControlTools/>}/>
        <Route path='/Python/DataStructure' element={<DataStructures/>}/>
        <Route path='/Python/Modules' element={<PythonNoPage/>}/>
        <Route path='/Python/I-O' element={<PythonNoPage/>}/>
        <Route path='/Python/error-exception' element={<PythonNoPage/>}/>
        <Route path='/Python/classes' element={<PythonNoPage/>}/>
        <Route path='/Python/library' element={<PythonNoPage/>}/>
        <Route path='/Python/libraty-II' element={<PythonNoPage/>}/>
        <Route path='/Python/VE-packages' element={<PythonNoPage/>}/>
        <Route path='/Python/WhatNow' element={<PythonNoPage/>}/>
        <Route path='/Python/InteractiveEditing' element={<PythonNoPage/>}/>
        <Route path='/Python/Arithmetic' element={<PythonNoPage/>}/>
        <Route path='/Python/Appendix' element={<PythonNoPage/>}/>
        <Route path='/CSS' element={<PythonNoPage/>} />
        <Route path='/html' element={<PythonNoPage/>} />
        <Route path='/DataScience' element={<PythonNoPage/>} />
        <Route path='/C++' element={<PythonNoPage/>} />
    </Routes>
  )
}


export default AllProgramming
