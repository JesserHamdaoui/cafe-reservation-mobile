import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function favorites() {
  return (
    <View className="flex justify-center items-center h-4/5">
      <Text className="font-1-medium">This is your favorite Cafes.</Text>
      <Link href="/" className="text-blue-500 underline font-1">
        Go back{" "}
        <FontAwesome6
          name="arrow-up-right-from-square"
          className="text-sm"
          color="#3b82f6"
        />
      </Link>
    </View>
  );
}
