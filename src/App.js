import React from 'react'
import { Routes, Route } from 'react-router-dom';

import { Login, Home, Foods } from './components'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/foods" element={<Foods />} />
      </Routes>
    </div>
  )
}

export default App