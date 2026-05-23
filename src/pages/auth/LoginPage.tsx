import React from "react";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../../assets/spread-kindness-logo-image.png";
import type { AuthStackParamList } from "../../types/auth";

type Props = NativeStackScreenProps<AuthStackParamList, "Login">;

export default function LoginPage({ navigation }: Props) {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 justify-between px-6 pt-6 pb-8">
        <View>
          <View className="mt-6 items-center">
            <View className="h-24 w-full flex flex-row items-center justify-center ">
              <Image source={logo} className="h-24 w-24" />
            </View>

            <Text className="mt-4 text-3xl font-bold text-slate-900">
              Spread Kindness
            </Text>

            <Text className="mt-2 px-6 text-center text-lg leading-6 text-slate-400">
              Small acts,{"\n"}can make a{" "}
              <Text className=" text-slate-900">Big Impact</Text>
            </Text>
          </View>

          {/* Form */}
          <View className="mt-10">
            {/* Email */}
            <View>
              <Text className="mb-2 text-sm font-medium text-slate-500">
                Email
              </Text>
              <TextInput
                placeholder="you@example.com"
                placeholderTextColor="#94A3B8"
                keyboardType="email-address"
                autoCapitalize="none"
                className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-900"
              />
            </View>

            {/* Password */}
            <View className="mt-4">
              <Text className="mb-2 text-sm font-medium text-slate-500">
                Password
              </Text>
              <TextInput
                placeholder="••••••••"
                placeholderTextColor="#94A3B8"
                secureTextEntry
                className="rounded-2xl border border-slate-200 bg-white px-4 py-4 text-slate-900"
              />
            </View>

            {/* Forgot Password */}
            <TouchableOpacity className="mt-3 self-end">
              <Text className="text-sm font-medium text-rose-400">
                Forgot password?
              </Text>
            </TouchableOpacity>
          </View>
          <View className="">
            <Text className="mt-14 text-center text-sm text-slate-500">
              Being kind is free, spread it everywhere!{"\n"}
              Join us in making the world a better place, one act of kindness at
              a time.
            </Text>
          </View>
        </View>

        {/* Bottom Section */}
        <View>
          {/* Sign In Button */}
          <TouchableOpacity
            className="rounded-2xl bg-[#FF6B6B] py-4 active:opacity-90"
            onPress={() => navigation.navigate("Home")}
          >
            <Text className="text-center text-base font-semibold text-white">
              Sign In
            </Text>
          </TouchableOpacity>

          {/* Register Link */}
          <View className="mt-6 flex-row justify-center">
            <Text className="text-slate-400">Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
              <Text className="font-semibold text-[#FF6B6B]">Create one</Text>
            </TouchableOpacity>
          </View>

          {/* Terms */}
          <Text className="mt-6 px-6 text-center text-xs leading-5 text-slate-500">
            By continuing, you agree to our Terms of Service and Privacy Policy.
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
