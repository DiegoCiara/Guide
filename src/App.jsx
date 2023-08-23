import './App.css'
import { NavBar } from './ui/components/NavBar'
import { Drawler } from './ui/components/Drawler'
import { Route, Routes, BrowserRouter as Router, 
} from 'react-router-dom'
import { Home } from './pages/home'
import { OverView } from './pages/overview'
import { Container } from './ui/styles/Container'
import { Content } from './ui/styles/Content'
import { Document } from './pages/document'

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Container>
        <Drawler/>
          <Content>
            <Router>
                <Routes>
                  <Route path='/' element={<OverView/>}/>
                  <Route path='/home' element={<Home/>}/>
                  <Route path='/APIdocument' element={<Document/>}/>
                  <Route path="*" element={<Home/>} />
                </Routes>
            </Router>
          </Content>
      </Container>
    </div>
  )
}

export default App
