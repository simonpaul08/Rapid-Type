import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Landing from './pages/Landing'
import Main from './pages/Main'

function App() {



  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Landing />} />
          <Route path='main' element={<Main />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
