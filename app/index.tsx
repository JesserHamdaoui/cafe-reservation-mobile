import { Text, View } from "react-native";
import { Link } from "expo-router";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import colors from "@/constants/colors";

export default function Home() {
  return (
    <View className="flex-1 justify-center items-center bg-primary-50">
      <Text className="font-1-medium text-basic text-xl">Ahla Wasahla.</Text>
      <Link href="./(tabs)/favorites" className="text-primary-500 font-1">
        Go to Fav{" "}
        <FontAwesome6
          name="arrow-up-right-from-square"
          className="text-sm"
          color={colors.primary[500]}
        />
      </Link>
    </View>
  );
}
