
import { serviceApi as api } from "./ServiceApi";
import { toast } from "react-toastify";

class ProductService {
  async getProducts() {
    try {
      const { data } = await api.get("/page");
      console.log(data)
      return data;
    } catch (error) {
      toast.error(
        "Ops! algo deu errado, verifique sua conexão e tente novamente."
      );
      return error;
    }
  }

  async getProduct(id){
    try {
      const response = await api.get(`/page/${id}`);
      console.log(response.data)
      return response.data;
    } catch (error) {
      toast.error(
        "Ops! algo deu errado, verifique sua conexão e tente novamente."
      );
      return error;
    }
  }

  async deleteProduct(id) {
    try {
      const response = await api.delete(`/page/${id}`);
      toast.success("Contato deletado com sucesso!");
      return response.data;
    } catch (error) {
      toast.error(
        "Não foi possível deletar o contato, verifique sua conexão e tente novamente."
      );
      return error;
    }
  }

  async createProduct({ 
    name,
  }) {
    const body = {
      name,
    };

    try {
      const { data } = await api.post("/page", body);
      toast.success("Contato criado com sucesso!");
      return data;
    } catch (error) {
      toast.error(
        "Não foi possível criar o contato, verifique sua conexão e tente novamente."
      );
      return;
    }
  }

  async updateProduct({
    id,
    name,  
  }) {
    const body = {    
      name,    
    };

    try {
      const { data } = await api.put(`/page/${id}?with=convenio`, body);
      toast.success("Contato atualizado com sucesso!");
      return data.name;
    } catch (error) {
      toast.error(
        "Não foi possível editar o contato, verifique sua conexão e tente novamente."
      );
      return error.message;
    }
  }
}

export default new ProductService();