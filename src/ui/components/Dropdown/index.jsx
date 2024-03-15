import React, { useEffect, useState } from 'react';
import '/src/App.css';
import { Menu, Pages } from '../../../labels';
import { BsGithub, BsInstagram, BsLinkedin, BsList } from 'react-icons/bs';
import { Divisor } from '../../styles/Container';
import { InputSearch } from '../Input';
import { formatUrl } from '../../../utils/formats';
import ProductService from '../../../services/ProductService';

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    getProducts()
  },[])

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };


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
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : 
          <BsList style={{fontSize:'20px'}} className="MenuItem Nav " href='/'/>}
      </div>
        <div className="dropdown-options" style={ isOpen? {display: 'inline'}: {display: 'none'}}>        
          <div className="Row" style={{width:'100%', justifyContent:'space-around'}}>
            
          <a className="MenuItem Nav" style={{fontSize:"25px"}} target='_blank' href='https://www.instagram.com/sr.ciara/'><BsInstagram/></a>
          <a className="MenuItem Nav" style={{fontSize:"25px"}} target='_blank' href='https://www.linkedin.com/in/diego-antonio-055602249/'><BsLinkedin/></a>
          <a className="MenuItem Nav" style={{fontSize:"25px"}} target='_blank' href='https://github.com/DiegoCiara/guide'><BsGithub/></a>
        </div>
        <Divisor style={{marginBottom:'10px'}}/>
        <InputSearch/>
          {products.map((pages)=>(
            <a className="MenuItem"  href={formatUrl(pages?.name)}>{pages.name}</a>
            ))}        
          </div>
    </div>
  );
};

export default Dropdown;
