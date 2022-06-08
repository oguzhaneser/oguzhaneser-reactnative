import styled from "styled-components/native";
import { LinearGradient } from "expo-linear-gradient";

export const CardBackground = styled(LinearGradient).attrs({
  colors: ["#FFF", "#d6d6d6"],
  start: { x: 0.5, y: 0 },
  end: { x: 1, y: 1 },
})`
  flex: 1;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const CardContainer = styled.TouchableOpacity`
  width: 50%;
  height: 200px;
  padding: 10px;
`;
