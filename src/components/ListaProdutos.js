import CardProduto from "./CardProduto";
import styled from "styled-components";

export default function ListaProdutos({ produtos, carrinho, adicionarCarrinho }) {
    return (
        <ContainerListaProdutos>
            {produtos.map((prod) => (
                <CardProduto
                    key={prod.id}
                    produto={prod}
                    carrinho={carrinho}
                    adicionarCarrinho={adicionarCarrinho}
                />
            ))}
        </ContainerListaProdutos>
    );
}

const ContainerListaProdutos = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
