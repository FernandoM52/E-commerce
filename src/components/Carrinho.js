import styled from "styled-components";
import CardCarrinho from "./CardCarrinho";
export default function Carrinho() {
  return (
    <ContainerCarrinho>
      <CardCarrinho />
      <CardCarrinho />
      <CardCarrinho />
    </ContainerCarrinho>
  );
}

const ContainerCarrinho = styled.div`
  border: 1px solid black;
  width: 400px;
  height: 100vh;
  position: absolute;
  right: 0;
`;