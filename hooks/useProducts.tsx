import React, { createContext, ReactNode, useContext } from "react";
import { Product } from "../types";

interface ProductProviderProps {
  children: ReactNode;
  products: Product[];
}

interface ProductContextData {
  products: Product[];
}

export const ProductContext = createContext<ProductContextData>({} as ProductContextData);

export function ProductsProvider({ children, products }: ProductProviderProps) {
  return (
    <ProductContext.Provider value={{
      products
    }}>
      {children}
    </ProductContext.Provider>
  )
}

export function useProducts() {
  const context = useContext(ProductContext);
  return context;
}