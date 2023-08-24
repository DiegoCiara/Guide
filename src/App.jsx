import './App.css'
import { NavBar } from './ui/components/NavBar'
import { Drawler } from './ui/components/Drawler'
import { Route, Routes, BrowserRouter as Router, 
} from 'react-router-dom'
import { Container, Content } from './ui/styles/Container'
import { Pages } from './labels'
import { DynamicPage } from './pages/DynamicPage'

function App() {

  return (
    <div className='App'>
      <NavBar/>
      <Container>
        <Drawler/>
          <Content>
            <Router>
                <Routes>
                  {Pages.map(route => (
                    <Route
                      key={route.id}
                      path={route.path}
                      element={<DynamicPage route={route} />}
                    />))}
                </Routes>
            </Router>
          </Content>
      </Container>
    </div>
  )
}

export default App
