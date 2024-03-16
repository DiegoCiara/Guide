
import { Menu, Pages } from "../../../labels";
import { DrawlerStyled, MenuDrawler } from "./DrawlerStyled";
import { InputSearch } from "../Input";
import { formatUrl } from "../../../utils/formats";
import '/src/App.css';
import ProductService from "../../../services/ProductService";
import { useEffect, useState } from "react";
import Modal from 'react-modal';
import { SearchModal } from "../SearchComponent";

export function Drawler() {

  const [products, setProducts] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);

  useEffect(() => {
    getProducts()
  },[])


  const getProducts = async () => {
    // setLoading(true);
    try {
      const data = await ProductService.getProducts();
      const sortedContent = data?.sort((a, b) => {
        // Convertendo strings de data em objetos Date para comparação
        const dateA = new Date(a.createdAt);
        const dateB = new Date(b.createdAt);
        
        // Ordenando do mais antigo para o mais recente
        return dateA - dateB;
      });
      setProducts(sortedContent);
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
    <>
      <SearchModal open={modalIsOpen} setClose={setModalIsOpen}/>
      <DrawlerStyled>
        <MenuDrawler>
          <InputSearch clicked={openModal} />
          <div style={{marginTop:'20px', width:'100%'}}>
            {products.map((pages)=>(
                <a className="MenuItem" href={formatUrl(pages?.name)}>{pages.name}</a>
            ))}    
          </div>
        </MenuDrawler>    
      </DrawlerStyled>   
    </>
  )
}