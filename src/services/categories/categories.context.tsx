import { useState, createContext } from "react";
import { getCategoriesRequest } from "./categories.service";

export const CategoriesContext = createContext({
  categories: [],
  setCategories: () => {},
  categoriesLoading: false,
  categoriesError: null,
  getCategories: () => {},
});

export const CategoriesContextProvider = ({ children }: { children: any }) => {
  const [categoriesLoading, setCategoriesLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [categoriesError, setCategoriesError] = useState(null);

  const getCategories = async () => {
    setCategoriesLoading(true);

    getCategoriesRequest()
      .then((response: any) => {
        setCategories(response);
      })
      .catch((error) => {
        setCategoriesError(error);
      })
      .finally(() => {
        setCategoriesLoading(false);
      });
  };

  return (
    //@ts-ignore
    <CategoriesContext.Provider
      value={{
        categories,
        //@ts-ignore
        setCategories,
        categoriesLoading,
        categoriesError,
        getCategories,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
};
