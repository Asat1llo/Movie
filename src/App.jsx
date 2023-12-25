import { Route, Routes } from 'react-router-dom'
import Global from './App.js'
import Header from './components/header/header.jsx'
import Main from './components/main/main.jsx'
import Card from './components/card/card.jsx'

function App() {

  return (
    <>
      <Header />
      <Main/>
      <Card/>
      <Global />
    </>
  )
}

export default App
