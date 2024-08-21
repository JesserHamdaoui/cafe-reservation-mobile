import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import colors from "@/constants/colors";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    "Rubik-Black": require("./../assets/fonts/Rubik-Black.ttf"),
    "Rubik-Bold": require("./../assets/fonts/Rubik-Bold.ttf"),
    "Rubik-Medium": require("./../assets/fonts/Rubik-Medium.ttf"),
    "Rubik-Regular": require("./../assets/fonts/Rubik-Regular.ttf"),
    "Rubik-Light": require("./../assets/fonts/Rubik-Light.ttf"),
    "Rubik-ExtraBold": require("./../assets/fonts/Rubik-ExtraBold.ttf"),
    "Rubik-SemiBold": require("./../assets/fonts/Rubik-SemiBold.ttf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <>
      <StatusBar style="dark" />
      <GestureHandlerRootView className="flex-1">
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
              headerTitle: "",
              headerTintColor: colors.primary[700],
            }}
          />
          <Stack.Screen name="(tabs)" options={{ headerTitle: "" }} />
          <Stack.Screen
            name="(auth)"
            options={{ headerShown: false, headerTitle: "" }}
          />
        </Stack>
      </GestureHandlerRootView>
    </>
  );
}
