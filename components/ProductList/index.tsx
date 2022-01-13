import { useEffect, useState } from "react";
import { Product } from '../../types';
import { useProducts } from "../../hooks/useProducts";
import { api } from "../../services/api";
import { ProductItem } from "../ProductItem";
import { Container, List } from './style'

export function ProductList() {
  const { products } = useProducts();

  return (
    <Container>
      <h1>Nossos Produtos</h1>
      {products.length ?
        <List>
          {products.map((item) => <ProductItem product={item} key={`LIST_${item.uniqueId}`} />)}
        </List>
        : null
      }
    </Container>
  )
}