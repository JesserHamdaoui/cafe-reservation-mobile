import colors from "@/constants/colors";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function favorites() {
  return (
    <View className="flex-1 justify-center items-center bg-primary-50">
      <Text className="font-1-medium text-xl text-basic">
        This is your favorite Cafes.
      </Text>
      <Link href="/" className="text-primary-500  font-1">
        Go back{" "}
        <FontAwesome6
          name="arrow-up-right-from-square"
          className="text-sm"
          color={colors.primary[500]}
        />
      </Link>
    </View>
  );
}
