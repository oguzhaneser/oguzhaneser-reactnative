import { useContext, useEffect } from "react";
import { Button } from "react-native";
import { Text } from "../components/typography/text.component";
import { MainContainer, SafeArea, CustomIcon } from "../components/main-styles";
import { FadeInView } from "../components/animations/fade.animation";
import { ProductCard } from "../components/product-card/product-card.component";
import {
  HeaderContainer,
  CategoriesContainer,
  CategoryButton,
  ProductsContainer,
} from "./home.styles";

import { ProductsContext } from "../services/products/products.context";

var categories = [
  { id: 0, name: "all" },
  { id: 1, name: "women" },
  { id: 2, name: "men" },
  { id: 3, name: "accessories" },
  { id: 4, name: "shoes" },
  { id: 5, name: "shoes" },
  { id: 6, name: "shoes" },
  { id: 7, name: "shoes" },
];

var productsMock = [
  { id: 0, name: "all" },
  { id: 1, name: "women" },
  { id: 2, name: "men" },
  { id: 3, name: "accessories" },
  { id: 4, name: "shoes" },
  { id: 5, name: "shoes" },
  { id: 6, name: "shoes" },
  { id: 7, name: "shoes" },
];

function capitalizeOnlyFirstLetter(str: string) {
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  return capitalized;
}

export const HomeScreen = ({ navigation }: { navigation: any }) => {
  const { products, productsLoading, productsError, getProducts } =
    useContext(ProductsContext);

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    console.log("products", products);
  }, [products]);

  return (
    <SafeArea>
      <MainContainer>
        <HeaderContainer>
          <Text variant="title">UPayments Store</Text>
          <CustomIcon iconLbr="FontAwesome" iconName="search" size={26} />
        </HeaderContainer>

        <CategoriesContainer
          data={categories}
          keyExtractor={(item: any) => item.id.toString()}
          renderItem={({ item }: { item: any }) => (
            <CategoryButton onPress={() => console.log(item)}>
              <Text variant="white">
                {capitalizeOnlyFirstLetter(item.name)}
              </Text>
            </CategoryButton>
          )}
        />

        <ProductsContainer
          data={products}
          keyExtractor={(item: any) => item.id.toString()}
          renderItem={({ item }: { item: any }) => (
            <ProductCard product={item} onPress={() => console.log(item)} />
          )}
          refreshing={productsLoading}
          onRefresh={() => getProducts()}
          ListEmptyComponent={
            <FadeInView>
              <Text variant="centered">
                {productsLoading ? "Products Loading..." : "No products found"}
              </Text>
            </FadeInView>
          }
        />
      </MainContainer>
    </SafeArea>
  );
};
