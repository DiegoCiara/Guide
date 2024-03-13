import './App.css'
import { NavBar } from './ui/components/NavBar'
import { Drawler } from './ui/components/Drawler'
import { Route, Routes, BrowserRouter as Router, 
} from 'react-router-dom'
import { Home } from './pages/home'
import { OverView } from './pages/overview'
import { Container } from './ui/styles/Container'
import { Content } from './ui/components/Contents/ContentStyle'
import { Document } from './pages/document'
import { Pages } from './labels'
import { formatUrl } from './utils/formats'

function App() {
  return (
    <div className='App'>
      <NavBar/>
      <Container>
        <Drawler/>
          <Content>
            <Router>
                <Routes>
                  {Pages.map((e) => (
                    <Route path={formatUrl(e?.page)} element={<Document contents={e?.content}/>}/>
                  ))}
                    <Route path={"/"} element={<Document contents={Pages[0]?.content}/>}/>
                  {/* <Route path='/home' element={<Home/>}/> */}
                  {/* <Route path='/APIdocument' element={}/> */}
                  <Route path="*" element={<Home/>} />
                </Routes>
            </Router>
          </Content>
      </Container>
    </div>
  )
}

export default App
