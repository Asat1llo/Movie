import { Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import Global from './App.js'
import Header from './components/header/header.jsx'
import Home from './pages/home/home.jsx'
import CardInner from './pages/card_inner/card_inner.jsx'
import Admin from './pages/admin/admin.jsx'

function App() {

  const[giveValue, setGiveValue]= useState('')

  return (
    <>
      <Header setGiveValue={setGiveValue}/>
      <Routes>
        <Route path='/' element={<Home giveValue={giveValue}/>}/>
        <Route path='/cardinner/:cardId' element={<CardInner/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
      <Global />
    </>
  )
}

export default App
