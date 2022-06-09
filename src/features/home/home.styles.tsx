import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProductsContainer = styled.View`
  flex: 1;
`;

export const ProductsList = styled.FlatList.attrs({
  numColumns: 2,
  showsVerticalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 10,
  },
})`
  margin-horizontal: -10px;
`;

export const SearchContainer = styled.View`
  width: 100%;
`;

export const AddProductButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${({ theme }: { theme: any }) => theme.colors.bg.primary};
  justify-content: center;
  align-items: center;
  shadow-color: ${({ theme }: { theme: any }) => theme.colors.shadow.primary};
  shadow-offset: 0px 0px;
  shadow-opacity: 0.25;
  shadow-radius: 5px;
  elevation: 2;
`;
