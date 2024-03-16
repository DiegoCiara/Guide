import React, { useEffect, useState } from 'react';
import '/src/App.css';
import { Menu, Pages } from '../../../labels';
import { BsFacebook, BsGithub, BsGlobe, BsInstagram, BsLinkedin, BsList } from "react-icons/bs";
import { Divisor } from '../../styles/Container';
import { InputSearch } from '../Input';
import { formatUrl } from '../../../utils/formats';
import ProductService from '../../../services/ProductService';
import { SearchModal } from '../SearchComponent';
import Drawer from '@mui/material/Drawer';


const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [products, setProducts] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => setModalIsOpen(true);

  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

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

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsOpen(open);
  };

  return (
  <>
    <SearchModal open={modalIsOpen} setClose={setModalIsOpen}/>
    <div className="dropdown">
      <div className="dropdown-header"  onClick={toggleDrawer(true)}>
        {selectedOption ? selectedOption.label : 
          <BsList style={{fontSize:'20px'}} className="MenuItem Nav " href='/'/>}
      </div>
      <Drawer
        anchor={'right'}
        open={isOpen}
        onClose={toggleDrawer(false)}
        
      >
        <div className="dropdown-options">        
          <div className="Row" style={{width:'100%', justifyContent:'space-around'}}>
            
          
          <a className="MenuItem Nav" style={{fontSize:"25px"}}  target='_blank' href='https://www.instagram.com/wavecrm/'><BsInstagram/></a>
          <a className="MenuItem Nav" style={{fontSize:"25px"}}  target='_blank' href='https://www.facebook.com/wavecrm'><BsFacebook/></a>
          <a className="MenuItem Nav" style={{fontSize:"25px"}}  target='_blank' href='https://www.wavecrm.com.br'><BsGlobe/></a>
        </div>
        <Divisor style={{marginBottom:'10px'}}/>
          <InputSearch clicked={openModal} />
          {products.map((pages)=>(
            <a className="MenuItem"  href={formatUrl(pages?.name)}>{pages.name}</a>
            ))}        

          </div>
      </Drawer>
    </div>
  </>
  );
};

export default Dropdown;
