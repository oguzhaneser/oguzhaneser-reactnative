import { useState, createContext } from "react";
import {
  getProductsRequest,
  addProductRequest,
  getProductByIdRequest,
} from "./products.service";

export const ProductsContext = createContext({
  products: [],
  productsLoading: false,
  productsError: null,
  getProducts: () => {},
  product: null,
  productLoading: false,
  productError: null,
  getProductById: (id: number) => {},
  addProductLoading: false,
  addProductError: null,
  addProduct: (product: any) => {},
});

export const ProductsContextProvider = ({ children }: { children: any }) => {
  const [productsLoading, setProductsLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [productsError, setProductsError] = useState(null);

  const [addProductLoading, setAddProductLoading] = useState(false);
  const [addProductError, setAddProductError] = useState(null);

  const [product, setProduct] = useState(null);
  const [productError, setProductError] = useState(null);
  const [productLoading, setProductLoading] = useState(false);

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

  const getProductById = async (id: number) => {
    setProductLoading(true);

    getProductByIdRequest(id)
      .then((response: any) => {
        setProduct(response);
      })
      .catch((error) => {
        setProductError(error);
      })
      .finally(() => {
        setProductLoading(false);
      });
  };

  const addProduct = async (product: any) => {
    setAddProductLoading(true);

    addProductRequest(product)
      .then((response: any) => {
        //@ts-ignore
        setProducts([...products, response]);
      })
      .catch((error) => {
        setAddProductError(error);
      })
      .finally(() => {
        setAddProductLoading(false);
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
        product,
        productLoading,
        productError,
        getProductById,
        addProductLoading,
        addProductError,
        addProduct,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
