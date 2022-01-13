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
import { GetServerSideProps } from 'next';

export default function Home({products}) {

  return (
    <ProductsProvider products={products}>
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

export const getServerSideProps: GetServerSideProps = async () => {
  // Request API
  const response = await api.get('https://jsonkeeper.com/b/D6Q4')
  return {
    props: {
      products: response.data.items
    }
  }
}