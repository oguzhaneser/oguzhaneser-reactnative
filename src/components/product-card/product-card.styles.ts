import styled from "styled-components/native";
import { Image } from "react-native";

export const CardContainer = styled.TouchableOpacity`
  width: 50%;
  height: 250px;
  padding: 5px;
  border-radius: 10px;
`;

export const CardBackground = styled.View`
  flex: 1;
  border-radius: 10px;
  background-color: #ffffff;
  shadow-color: ${({ theme }: { theme: any }) => theme.colors.shadow.primary};
  shadow-offset: 5px 5px;
  shadow-opacity: 0.3;
  shadow-radius: 5px;
  elevation: 5;
`;

export const ImageContainer = styled.View`
  width: 100%;
  height: 75%;
  padding-vertical: 10px;
  background-color: #ffffff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

export const ProductImage = styled(Image).attrs({
  resizeMode: "contain",
})`
  width: 100%;
  height: 100%;
`;

export const TitleContainer = styled.View`
  width: 100%;
  height: 25%;
  border-radius: 10px;
  padding: 5px 10px;
  background-color: black;
  flex-direction: column;
  justify-content: space-between;
  shadow-color: ${({ theme }: { theme: any }) => theme.colors.shadow.primary};
  shadow-offset: 0px -5px;
  shadow-opacity: 0.7;
  shadow-radius: 15px;
  elevation: 5;
`;
