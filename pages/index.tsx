// import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Product } from '../types'
import { useEffect, useState } from 'react';
import { Body } from '../components/Body';
import { Header } from '../components/Header';
import { ProductsProvider } from '../hooks/useProducts';
import { api } from '../services/api';
import GlobalStyle from '../styles/globalstyle';
import { CartProvider } from '../hooks/useCart';
import { Footer } from '../components/Footer';

export default function Home() {
  // Substituir por getServerSideProps
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    async function loadProducts() {
      await api.get('products')
        .then(response => setProducts(response.data));
    }

    loadProducts();
  }, []);
  // Fim

  return (
    <ProductsProvider products={products} /** products={props.products} */>
      <CartProvider>
        <Head>
          <title>Teste Codeby</title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
        </Head>
        <GlobalStyle />
        <Header />
        <Body />
        <Footer />
      </CartProvider>
    </ProductsProvider>
  );
}

/** export const getServerSideProps: GetServerSideProps = async () => {
 // Request API
 const response = api.get('products') 
  return {
    props {
      products: response.data
    }
  }
} */