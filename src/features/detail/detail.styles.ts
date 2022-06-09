import styled from "styled-components/native";
import { Text } from "../../components/typography/text.component";

export const ImageContainer = styled.View`
  flex: 50%;
  overflow: hidden;
  padding-bottom: 50px;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
`;

export const Image = styled.Image.attrs({
  resizeMode: "contain",
})`
  width: 100%;
  height: 100%;
`;

export const DetailsContainer = styled.View`
  flex: 50%;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  padding: 20px;
  background: ${({ theme }: { theme: any }) => theme.colors.bg.secondary};
  shadow-color: ${({ theme }: { theme: any }) => theme.colors.shadow.primary};
  shadow-offset: 0px -5px;
  shadow-opacity: 0.7;
  shadow-radius: 10px;
  elevation: 5;
`;

export const Title = styled(Text)`
  font-size: 20px;
  color: ${({ theme }: { theme: any }) => theme.colors.text.secondary};
  font-family: ${({ theme }: { theme: any }) => theme.fonts.gilroyExtraBold};
`;

export const Price = styled(Text)`
  font-size: 16px;
  color: ${({ theme }: { theme: any }) => theme.colors.text.secondary};
  font-family: ${({ theme }: { theme: any }) => theme.fonts.gilroyExtraBold};
`;

export const Description = styled(Text)`
  font-size: 14px;
  color: ${({ theme }: { theme: any }) => theme.colors.text.secondary};
  font-family: ${({ theme }: { theme: any }) => theme.fonts.gilroy};
  margin-top: 10px;
`;
