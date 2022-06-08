import { useState, createContext } from "react";
import { getProductsRequest } from "./products.service";

export const ProductsContext = createContext({
  products: [],
  productsLoading: false,
  productsError: null,
  getProducts: () => {},
});

export const ProductsContextProvider = ({ children }: { children: any }) => {
  const [productsLoading, setProductsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [productsError, setProductsError] = useState(null);

  const getProducts = async () => {
    setProductsLoading(true);

    getProductsRequest()
      .then((response: any) => {
        setProducts(response);
      })
      .catch((error) => {
        setProductsError(error);
      })
      .finally(() => {
        setProductsLoading(false);
      });
  };

  return (
    //@ts-ignore
    <ProductsContext.Provider
      value={{
        products,
        productsLoading,
        productsError,
        getProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
