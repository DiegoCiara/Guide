import axios from "axios";

//DECLARA O AXIOS PARA USAR O BACK END NA PORTA 3333 OU EM UMA PASSA POR PROD

export const serviceApi = axios.create({
  baseURL: 'https://asaas.saasforce.com.br',
  // baseURL: 'https://uniao-filial.figio.com.br',
});


// http://192.168.0.6:3333
