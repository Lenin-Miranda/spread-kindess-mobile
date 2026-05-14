import "./global.css";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import AuthStack from "./src/navigation/AuthStack";

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StatusBar style="light" />
        <AuthStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
