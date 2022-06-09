import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { HomeScreen } from "../../features/home/home.screen";
import { DetailScreen } from "../../features/detail/detail.screen";
import { NewProductScreen } from "../../features/new-product/new-product.screen";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { ProductsContextProvider } from "../../services/products/products.context";
import { CategoriesContextProvider } from "../../services/categories/categories.context";

const Stack = createNativeStackNavigator();

export const AppNavigator = () => (
  <SafeAreaProvider>
    <CategoriesContextProvider>
      <ProductsContextProvider>
        {/* @ts-ignore */}
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="NewProduct" component={NewProductScreen} />
          <Stack.Screen name="Detail" component={DetailScreen} />
        </Stack.Navigator>
      </ProductsContextProvider>
    </CategoriesContextProvider>
  </SafeAreaProvider>
);
