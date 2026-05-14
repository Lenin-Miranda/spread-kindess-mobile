import React from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import type { AuthStackParamList } from "../../types/auth";

type Props = NativeStackScreenProps<AuthStackParamList, "Register">;

export default function Register({ navigation }: Props) {

  return (
    <SafeAreaView className="flex-1 bg-slate-950">
      <View className="flex-1 justify-center px-6">
        <Text className="text-center text-3xl font-bold text-white">
          Create your account
        </Text>
        <Text className="mt-3 text-center text-base leading-6 text-slate-400">
          This is a placeholder register screen so the auth flow can navigate
          correctly.
        </Text>
        <TouchableOpacity
          className="mt-8 rounded-2xl bg-rose-500 py-4"
          onPress={() => navigation.goBack()}
        >
          <Text className="text-center text-base font-semibold text-white">
            Back to login
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
