import CardProduto from "./CardProduto";
import styled from "styled-components";

export default function ListaProdutos() {
    return (
        <ContainerListaProdutos>
            <CardProduto />
            <CardProduto />
            <CardProduto />
        </ContainerListaProdutos>
    );
}

const ContainerListaProdutos = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
