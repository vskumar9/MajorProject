import React from 'react'
import { Routes, Route } from 'react-router-dom'
import JavaNoPage from './components/JavaProgram/JavaNoPage'


const Java = () => {
  return (
    <Routes>
        <Route path='/Java' element={<JavaNoPage/>}/>
        <Route path='/Java/Appetite' element={<JavaNoPage/>}/>
        <Route path='/Java/Interpreter' element={<JavaNoPage/>}/>
        <Route path='/Java/Informal-Introduction' element={<JavaNoPage/>}/>
        <Route path='/Java/ControlTools' element={<JavaNoPage/>}/>
        <Route path='/Java/DataStructure' element={<JavaNoPage/>}/>
        <Route path='/Java/Modules' element={<JavaNoPage/>}/>
        <Route path='/Java/I-O' element={<JavaNoPage/>}/>
        <Route path='/Java/error-exception' element={<JavaNoPage/>}/>
        <Route path='/Java/classes' element={<JavaNoPage/>}/>
        <Route path='/Java/library' element={<JavaNoPage/>}/>
        <Route path='/Java/libraty-II' element={<JavaNoPage/>}/>
        <Route path='/Java/VE-packages' element={<JavaNoPage/>}/>
        <Route path='/Java/WhatNow' element={<JavaNoPage/>}/>
        <Route path='/Java/InteractiveEditing' element={<JavaNoPage/>}/>
        <Route path='/Java/Arithmetic' element={<JavaNoPage/>}/>
        <Route path='/Java/Appendix' element={<JavaNoPage/>}/>
    </Routes>
  )
}

export default Java
