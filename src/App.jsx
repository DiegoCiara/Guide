import './App.css'
import { NavBar } from './ui/components/NavBar'
import { Drawler } from './ui/components/Drawler'
import { Route, Routes, BrowserRouter as Router, 
} from 'react-router-dom'
import { Home } from './pages/home'
import { Example } from './pages/contents/arquivoremessa'
import { Container } from './ui/styles/Container'
import { Content } from './ui/styles/Content'

function App() {
  return (
    <>
      <Container>
        <Drawler/>
        <Content style={{overflowY: "scroll"}}>
      <NavBar/>
          <Router>
              <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/example' element={<Example/>}/>
                <Route path="*" element={<Home/>} />
              </Routes>
          </Router>
        </Content>
      </Container>
    </>
  )
}

export default App
