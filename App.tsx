import { useState, useEffect, useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";

import { theme } from "./src/infrastructure/theme";

import { ThemeProvider } from "styled-components/native";

import { AppNavigator } from "./src/infrastructure/navigation/app.navigator";

import { ProductsProvider } from "./src/services/products/products.context";

const Stack = createNativeStackNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible while we fetch resources
        await SplashScreen.preventAutoHideAsync();
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          gilroy: require("./assets/fonts/Gilroy-Regular.ttf"),
          "gilroy-extrabold": require("./assets/fonts/Gilroy-ExtraBold.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer onReady={onLayoutRootView}>
          <AppNavigator />
        </NavigationContainer>
      </ThemeProvider>
      <StatusBar style="auto" />
    </>
  );
}
