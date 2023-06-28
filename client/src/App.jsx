import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './Register';
import Home from './Home'
import Login from './Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/login' element={<Login />}></Route>

      </Routes>
    </BrowserRouter>  
  )
}


export default App;
