import { View, Text } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import colors from "@/constants/colors";

const TabIcon = ({ icon, name, focused }) => {
  return (
    <View className=" items-center">
      <MaterialIcons
        name={icon}
        size={24}
        color={focused ? colors.primary[600] : colors.primary[400]}
      />
      <Text className={`${focused ? "text-primary-600" : "text-primary-400"} `}>
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: colors.primary[50],
            height: 65,
            borderWidth: 2,
            borderColor: colors.primary[200],
            borderRadius: 20,
            position: "absolute",
            bottom: 30,
            width: "90%",
            marginHorizontal: "5%",
            shadowColor: colors.primary[400],
            paddingHorizontal: 10,
            paddingTop: 20,
            paddingBottom: 20,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,

            tabBarIcon: ({ focused }) => (
              <TabIcon icon="home-filled" name="Home" focused={focused} />
            ),
          }}
        />

        <Tabs.Screen
          name="favorites"
          options={{
            title: "Favorites",
            headerShown: false,

            tabBarIcon: ({ focused }) => (
              <TabIcon icon="bookmark" name="Favorites" focused={focused} />
            ),
          }}
        />

        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,

            tabBarIcon: ({ focused }) => (
              <TabIcon icon="person-2" name="Profile" focused={focused} />
            ),
          }}
        />

        <Tabs.Screen
          name="bookings"
          options={{
            title: "Bookings",
            headerShown: false,

            tabBarIcon: ({ focused }) => (
              <TabIcon
                icon="calendar-month"
                name="Bookings"
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
