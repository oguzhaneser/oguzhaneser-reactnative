import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";

//@ts-ignore
export const CardBackground = styled(LinearGradient).attrs({
  colors: ["#FFFFFF", "#FFFFFF"],
  start: { x: 0.5, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  border-radius: 10px;
`;

export const CardContainer = styled.TouchableOpacity`
  width: 50%;
  height: 240px;
  padding: 10px;
`;

export const ImageContainer = styled.View`
  width: 100%;
  height: 75%;
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
  padding: 5px;
  background-color: black;
  flex-direction: column;
  justify-content: space-between;
`;
