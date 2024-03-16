import Modal from 'react-modal';
import React, { useEffect, useRef, useState } from 'react';
import ProductService from '../../../services/ProductService';
import { IoClose } from "react-icons/io5";
import { BsSearch } from "react-icons/bs"
import { Input } from '../Input/InputStyle';
import { formatUrl } from '../../../utils/formats';


export function SearchModal({open, setClose}){
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  const popoverRef = useRef(null); // Ref para o popover

  useEffect(() => {
    function handleClickOutside(event) {
      if (popoverRef.current && !popoverRef.current.contains(event.target)) {
        setQuery('');
      }
    }

    // Adiciona o ouvinte de eventos quando o popover é visível
    if (query) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    // Limpeza do evento
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [query]); // Reativa o efeito quando `isPopoverVisible` muda

  const togglePopover = () => {
    setQuery('');
  };

  const handleSearch = (event) => {
    const value = event.target.value;
    setQuery(value);

    // Atualiza a lista de produtos filtrados apenas se a string de pesquisa não estiver vazia
    if (value?.trim()) {
      const filtered = products?.filter(product =>
        product.head.toLowerCase().includes(value?.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      // Se a string de pesquisa estiver vazia, limpa a lista de produtos filtrados
      setFilteredProducts([]);
    }
  };
  
  useEffect(() => {
    getProducts()
  },[])
  
  useEffect(() => {
    console.log(filteredProducts)
  },[filteredProducts])
  
  const getProducts = async () => {
    // setLoading(true);
    try {
      const data = await ProductService.getSections();
      console.log(data)
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
    <Modal
      isOpen={open}
      onRequestClose={() => setClose(false)}
      // parentSelector={() => document.querySelector('#root')}
      contentLabel="Example Modal"
      // overlayClassName="modalOverlay"
      className="ModalContainer"
      style={{
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.75)',
          zIndex: 9000, // Ajuste o zIndex conforme necessário para garantir que o overlay apareça acima de outros elementos da página
        },
      }}
    >
      <div className="search-container">
        <div className='search-container_input'>
          <input
            type="text"
            id="search-box"
            placeholder="Pesquisar..."
            value={query}
            onChange={handleSearch}
          />
          <BsSearch/>
        </div>
        {query ? (
          <ul id="results" className="results" ref={popoverRef}>
            {filteredProducts.map(e => (
              <a className='ItemSearch' href={formatUrl(e?.page?.name)} key={e?.id} onClick={() => togglePopover()}> 
                <h3>{e?.head}</h3>
                <span>{e?.title}</span>
              </a>
            ))}
          </ul>
        ): (
          <ul id="results" className="results" ref={popoverRef}>
            {products.map(e => (
              <a className='ItemSearch' href={formatUrl(e?.page?.name)} key={e?.id} onClick={() => togglePopover()}> 
                <h3>{e?.head}</h3>
                <span>{e?.title}</span>
              </a>
            ))}
          </ul>
        )}
      </div>
        <button className='CloseModal' onClick={() => setClose(false)}><IoClose/></button>

    </Modal>

  )
}