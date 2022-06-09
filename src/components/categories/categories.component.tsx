import { useState, useContext, useEffect } from "react";

import { CategoriesContext } from "../../services/categories/categories.context";
import {
  CategoriesContainer,
  CategoriesList,
  CategoryButton,
} from "./categories.styles";
import { Text } from "../typography/text.component";
import { FadeInView } from "../animations/fade.animation";

function capitalizeOnlyFirstLetter(str: string) {
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

  return capitalized;
}

export const Categories = ({
  onPressHandle,
  selectedCategory,
  showAll = true,
}: {
  onPressHandle: any;
  selectedCategory: string;
  showAll?: boolean;
}) => {
  const { categories, categoriesLoading, categoriesError, getCategories } =
    useContext(CategoriesContext);

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <CategoriesContainer>
      <CategoriesList
        data={
          showAll
            ? categories
            : categories.filter((category: any) => category.id > 0)
        }
        keyExtractor={(item: any) => item.id.toString()}
        refreshing={categoriesLoading}
        renderItem={({ item }: { item: any }) => (
          <FadeInView>
            <CategoryButton
              onPress={() => onPressHandle(item.name)}
              isSelected={selectedCategory === item.name}
            >
              <Text
                variant={selectedCategory === item.name ? "black" : "white"}
              >
                {capitalizeOnlyFirstLetter(item.name)}
              </Text>
            </CategoryButton>
          </FadeInView>
        )}
      />
    </CategoriesContainer>
  );
};
