import React, { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Homepage from './UI/Pages/Homepage'
import Contact from './UI/Components/Contact'
import Navbar from './UI/Components/Navbar'
import FormSuccess from './UI/Components/FormSuccess'

const App = () => {
  const [isEmailSuccess, setIsEmailSuccess] = useState(false);
  return (
    <BrowserRouter >
      <div className=" bg-black text-white relative">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route
            path="/join"
            element={<Contact setIsEmailSuccess={setIsEmailSuccess} />}
          />
          <Route
            path="/success"
            element={isEmailSuccess ? <FormSuccess /> : <Navigate to="/join" />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App