import { Route, Routes } from 'react-router-dom'
import Global from './App.js'
import Header from './components/header/header.jsx'
import Home from './components/pages/home/home.jsx'
import CardInner from './components/pages/card_inner/card_inner.jsx'
import Admin from './components/pages/admin/admin.jsx'

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cardinner' element={<CardInner/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
      <Global />
    </>
  )
}

export default App
