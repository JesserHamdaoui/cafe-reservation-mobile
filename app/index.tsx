import { Image, ScrollView, Text, View } from "react-native";
import { Link, router } from "expo-router";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import colors from "@/constants/colors";
import images from "@/assets/images";
import { SafeAreaView } from "react-native-safe-area-context";
import { PrimaryButton } from "@/components/UI/Button";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Home() {
  return (
    <SafeAreaView className=" bg-primary-50">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full px-4 justify-center items-center ">
          <Text className="font-1-medium text-3xl text-primary-800">
            Welcome to Cafe App.
          </Text>
          <Text className="font-1 text-xl text-primary-400">
            Find your favorite cafe.
          </Text>
          <Image
            source={images.coffee_illustration}
            className="w-[350px] h-[350px] -translate-x-1 -my-16"
            resizeMode="contain"
          />
          <Text className="font-1 text-primary-400 text-center px-3 mb-10">
            Lorem ipsum dolor sit amet consectetur elit anb, adipisicing .
            Quaerat modi itaque hic dolore quia amet esse, quidem ad maiores.
          </Text>
          <View className="flex flex-col items-center justify-center gap-5">
            <PrimaryButton
              onPress={() => router.push("./(auth)/sign-up")}
              beforeElement={
                <MaterialIcons name="email" size={24} color="#f8fafc" />
              }
            >
              Continue with Email
            </PrimaryButton>
            <Link
              href="./(tabs)/favorites"
              className="text-primary-500 font-1 pr-3"
            >
              Learn More{"  "}
              <FontAwesome6
                name="arrow-up-right-from-square"
                className="text-sm"
                color={colors.primary[500]}
              />
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
