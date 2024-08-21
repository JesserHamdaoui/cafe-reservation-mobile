import { View, Text, Platform } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";

import { NativeSyntheticEvent, TextInputFocusEventData } from "react-native";

interface InputProps {
  label: string;
  type?: "text" | "email" | "tel" | "password";
  AdditionalClassName?: string;
  onChangeText?: (text: string) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  value?: string;
  error?: string | false;
  secureTextEntry?: true;
}

const Input: React.FC<InputProps> = ({
  label,
  type,
  AdditionalClassName = "w-full",
  onChangeText,
  onBlur,
  value,
  error,
  secureTextEntry,
}) => {
  return (
    <View className={`mb-5 ${AdditionalClassName}`}>
      <Text className="text-primary-700 font-1">{label}</Text>
      <TextInput
        secureTextEntry={secureTextEntry ? secureTextEntry : false}
        textContentType={
          type === "email"
            ? "emailAddress"
            : type === "password"
            ? "password"
            : undefined
        }
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        className={`border ${
          !!error ? "border-red-500" : "border-primary-700"
        } rounded ${Platform.OS === "ios" ? "py-2" : "py-1"} px-2`}
      />
      {error && <Text className="text-red-500 font-1">{error}</Text>}
    </View>
  );
};

export default Input;
