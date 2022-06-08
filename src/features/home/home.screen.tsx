import { useContext, useEffect, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

import { Text } from "../../components/typography/text.component";
import {
  MainContainer,
  SafeArea,
  CustomIcon,
  CustomInput,
} from "../../components/main-styles";
import { FadeInView } from "../../components/animations/fade.animation";
import { ProductCard } from "../../components/product-card/product-card.component";
import {
  HeaderContainer,
  ProductsContainer,
  ProductsList,
  SearchContainer,
  AddProductButton,
} from "./home.styles";

import { ProductsContext } from "../../services/products/products.context";
import { CategoriesContext } from "../../services/categories/categories.context";

import { Categories } from "../../components/categories/categories.component";

function capitalizeOnlyFirstLetter(str: string) {
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  return capitalized;
}

export const HomeScreen = ({ navigation }: { navigation: any }) => {
  const { products, productsLoading, productsError, getProducts } =
    useContext(ProductsContext);
  const { categories, setCategories } = useContext(CategoriesContext);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [searchText, setSearchText] = useState("");
  const [searchVisibility, setSearchVisibility] = useState(false);

  const handleCategoryPress = (category: string) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  useFocusEffect(
    useCallback(() => {
      //@ts-ignore
      if (categories.length > 0 && categories[0].id !== 0) {
        let newCategories = categories;
        newCategories.unshift({
          //@ts-ignore
          id: 0,
          //@ts-ignore
          name: "All",
        });

        //@ts-ignore
        setCategories(newCategories);
      }
    }, [])
  );

  useEffect(() => {
    if (selectedCategory === "All") {
      if (searchText.length > 0) {
        setFilteredProducts(
          products.filter((product: any) =>
            product.name.toLowerCase().includes(searchText.toLowerCase())
          )
        );
      } else {
        setFilteredProducts(products);
      }
    } else {
      if (searchText.length > 0) {
        setFilteredProducts(
          products.filter(
            (product: any) =>
              product.name.toLowerCase().includes(searchText.toLowerCase()) &&
              product.category === selectedCategory
          )
        );
      } else {
        setFilteredProducts(
          products.filter(
            (product: any) => product.category === selectedCategory
          )
        );
      }
    }
  }, [selectedCategory, searchText]);

  return (
    <SafeArea>
      <MainContainer>
        <HeaderContainer>
          <Text variant="title">Eşer Store</Text>
          <TouchableOpacity
            onPress={() => {
              setSearchVisibility(!searchVisibility);
            }}
          >
            <CustomIcon
              iconLbr="FontAwesome"
              iconName={searchVisibility ? "close" : "search"}
              size={26}
            />
          </TouchableOpacity>
        </HeaderContainer>

        {searchVisibility && (
          <SearchContainer>
            <CustomInput
              placeholder="Search"
              value={searchText}
              onChangeText={(text) => setSearchText(text)}
            />
          </SearchContainer>
        )}

        <Categories
          onPressHandle={handleCategoryPress}
          selectedCategory={selectedCategory}
        />

        <ProductsContainer>
          <ProductsList
            data={filteredProducts}
            keyExtractor={(item: any) => item.id.toString()}
            renderItem={({ item }: { item: any }) => (
              <ProductCard product={item} onPress={() => console.log(item)} />
            )}
            refreshing={productsLoading}
            onRefresh={() => getProducts()}
            ListEmptyComponent={
              <FadeInView>
                <Text variant="centered">
                  {productsLoading
                    ? "Products Loading..."
                    : "No products found"}
                </Text>
              </FadeInView>
            }
          />
        </ProductsContainer>

        <AddProductButton
          onPress={() => {
            navigation.navigate("NewProduct");
          }}
        >
          <CustomIcon
            iconName="plus"
            size={30}
            color="#000000"
            iconLbr="Fontawesome5"
          />
        </AddProductButton>
      </MainContainer>
    </SafeArea>
  );
};
