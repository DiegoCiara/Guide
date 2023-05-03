import './App.css'
import { NavBar } from './ui/components/NavBar'
import { Drawler } from './ui/components/Drawler'
import { Route, Routes, BrowserRouter as Router, Navigate, RouterProvider, BrowserRouter
} from 'react-router-dom'
import { Home } from './pages/home'
import { CadastroContrato } from './pages/contents/cadastrocontrato'
import { ArquivoRemessa } from './pages/contents/arquivoremessa'
import { ArquivoRetorno } from './pages/contents/arquivoretorno'

function App() {
  return (
    <>
      <NavBar/>
      <Drawler/>
      <Router>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cadastrocontrato' element={<CadastroContrato/>}/>
            <Route path='/arquivoremessa' element={<ArquivoRemessa/>}/>
            <Route path='/arquivoretorno' element={<ArquivoRetorno/>}/>
            <Route path="*" element={<Home/>} />
          </Routes>
      </Router>      
    </>
  )
}

export default App
