import { Image, ScrollView, Text, View } from "react-native";
import { Link, router } from "expo-router";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import colors from "@/constants/colors";
import images from "@/assets/images";
import { SafeAreaView } from "react-native-safe-area-context";
import { PrimaryButton, SecondaryButton } from "@/components/UI/Button";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Home() {
  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full h-full px-4 justify-center items-center bg-primary-50">
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
              onPress={() => router.push("./sign-up")}
              beforeElement={
                <MaterialIcons name="email" size={24} color="#f8fafc" />
              }
            >
              Continue with Email
            </PrimaryButton>
            <SecondaryButton
              color="#EA4335"
              onPress={() => console.log("Google")}
              beforeElement={
                <Image source={images.google_icon} className="h-5 w-5" />
              }
            >
              Continue with Google
            </SecondaryButton>
            <SecondaryButton
              color="#1877F2"
              onPress={() => console.log("Facebook")}
              beforeElement={
                <Image source={images.facebook_icon} className="h-5 w-5" />
              }
            >
              Continue with Google
            </SecondaryButton>
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
