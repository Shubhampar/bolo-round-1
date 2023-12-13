import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Homepage from "../pages/Home"
import AddForm from "../pages/AddForms"
import Preview from "../pages/Preview"

const AllRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/form/:action' element={<AddForm/>}/>
      <Route path='/View/:id' element={<Preview/>}/>
    </Routes>
  )
}

export default AllRoutes