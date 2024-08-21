import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
} from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { useRouter } from "expo-router";
import Input from "./UI/Input";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("This field is required"),
  firstName: Yup.string()
    .required("This field is required")
    .min(3, "Minimum 3 characters")
    .max(20, "Maximum 20 characters")
    .matches(/^[A-Za-z]+$/, "Only alphabets are allowed"),
  lastName: Yup.string()
    .required("This field is required")
    .min(3, "Minimum 3 characters")
    .max(20, "Maximum 20 characters")
    .matches(/^[A-Za-z]+$/, "Only alphabets are allowed"),
  username: Yup.string()
    .required("This field is required")
    .min(3, "Minimum 3 characters")
    .max(20, "Maximum 20 characters"),
  phoneNumber: Yup.string()
    .required("This field is required")
    .matches(/^[2 | 9 | 7 | 4 | 5 | 3]{1}[0-9]{7}$/, "Invalid Phone number"),
  password: Yup.string()
    .required("This field is required")
    .min(8, "Minimum 8 characters")
    .max(20, "Maximum 20 characters"),
  confirmPassword: Yup.string()
    .required("This field is required")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

const SignupForm = () => {
  const router = useRouter();

  return (
    <Formik
      initialValues={{
        email: "",
        firstName: "",
        lastName: "",
        username: "",
        phoneNumber: "",
        password: "",
        confirmPassword: "",
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
        <View className="flex justify-center items-center w-full">
          <Input
            label="Email"
            type="email"
            onChangeText={handleChange("email")}
            onBlur={handleBlur("email")}
            value={values.email}
            error={touched.email && errors.email}
          />
          <View className="flex flex-row w-full justify-between">
            <Input
              label="First Name"
              type="text"
              onChangeText={handleChange("firstName")}
              onBlur={handleBlur("firstName")}
              value={values.firstName}
              error={touched.firstName && errors.firstName}
              AdditionalClassName="flex-1 mr-1"
            />
            <Input
              label="Last Name"
              type="text"
              onChangeText={handleChange("lastName")}
              onBlur={handleBlur("lastName")}
              value={values.lastName}
              error={touched.lastName && errors.lastName}
              AdditionalClassName="flex-1 ml-1"
            />
          </View>
          <Input
            label="Username"
            type="text"
            onChangeText={handleChange("username")}
            onBlur={handleBlur("username")}
            value={values.username}
            error={touched.username && errors.username}
          />
          <Input
            label="Phone Number"
            type="tel"
            onChangeText={handleChange("phoneNumber")}
            onBlur={handleBlur("phoneNumber")}
            value={values.phoneNumber}
            error={touched.phoneNumber && errors.phoneNumber}
          />
          <Input
            label="Password"
            type="password"
            onChangeText={handleChange("password")}
            onBlur={handleBlur("password")}
            value={values.password}
            error={touched.password && errors.password}
            secureTextEntry
          />
          <Input
            label="Confirm Password"
            type="password"
            onChangeText={handleChange("confirmPassword")}
            onBlur={handleBlur("confirmPassword")}
            value={values.confirmPassword}
            error={touched.confirmPassword && errors.confirmPassword}
            secureTextEntry
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
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => router.replace("/sign-in")}>
              <Text className="text-primary-500 font-1-medium underline">
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default SignupForm;
