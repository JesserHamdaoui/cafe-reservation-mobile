import { View, Text, TouchableHighlight } from "react-native";
import React from "react";
import colors from "@/constants/colors";

const PrimaryButton = (props: {
  children: string;
  onPress: () => void;
  beforeElement?: React.ReactNode;
  afterElement?: React.ReactNode;
  color?: string;
  className?: string;
}) => {
  return (
    <TouchableHighlight
      underlayColor={colors.primary[600]}
      activeOpacity={0.8}
      onPress={props.onPress}
      className={
        "px-4 py-2 mx-3 my-2 bg-primary-500 rounded border border-primary-500"
      }
    >
      <View
        className={`  flex flex-row items-center justify-center gap-3 pr-2`}
      >
        {props.beforeElement ? props.beforeElement : null}
        <Text className={` text-slate-50`}>{props.children}</Text>
        {props.afterElement ? props.afterElement : null}
      </View>
    </TouchableHighlight>
  );
};

const SecondaryButton = (props: {
  children: string;
  onPress: () => void;
  beforeElement?: React.ReactNode;
  afterElement?: React.ReactNode;
  color?: string;
  className?: string;
}) => {
  return (
    <TouchableHighlight
      underlayColor={colors.primary[600]}
      activeOpacity={0.8}
      onPress={props.onPress}
      className={`px-3 py-2 mx-3 my-2 bg-transparent rounded border border-${
        props.color ? "[" + props.color + "]" : "primary-500"
      } props.className`}
    >
      <View
        className={`  flex flex-row items-center justify-center gap-3 pr-2`}
      >
        {props.beforeElement ? props.beforeElement : null}
        <Text
          className={`text-${
            props.color ? "[" + props.color + "]" : "primary-500"
          }`}
        >
          {props.children}
        </Text>
        {props.afterElement ? props.afterElement : null}
      </View>
    </TouchableHighlight>
  );
};
export { PrimaryButton, SecondaryButton };
