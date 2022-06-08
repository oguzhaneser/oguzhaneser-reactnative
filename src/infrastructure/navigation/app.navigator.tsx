import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../../features/home.screen";
import { DetailScreen } from "../../features/detail.screen";
import { NewProductScreen } from "../../features/new-product.screen";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { ProductsContextProvider } from "../../services/products/products.context";

const Stack = createNativeStackNavigator();

export const AppNavigator = () => (
  <SafeAreaProvider>
    <ProductsContextProvider>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="NewProduct" component={NewProductScreen} />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            presentation: "modal",
            animation: "fade_from_bottom",
            headerShown: true,
            title: "Product Detail",
          }}
        />
      </Stack.Navigator>
    </ProductsContextProvider>
  </SafeAreaProvider>
);
