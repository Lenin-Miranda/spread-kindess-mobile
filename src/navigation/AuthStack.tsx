import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginPage from "../pages/auth/LoginPage";
import Register from "../pages/auth/Register";
import HomePage from "../pages/home/HomePage";
import type { AuthStackParamList } from "../types/auth";

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#020617" },
      }}
    >
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Home" component={HomePage} />
    </Stack.Navigator>
  );
}
