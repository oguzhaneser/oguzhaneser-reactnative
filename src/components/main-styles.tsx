import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
  FontAwesome,
  FontAwesome5,
} from "@expo/vector-icons";

export const MainContainer = styled.View`
  flex: 1;
  padding-horizontal: 10px;
`;

export const RowContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const SafeArea = styled(SafeAreaView).attrs({
  edges: ["top", "right", "left"],
})`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;

export const CustomIcon = styled(
  ({
    iconName,
    iconLbr,
    size,
    color,
  }: {
    iconName: any;
    iconLbr: string;
    size: number;
    color?: string;
  }) =>
    iconLbr == "Ionicons" ? (
      // @ts-ignore
      <Ionicons name={iconName} size={size} color={color} />
    ) : iconLbr == "MaterialCommunityIcons" ? (
      // @ts-ignore
      <MaterialCommunityIcons name={iconName} size={size} color={color} />
    ) : iconLbr == "MaterialIcons" ? (
      // @ts-ignore
      <MaterialIcons name={iconName} size={size} color={color} />
    ) : iconLbr == "FontAwesome" ? (
      // @ts-ignore
      <FontAwesome name={iconName} size={size} color={color} />
    ) : (
      <FontAwesome5 name={iconName} size={size} color={color} />
    )
)`
  z-index: 9;
  position: absolute;
  top: 5px;
  right: 5px;
`;

export const CustomInput = styled.TextInput`
  width: 100%;
  height: 50px;
  padding: 0 16px;
  border-radius: 8px;
  background-color: ${({ theme }: { theme: any }) => theme.colors.bg.primary};
  font-size: 16px;
  color: ${({ theme }: { theme: any }) => theme.colors.text.primary};
  shadow-color: ${({ theme }: { theme: any }) => theme.colors.shadow.primary};
  shadow-offset: 0px 0px;
  shadow-opacity: 0.25;
  shadow-radius: 5px;
  elevation: 2;
`;
