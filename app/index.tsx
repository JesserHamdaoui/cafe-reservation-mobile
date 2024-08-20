import { Text, View } from "react-native";
import { Link } from "expo-router";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

export default function Home() {
  return (
    <View className="flex justify-center items-center h-4/5">
      <Text className="font-1-medium">Ahla Wasahla.</Text>
      <Link href="/favorites" className="text-blue-500 underline font-1">
        Go to Fav{" "}
        <FontAwesome6
          name="arrow-up-right-from-square"
          className="text-sm"
          color="#3b82f6"
        />
      </Link>
    </View>
  );
}
