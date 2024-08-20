import { View, Text, TouchableHighlight } from "react-native";
import React from "react";
import colors from "@/constants/colors";

const PrimaryButton = (props: {
  children: string;
  onPress: () => void;
  beforeElement?: React.ReactNode;
  afterElement?: React.ReactNode;
  color?: string;
}) => {
  return (
    <TouchableHighlight
      underlayColor={colors.primary[600]}
      activeOpacity={0.8}
      onPress={props.onPress}
      className="px-3 py-2 mx-3 my-2 bg-primary-500 rounded"
    >
      <View className={`  flex flex-row items-center justify-center gap-3 `}>
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
}) => {
  return (
    <TouchableHighlight onPress={props.onPress}>
      <View
        className={`px-2 py-1 rounded flex flex-col gap-3 border-${
          props.color ? props.color : "primary-500"
        } bg-transparent border-[1px]`}
      >
        {props.beforeElement ? props.beforeElement : null}
        <Text className={` text-${props.color ? props.color : "primary-500"}`}>
          {props.children}
        </Text>
        {props.afterElement ? props.afterElement : null}
      </View>
    </TouchableHighlight>
  );
};

export { PrimaryButton, SecondaryButton };
