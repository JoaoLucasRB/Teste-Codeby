export interface Product {
  uniqueId: string;
  id: string;
  productId: string;
  ean: string;
  name: string;
  price: number;
  listPrice: number;
  sellingPrice: number;
  imageUrl: string;
  amount?: number;
  [Key: string]: any;
}

export interface Cart {
  items?: Product[]
  total?: number
}