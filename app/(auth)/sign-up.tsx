import { View, Text } from "react-native";
import React from "react";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import SignupForm from "@/components/SignupForm";

const SignUp = () => {
  return (
    <SafeAreaView className=" bg-primary-50">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="pt-10 px-10">
          <View className="">
            <Text className="font-1-semibold text-3xl text-primary-700 text-center">
              Sign Up
            </Text>
            <Text className="font-1 text-primary-400 text-center">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Distinctio ipsa?
            </Text>
          </View>
          <SignupForm />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
