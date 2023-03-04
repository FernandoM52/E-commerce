import styled from "styled-components"
import Produtos from "./components/Produtos"
import Carrinho from "./components/Carrinho"
import PRODUTOS from "./mock"
export default function App() {
  return (
    <ContainerApp>
      <Produtos />
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