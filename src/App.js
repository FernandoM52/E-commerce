import ListaProdutos from "./components/ListaProdutos"
import Carrinho from "./components/Carrinho"
import styled from "styled-components"
import PRODUTOS from "./mock"
import { useState } from "react"

export default function App() {
  const [carrinho, setCarrinho] = useState([]);

  function adicionarCarrinho(item) {
    const estaNoCarrinho = carrinho.some((prod) => prod.id === item.id);
    if (!estaNoCarrinho) {
      setCarrinho([...carrinho, item]);
    }
  }

  function removerCarrinho(item) {
    const novoCarrinho = carrinho.filter((prod) => prod.id !== item.id);
    setCarrinho(novoCarrinho);
  }

  return (
    <ContainerApp>
      <ListaProdutos
        produtos={PRODUTOS}
        carrinho={carrinho}
        adicionarCarrinho={adicionarCarrinho} />
      <Carrinho
        carrinho={carrinho}
        removerCarrinho={removerCarrinho}
      />
    </ContainerApp>
  );
}

const ContainerApp = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  padding-right: 400px;
`;