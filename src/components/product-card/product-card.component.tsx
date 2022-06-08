import {
  CardContainer,
  CardBackground,
  ImageContainer,
  TitleContainer,
  ProductImage,
} from "./product-card.styles";
import { Image } from "react-native";
import { Text } from "../typography/text.component";
import { FadeInView } from "../animations/fade.animation";
import { CustomIcon, RowContainer } from "../main-styles";

export const ProductCard = ({
  product,
  onPress,
}: {
  product?: any;
  onPress?: any;
}) => {
  const { name, price } = product;

  return (
    <CardContainer onPress={onPress}>
      <CardBackground>
        <FadeInView>
          <ImageContainer>
            <ProductImage source={{ uri: product.avatar }} />
          </ImageContainer>
          <TitleContainer>
            <Text variant="white">{name}</Text>
            <RowContainer>
              <Text variant="white">{`$${price}`}</Text>
              <CustomIcon
                iconName="pen"
                iconLbr="FontAwesome5"
                size={14}
                color="#FFFFFF"
              />
            </RowContainer>
          </TitleContainer>
        </FadeInView>
      </CardBackground>
    </CardContainer>
  );
};
