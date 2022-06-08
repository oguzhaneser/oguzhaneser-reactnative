import { useState, useContext, useEffect, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { TouchableOpacity, Button } from "react-native";
import { Text } from "../../components/typography/text.component";
import {
  MainContainer,
  SafeArea,
  CustomInput,
  CustomIcon,
} from "../../components/main-styles";
import { HeaderContainer } from "../home/home.styles";
import { Categories } from "../../components/categories/categories.component";
import { CategoriesContext } from "../../services/categories/categories.context";

export const NewProductScreen = ({ navigation }: { navigation: any }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const { categories, setCategories } = useContext(CategoriesContext);

  const handleCategoryPress = (category: string) => {
    setSelectedCategory(category);
  };

  useFocusEffect(
    useCallback(() => {
      //@ts-ignore
      if (categories.length > 0 && categories[0].id === 0) {
        let newCategories = categories;
        newCategories.shift();

        //@ts-ignore
        setCategories([]);
        //@ts-ignore
        setCategories(newCategories);
        //@ts-ignore
        setSelectedCategory(newCategories[0].name);
      }
    }, [])
  );

  return (
    <SafeArea>
      <MainContainer>
        <HeaderContainer>
          <Text variant="title">New Product</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <CustomIcon iconLbr="Ionicons" iconName="caret" size={26} />
          </TouchableOpacity>
        </HeaderContainer>

        <Text variant="body">Selected Category: {selectedCategory}</Text>
        <Categories
          onPressHandle={handleCategoryPress}
          selectedCategory={selectedCategory}
        />
      </MainContainer>
    </SafeArea>
  );
};
