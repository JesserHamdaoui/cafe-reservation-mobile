import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import React from "react";
import * as Yup from "yup";
import { Formik } from "formik";
import Input from "./UI/Input"; // Assuming you have a custom Input component
import { router } from "expo-router";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("This field is required")
    .email("Invalid email address"),
  password: Yup.string()
    .required("This field is required")
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must be at most 20 characters"),
});

const SignInForm = () => {
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View className="w-full flex items-center">
          <Input
            label="Email"
            type="email"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            error={touched.email && errors.email}
          />
          <Input
            label="Password"
            type="password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            error={touched.password && errors.password}
            secureTextEntry={true}
          />
          <View className="w-full ">
            <TouchableOpacity
              onPress={(event: GestureResponderEvent) => handleSubmit()}
            >
              <Text className="bg-primary-500 text-primary-50 rounded py-2 text-center font-1">
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row gap-2 items-center">
            <Text className="text-primary-500 font-1">
              You don't have an account?
            </Text>
            <TouchableOpacity onPress={() => router.replace("/sign-up")}>
              <Text className="text-primary-500 font-1-medium underline">
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default SignInForm;
