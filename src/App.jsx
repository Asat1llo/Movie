import { Route, Routes } from 'react-router-dom'
import { useState,useEffect } from 'react'
import Global from './App.js'
import Header from './components/header/header.jsx'
import Home from './pages/home/home.jsx'
import CardInner from './pages/card_inner/card_inner.jsx'
import Admin from './pages/admin/admin.jsx'
import { MainLogin } from './pages/login/mainLogin.jsx'
import axios from 'axios'

function App() {

  const[giveValue, setGiveValue]= useState('')
  const[data,setData]= useState([])
  const[loading,setLoading]= useState(false)


  useEffect(()=>{
      const getData = async ()=>{
       setLoading(true)
       const res = await axios.get('https://64c9fecab2980cec85c2b76e.mockapi.io/movie/movie')
       setData(res.data)
       setLoading(false)
      }
      getData()
  },[])

  return (
    <>
      <Header setGiveValue={setGiveValue}/>
      <Routes>
        <Route path='/' element={<Home giveValue={giveValue} data={data} loading={loading}/>}/>
        <Route path='/cardinner/:cardId' element={<CardInner/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/login' element={<MainLogin/>}/>
      </Routes>
      <Global />
    </>
  )
}

export default App
