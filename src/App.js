import ListaProdutos from "./components/ListaProdutos"
import Carrinho from "./components/Carrinho"
import styled from "styled-components"
import PRODUTOS from "./mock"
export default function App() {
  return (
    <ContainerApp>
      <ListaProdutos />
      <Carrinho />
    </ContainerApp>
  );
}

const ContainerApp = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  padding-right: 400px;
`;