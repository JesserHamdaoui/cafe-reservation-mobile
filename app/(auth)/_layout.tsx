import React from "react";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="sign-up" options={{ headerTitle: "" }} />
      <Stack.Screen name="sign-in" options={{ headerTitle: "" }} />
    </Stack>
  );
};

export default AuthLayout;
