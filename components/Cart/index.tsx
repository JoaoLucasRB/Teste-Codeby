import { Button } from "@mui/material"
import { useState } from "react";
import { useCart } from "../../hooks/useCart"
import { formatPrice } from "../../util/format";
import { Container, CartTitle, CartButton, CartTotal, CartProductList, CartProductItem, CartProductItemExtra, CartProductTotal } from "./style"

export const Cart = () => {
  const { cart, updateProductAmount, removeProduct, total } = useCart();
  console.log('cart', cart)

  return (
    <Container>
      <CartTitle>
        <p>Meu carrinho</p>
      </CartTitle>
      <CartProductList>
        {cart.length ?
          cart.map((item) => (
            <CartProductItem key={`CART_${item.uniqueId}`}>
              <img src={item.imageUrl} alt="" />
              <div>
                <p className="cart-product-title">{item.name}</p>
                <CartProductTotal>
                  <div>
                    {item.listPrice !== item.sellingPrice ?
                      <p className="cart-product-original-value">R$ {formatPrice(((item.listPrice * item.amount) / 100))}</p>
                      : null
                    }
                    <p className="cart-product-value">R$  {formatPrice(((item.sellingPrice * item.amount) / 100))}</p>
                  </div>
                  <input type="number" value={item.amount} onChange={(e) => updateProductAmount({ productId: item.id, amount: Number(e.target.value) })} />
                </CartProductTotal>
                <CartProductItemExtra className={item.amount >= 2 ? "show-un-price" : ""}>
                  {item.amount >= 2 ?
                    <p className="cart-product-unit-value">R$  {formatPrice((item.sellingPrice / 100))} por 1 un.</p>
                    : null
                  }
                  <Button onClick={() => removeProduct(item.id)}>Remover</Button>
                </CartProductItemExtra>
              </div>
            </CartProductItem>
          ))
          : <span>Não há nenhum produto no seu carrinho</span>
        }

      </CartProductList>
      <CartTotal>
        <div>
          <p>Total</p>
          {/* <p>R$ {String((total / 100).toFixed(2)).replace('.', ',')}</p> */}
          <p>{formatPrice(total / 100)}</p>
        </div>
        {total >= 1000 ?
          <span>Parabéns, sua compra tem frete grátis!</span>
          : null
        }
      </CartTotal>
      <CartButton>
        <Button>finalizar compra</Button>
      </CartButton>
    </Container>
  )
}