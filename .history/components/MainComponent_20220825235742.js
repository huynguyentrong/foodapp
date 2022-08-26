import * as React from "react";
import { Button, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import HomeScreen from "../screens/HomeScreen";
import FoodDetailScreen from "../screens/FoodDetailScreen";
import WelcomeScreen from "../screens/WelcomeScreen";

function DetailsScreen({ route }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Details! {route.params.Id}</Text>
    </View>
  );
}

function ProfileStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="profile" component={WelcomeScreen} />
    </SettingsStack.Navigator>
  );
}

function Profile({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}

const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} />
      <HomeStack.Screen name="Details" component={FoodDetailScreen} />
    </HomeStack.Navigator>
  );
}

const SettingsStack = createNativeStackNavigator();

function SettingsStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="Settings" component={SettingsScreen} />
      <SettingsStack.Screen name="Details" component={DetailsScreen} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function MainComponent() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" type="font-awesome" size={size} color={color} />
            ),
          }}
          name="Home"
          component={HomeStackScreen}
        />
        <Tab.Screen
          name="Favorite"
          component={SettingsStackScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon
                name="heart"
                type="font-awesome"
                size={size}
                color={color}
              />
            ),
          }}
        />

        <Tab.Screen
          name="Me"
          component={ProfileStackScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Icon name="user" type="font-awesome" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
