import styled from "styled-components";
import CardCarrinho from "./CardCarrinho";
export default function Carrinho({ carrinho, removerCarrinho }) {
  return (
    <ContainerCarrinho>
      {carrinho.map((prod) => (
        <CardCarrinho
          key={prod.id}
          produto={prod}
          removerCarrinho={removerCarrinho}
        />
      ))}
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