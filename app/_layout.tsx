import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

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
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
