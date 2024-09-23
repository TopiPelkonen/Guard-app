import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import SignInScreen from "../screens/SignInScreen";
import RegisterScreen from "../screens/RegisterScreen";

const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Koti">
      <Stack.Screen name="Koti" component={HomeScreen} />
      <Stack.Screen name="Kirjaudu" component={SignInScreen} />
      <Stack.Screen name="Rekisteröi" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
