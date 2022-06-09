import styled from "styled-components/native";

export const CategoriesContainer = styled.View`
  height: 60px;
  margin-horizontal: -10px;
  z-index: 1;
`;

export const CategoriesList = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 10,
    alignItems: "center",
  },
})``;

export const CategoryButton = styled.TouchableOpacity`
  margin-right: ${({ theme }: { theme: any }) => theme.space[2]};
  padding: ${({ isSelected }: { isSelected: boolean }) =>
    isSelected ? "14px" : "10px"}; };
  border-radius: 8px;
  background-color: ${({
    theme,
    isSelected,
  }: {
    theme: any;
    isSelected: boolean;
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
