import { useContext, useEffect, useState } from "react";
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

import { Categories } from "../../components/categories/categories.component";
import { API_URL } from "../../services/connections";

export const HomeScreen = ({ navigation }: { navigation: any }) => {
  const { products, productsLoading, productsError, getProducts } =
    useContext(ProductsContext);

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
          <Text variant="title">UPayments Store</Text>
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
              <ProductCard
                product={item}
                onPress={() => {
                  //delete for mistakes
                  // fetch(`${API_URL}products/${item.id}`, {
                  //   method: "DELETE",
                  // })
                  //   .then((response) => response.json())
                  //   .then((data) => {
                  //     console.log(data);
                  //   })
                  //   .catch((error) => {
                  //     console.log(error);
                  //   });

                  navigation.navigate("Detail", { productId: item.id });
                }}
              />
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
