import { View, Button, Text } from "react-native";
import { SafeArea, MainContainer } from "../components/main-styles";

export const DetailScreen = ({ navigation }: { navigation: any }) => {
  return (
    <MainContainer>
      <Text>Detail</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </MainContainer>
  );
};
