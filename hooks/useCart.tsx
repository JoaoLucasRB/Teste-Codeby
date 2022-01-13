import { createContext, ReactNode, useContext, useState } from "react";
import { api } from "../services/api";
import { Product } from "../types";
import Swal from 'sweetalert2';

interface CartProviderProps {
  children: ReactNode
}

interface ProductAmount {
  productId: string;
  amount: number;
}

interface CartContextData {
  cart: Product[],
  addProduct: ({ productId, amount }: ProductAmount) => Promise<void>;
  removeProduct: (productId: string) => void;
  updateProductAmount: ({ productId, amount }: ProductAmount) => void;
  total: number;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>(() => {
    if (typeof window !== 'undefined') {
      const storagedCart = localStorage.getItem("@seuze:cart");
      if (storagedCart)
        return JSON.parse(storagedCart);
    }
    return [];
  });
  const [total, setTotal] = useState<number>(() => getCartTotal([...cart]));

  const addProduct = async ({ productId, amount }: ProductAmount) => {
    try {
      const updatedCart = [...cart];
      const productExists = updatedCart.find(product => product.id === productId);

      if (productExists) {
        Swal.fire({
          title: "Ops..",
          text: "Parece que este item já está no seu carrinho",
          icon: 'warning',
          confirmButtonText: "Ok",
        });
        return;
      } else {
        const product = await api.get(`products/${productId}`);
        if (product.data) {
          const newProduct = {
            ...product.data,
            amount
          }
          updatedCart.push(newProduct);
        } else
          throw Error();
        setTotal(getCartTotal(updatedCart));
        setCart(updatedCart);
        localStorage.setItem("@seuze:cart", JSON.stringify(updatedCart));
      }
    } catch {
      console.log("Erro na adição do produto");
    }
  }

  const removeProduct = (productId: string) => {
    try {
      const updatedCart = [...cart];
      const productIndex = updatedCart.findIndex(product => product.id === productId);

      if (productIndex >= 0) {
        updatedCart.splice(productIndex, 1);
        setTotal(getCartTotal(updatedCart));
        setCart(updatedCart);
        localStorage.setItem("@seuze:cart", JSON.stringify(updatedCart));
      } else
        throw Error();
    } catch {
      console.log("Erro na remoção do produto")
    }
  }

  const updateProductAmount = ({ productId, amount }: ProductAmount) => {
    try {
      if (amount <= 0) {
        return;
      }

      const updatedCart = [...cart];
      const productExists = updatedCart.find(product => product.id === productId);

      if (productExists) {
        productExists.amount = amount;
        setTotal(getCartTotal(updatedCart));
        setCart(updatedCart);
        localStorage.setItem("@seuze:cart", JSON.stringify(updatedCart));
      }
    } catch {
      console.log("Erro na alteração de quantidade do produto");
    }
  }

  function getCartTotal(updatedCart: Product[]) {
    let total = 0;
    for(let item of updatedCart) {
      total += item.sellingPrice * item.amount;
    }
    return total;
  }

  return (
    <CartContext.Provider value={{
      cart,
      addProduct,
      removeProduct,
      updateProductAmount,
      total,
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);
  return context;
}