import dataProducts from './resources/data/acima-10-reais.json';

import { createServer, Model } from "miragejs";

export function makeServer({environment  = 'test'}) {
  return createServer({
    environment,
    models: {
      product: Model
    },
    seeds(server) {
      server.db.loadData({
        product: dataProducts.items
      });
    },
    routes() {
      this.namespace = "api";
      this.get("/products", (schema, response) => {
        return schema.db.product;
      });
      this.get("/products/:id", (schema, request) => {
        const product = schema.db.product.find(request.params.id);
        return product;
      });
      
    }
  });
}