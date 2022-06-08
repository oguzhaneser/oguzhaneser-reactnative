import { CardContainer, CardBackground } from "./product-card.styles";
import { Image } from "react-native";
import { Text } from "../typography/text.component";

export const ProductCard = ({
  product,
  onPress,
}: {
  product?: any;
  onPress?: any;
}) => {
  const { name } = product;

  return (
    <CardContainer onPress={onPress}>
      <CardBackground>
        {/* <Image
        source={{
          uri: product.image,
        }}
        style={{
          width: "100%",
          height: "100%",
          resizeMode: "cover",
        }}
      /> */}
        <Text variant="title">{name}</Text>
      </CardBackground>
    </CardContainer>
  );
};
