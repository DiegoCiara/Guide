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
import { useEffect, useState } from 'react'
import ProductService from './services/ProductService'

function App() {

  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    getProducts()
  },[])


  const getProducts = async () => {
    // setLoading(true);
    try {
      const data = await ProductService.getProducts();
      setProducts(data);
      // setLoading(false);
    } catch (err) {
      console.log(err)
      // setLoading(false);
      // setError(
      //   "Não foi possivel buscar canais de vendas, verifique sua conexão e tente novamente"
      // );
    }
  };
  return (
    <div className='App'>
      <NavBar/>
      <Container>
        <Drawler/>
          <Content>
            <Router>
                <Routes>
                  {products?.map((e) => (
                    <Route path={formatUrl(e?.name)} element={<Document id={e?.id}/>}/>
                  ))}
                    <Route path={"/"} element={<Document contents={products[0]?.content}/>}/>
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
