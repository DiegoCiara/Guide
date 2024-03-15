
import { Menu, Pages } from "../../../labels";
import { DrawlerStyled, MenuDrawler } from "./DrawlerStyled";
import { InputSearch } from "../Input";
import { formatUrl } from "../../../utils/formats";
import '/src/App.css';
import ProductService from "../../../services/ProductService";
import { useEffect, useState } from "react";

export function Drawler() {

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
  return(
    <DrawlerStyled>
      <MenuDrawler>
        <InputSearch/>
        <div style={{marginTop:'20px', width:'100%'}}>
          {products.map((pages)=>(
              <a className="MenuItem" href={formatUrl(pages?.name)}>{pages.name}</a>
          ))}    
        </div>
      </MenuDrawler>    
    </DrawlerStyled>   
  )
}