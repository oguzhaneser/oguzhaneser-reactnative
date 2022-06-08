import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CategoriesContainer = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 10,
  },
})`
  margin-horizontal: -10px;
  padding-vertical: 10px;
  height: 100px;
`;

export const ProductsContainer = styled.FlatList.attrs({
  numColumns: 2,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 10,
  },
})`
  margin-horizontal: -10px;
`;

export const CategoryButton = styled.TouchableOpacity`
  margin-right: ${({ theme }: { theme: any }) => theme.space[2]};
  padding: 16px;
  border-radius: 8px;
  background-color: ${({
    theme,
    isSelected,
  }: {
    theme: any;
    isSelected?: boolean;
  }) => (isSelected ? theme.colors.bg.primary : theme.colors.bg.secondary)};
  justify-content: center;
  align-items: center;
  border-width: 2px;
  border-color: ${({ theme }: { theme: any }) => theme.colors.bg.secondary};
  shadow-color: ${({ theme }: { theme: any }) => theme.colors.shadow.primary};
  shadow-offset: 0px 2px;
  shadow-opacity: 0.25;
  shadow-radius: 2px;
  elevation: 2;
`;
