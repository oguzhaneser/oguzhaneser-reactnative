import { Text, Button } from "react-native";
import { MainContainer, SafeArea } from "../components/main-styles";

export const NewProductScreen = ({ navigation }: { navigation: any }) => {
  return (
    <SafeArea>
      <MainContainer>
        <Text>New Products</Text>
        <Button title="Go Back" onPress={() => navigation.goBack()} />
        <Button
          title="Go to Detail"
          onPress={() => navigation.navigate("Detail")}
        />
      </MainContainer>
    </SafeArea>
  );
};
