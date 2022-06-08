import styled from "styled-components/native";

const defaultTextStyles = (theme: any) => `
    font-family: ${theme.fonts.gilroy};
    font-weight: ${theme.fontWeights.regular};
    color: ${theme.colors.text.primary};
    flex-wrap: wrap;
    margin-top: 0px;
    margin-bottom: 0px;
`;

const body = (theme: any) => `
    font-size:${theme.fontSizes.body};
`;

const hint = (theme: any) => `
    font-size: ${theme.fontSizes.caption}
    color: ${theme.colors.text.hint};
`;

const error = (theme: any) => `
    color: ${theme.colors.text.error};
`;

const white = (theme: any) => `
    color: ${theme.colors.text.white};
    font-family: ${theme.fonts.gilroyExtraBold};
    font-size: ${theme.fontSizes.title};
`;

const black = (theme: any) => `
    color: ${theme.colors.text.black};
    font-family: ${theme.fonts.gilroyExtraBold};
    font-size: ${theme.fontSizes.title};
`;

const caption = (theme: any) => `
    font-size: ${theme.fontSizes.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const label = (theme: any) => `
    font-size: ${theme.fontSizes.button};
    font-weight: ${theme.fontWeights.medium};
`;

const brand = (theme: any) => `
    color: ${theme.colors.brand[0]};
`;

const title = (theme: any) => `  
    margin-bottom: 5px;
    font-size: ${theme.fontSizes.h5};
    font-family: ${theme.fonts.gilroyExtraBold};
    `;

const header = (theme: any) => `
    font-size: ${theme.fontSizes.title};
    text-align: center;`;

const centered = (theme: any) => `
    align-self: center;
    text-align: center;
    `;

const h4 = (theme: any) => `
    font-size: ${theme.fontSizes.h4};
    align-self: center;
    `;

const h3 = (theme: any) => `
    font-size: ${theme.fontSizes.h3};
    align-self: center;
    `;

const variants = {
  brand,
  body,
  label,
  caption,
  error,
  hint,
  white,
  black,
  title,
  header,
  centered,
  h4,
  h3,
};

// Özelleştirebileceğimiz kendi text componentimiz.
export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }: { variant: string; theme: any }) =>
    //@ts-ignore
    variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
