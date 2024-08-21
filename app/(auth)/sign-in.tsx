import { View, Text } from "react-native";
import React from "react";
import SignInForm from "@/components/SignInForm";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native-gesture-handler";

const SignIn = () => {
  return (
    <SafeAreaView className=" bg-primary-50">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="pt-10 px-10 flex items-center h-full">
          <View className="">
            <Text className="font-1-semibold text-3xl text-primary-700 text-center">
              Sign In
            </Text>
            <Text className="font-1 text-primary-400 text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio ipsa?
            </Text>
          </View>
          <SignInForm />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
