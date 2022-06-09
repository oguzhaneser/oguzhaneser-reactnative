import { useState, useContext, useEffect } from "react";
import { ActivityIndicator, ScrollView } from "react-native";

import { Text } from "../../components/typography/text.component";
import { FadeInView } from "../../components/animations/fade.animation";
import {
  SafeArea,
  CenteredContainer,
  RowContainer,
} from "../../components/main-styles";
import {
  ImageContainer,
  Image,
  DetailsContainer,
  Title,
  Price,
  Description,
} from "./detail.styles";

import { ProductsContext } from "../../services/products/products.context";

export const DetailScreen = ({ route }: { route: any }) => {
  const { product, productLoading, productError, getProductById } =
    useContext(ProductsContext);

  useEffect(() => {
    getProductById(route.params.productId);
  }, []);

  return (
    <SafeArea>
      {productLoading ? (
        <CenteredContainer>
          <ActivityIndicator size="large" />
        </CenteredContainer>
      ) : product ? (
        <FadeInView>
          <ImageContainer>
            <Image
              source={{
                // @ts-ignore
                uri: `${product.avatar}`,
              }}
            />
          </ImageContainer>

          <DetailsContainer>
            <RowContainer>
              {/* @ts-ignore */}
              <Title variant="body">{product.name}</Title>
              {/* @ts-ignore */}
              <Price variant="body">{`$${product.price}`}</Price>
            </RowContainer>

            <ScrollView>
              {/* @ts-ignore */}
              <Description variant="body">{product.description}</Description>
            </ScrollView>
          </DetailsContainer>
        </FadeInView>
      ) : (
        <CenteredContainer>
          <Text variant="title">
            {/* @ts-ignore */}
            {productError && productError.message
              ? // @ts-ignore
                productError.message
              : "Unexpected Error Happened."}
          </Text>
        </CenteredContainer>
      )}
    </SafeArea>
  );
};
