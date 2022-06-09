import { useState, useContext } from "react";
import {
  TouchableOpacity,
  Alert,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import { Text } from "../../components/typography/text.component";
import {
  MainContainer,
  SafeArea,
  CustomInput,
  CustomIcon,
} from "../../components/main-styles";
import { HeaderContainer } from "../home/home.styles";
import { Categories } from "../../components/categories/categories.component";
import { CategoryButton } from "../../components/categories/categories.styles";
import { FadeInView } from "../../components/animations/fade.animation";
import { ProductsContext } from "../../services/products/products.context";

const defaultProductDTO = {
  name: "",
  price: 0,
  description: "",
  category: "",
  avatar: "",
  developerEmail: "06.oguzhan.eser@gmail.com",
};

export const NewProductScreen = ({ navigation }: { navigation: any }) => {
  const [productDTO, setProductDTO] = useState(defaultProductDTO);

  const { addProductLoading, addProductError, addProduct } =
    useContext(ProductsContext);

  const handleChange = (name: string, value: string) => {
    setProductDTO({ ...productDTO, [name]: value });
  };

  const handleCategoryPress = (category: string) => {
    setProductDTO({ ...productDTO, category });
  };

  const handleSubmit = () => {
    let errors = [];

    if (productDTO.name.length < 3) {
      errors.push("Name must be at least 3 characters long.");
    }
    if (!productDTO.price || isNaN(productDTO.price)) {
      errors.push("Price must be provided. And must be a number.");
    }
    if (!productDTO.description) {
      errors.push("Description must be provided.");
    }
    if (!productDTO.avatar || !productDTO.avatar.startsWith("http")) {
      errors.push("Image must be provided and must start with http.");
    }
    if (!productDTO.category) {
      errors.push("Category must be selected.");
    }

    if (errors.length > 0) {
      Alert.alert("Error", errors.join("\n"));
    } else {
      addProduct(productDTO);
      navigation.navigate("Home");
    }
  };

  return (
    <SafeArea>
      <ScrollView>
        <MainContainer>
          <FadeInView>
            <HeaderContainer>
              <Text variant="title">New Product</Text>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <CustomIcon
                  iconLbr="Ionicons"
                  iconName="arrow-undo"
                  size={26}
                />
              </TouchableOpacity>
            </HeaderContainer>

            <CustomInput
              placeholder="Title"
              onChangeText={(text: any) => handleChange("name", text)}
            />

            <CustomInput
              placeholder="Price"
              onChangeText={(text: any) =>
                !isNaN(text) && handleChange("price", text)
              }
            />

            <CustomInput
              placeholder="Description"
              onChangeText={(text: any) => handleChange("description", text)}
              multiline={true}
              numberOfLines={2}
            />

            <CustomInput
              placeholder="Image URL"
              onChangeText={(text: any) =>
                handleChange("avatar", text.toLowerCase())
              }
            />

            <Text variant="description">
              Selected Category: {productDTO.category}
            </Text>
            <Categories
              onPressHandle={handleCategoryPress}
              selectedCategory={productDTO.category}
              showAll={false}
            />

            <CategoryButton
              onPress={addProductLoading ? () => {} : () => handleSubmit()}
              isSelected={false}
              style={{ marginRight: 0 }}
            >
              {addProductLoading ? (
                <ActivityIndicator size="small" color="white" />
              ) : (
                <Text variant="white">Add Product</Text>
              )}
            </CategoryButton>
          </FadeInView>
        </MainContainer>
      </ScrollView>
    </SafeArea>
  );
};
