import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";
import { ProductList } from "../ProductList";

export function Body() {
  return (
    <Container>
      <ProductList />
    </Container>
  )
}