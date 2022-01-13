import { PriceContainer, ProductContainer } from './style';
import {Button} from '@mui/material';
import { useState } from 'react';
import { Product } from '../../types';
import { useCart } from '../../hooks/useCart';
import { formatPrice } from '../../util/format';

export function ProductItem(props) {
  const [amount, setAmount] = useState(1);
  const { addProduct } = useCart();
  const product: Product = props.product;

  const changeQty = (value) => {
    if(value >= 1)
    setAmount(value);
  }

  const handleAddProduct = (productId: string) => {
    addProduct({productId, amount});
  }

  return (
    <ProductContainer>
      <img src={product.imageUrl} alt="" />
      <div>
        <p>{product.name}</p>
        <PriceContainer>
          <div>
            <span className="original-value">R$ {formatPrice((product.price / 100))}</span>
            <span className="value">R$ {formatPrice((product.sellingPrice / 100))}</span>
          </div>
          <input type="number" value={amount} onChange={(e) => changeQty(Number(e.target.value))} />
        </PriceContainer>
        <Button onClick={() => handleAddProduct(product.id)}>Adicionar</Button>
      </div>
    </ProductContainer>
  )
}