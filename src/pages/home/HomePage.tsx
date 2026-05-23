import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  House,
  Inbox,
  Newspaper,
  Settings,
  type LucideIcon,
} from "lucide-react-native";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

import type { AuthStackParamList } from "../../types/auth";

type Props = NativeStackScreenProps<AuthStackParamList, "Home">;
type TabKey = "Home" | "Posts" | "Inbox" | "Settings";

type TabItem = {
  key: TabKey;
  label: TabKey;
  icon: LucideIcon;
};

const tabs: TabItem[] = [
  { key: "Home", label: "Home", icon: House },
  { key: "Posts", label: "Posts", icon: Newspaper },
  { key: "Inbox", label: "Inbox", icon: Inbox },
  { key: "Settings", label: "Settings", icon: Settings },
];

const tabCopy: Record<TabKey, { title: string; subtitle: string }> = {
  Home: {
    title: "Welcome back",
    subtitle: "Keep sharing small actions that create a big impact.",
  },
  Posts: {
    title: "Recent posts",
    subtitle: "Discover kindness stories and uplifting updates from the community.",
  },
  Inbox: {
    title: "Your inbox",
    subtitle: "Stay close to new messages, thank-yous, and community replies.",
  },
  Settings: {
    title: "Account settings",
    subtitle: "Personalize your profile, notifications, and preferences.",
  },
};

export default function HomePage({ navigation }: Props) {
  const [activeTab, setActiveTab] = useState<TabKey>("Home");
  const insets = useSafeAreaInsets();

  const currentTab = tabCopy[activeTab];
  const tabBarHeight = 96;

  return (
    <SafeAreaView className="flex-1 bg-[#FFF7F0]" edges={["top", "left", "right"]}>
      <StatusBar style="dark" />

      <View className="flex-1">
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: tabBarHeight + insets.bottom + 32,
          }}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        >
          <View className="px-6 pt-4">
            <View className="flex-row items-center justify-between">
              <View>
                <Text className="text-sm font-medium uppercase tracking-[1px] text-[#F97316]">
                  Spread Kindness
                </Text>
                <Text className="mt-2 text-3xl font-bold text-slate-900">
                  {currentTab.title}
                </Text>
              </View>

              <TouchableOpacity
                className="rounded-full bg-white px-4 py-2"
                onPress={() => navigation.goBack()}
              >
                <Text className="text-sm font-semibold text-slate-700">
                  Log out
                </Text>
              </TouchableOpacity>
            </View>

            <Text className="mt-3 max-w-[320px] text-base leading-6 text-slate-500">
              {currentTab.subtitle}
            </Text>

            <View className="mt-8 rounded-[28px] bg-[#FF6B6B] px-6 py-7">
              <Text className="text-sm font-semibold uppercase tracking-[1px] text-rose-50">
                Daily mission
              </Text>
              <Text className="mt-3 text-3xl font-bold text-white">
                Brighten someone&apos;s day.
              </Text>
              <Text className="mt-3 text-base leading-6 text-rose-50">
                Share a compliment, help a stranger, or post one thoughtful action
                before tonight.
              </Text>

              <View className="mt-6 flex-row gap-3">
                <View className="flex-1 rounded-2xl bg-white/20 px-4 py-4">
                  <Text className="text-2xl font-bold text-white">12</Text>
                  <Text className="mt-1 text-sm text-rose-50">Acts shared</Text>
                </View>
                <View className="flex-1 rounded-2xl bg-white/20 px-4 py-4">
                  <Text className="text-2xl font-bold text-white">89%</Text>
                  <Text className="mt-1 text-sm text-rose-50">Positive energy</Text>
                </View>
              </View>
            </View>

            <View className="mt-8 flex-row items-center justify-between">
              <Text className="text-xl font-bold text-slate-900">
                Community highlights
              </Text>
              <Text className="text-sm font-semibold text-[#FF6B6B]">See all</Text>
            </View>

            <View className="mt-4 gap-4">
              <View className="rounded-[24px] bg-white px-5 py-5">
                <Text className="text-base font-semibold text-slate-900">
                  Coffee paid forward
                </Text>
                <Text className="mt-2 text-sm leading-6 text-slate-500">
                  A member bought coffee for the next person in line and left a
                  note that said, &quot;You matter today.&quot;
                </Text>
              </View>

              <View className="rounded-[24px] bg-white px-5 py-5">
                <Text className="text-base font-semibold text-slate-900">
                  Lunch break clean-up
                </Text>
                <Text className="mt-2 text-sm leading-6 text-slate-500">
                  Someone used their lunch break to clean a local park and inspired
                  three more people to join.
                </Text>
              </View>

              <View className="rounded-[24px] bg-white px-5 py-5">
                <Text className="text-base font-semibold text-slate-900">
                  Kind message of the day
                </Text>
                <Text className="mt-2 text-sm leading-6 text-slate-500">
                  &quot;Your small gesture may be the reason someone keeps going.&quot;
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>

        <View
          className="absolute left-4 right-4 rounded-[28px] border border-white/70 bg-white px-2 py-2 shadow-sm"
          style={{
            bottom: 16 + insets.bottom,
            minHeight: tabBarHeight,
          }}
        >
          <View className="flex-row items-stretch justify-between">
            {tabs.map((tab) => {
              const isActive = tab.key === activeTab;
              const Icon = tab.icon;

              return (
                <TouchableOpacity
                  key={tab.key}
                  className={`mx-1 flex-1 items-center justify-center rounded-[22px] px-2 py-3 ${
                    isActive ? "bg-[#FFF1EA]" : ""
                  }`}
                  onPress={() => setActiveTab(tab.key)}
                >
                  <Icon
                    color={isActive ? "#FF6B6B" : "#94A3B8"}
                    size={22}
                    strokeWidth={2.2}
                  />
                  <Text
                    className={`mt-2 text-xs font-semibold ${
                      isActive ? "text-[#FF6B6B]" : "text-slate-400"
                    }`}
                  >
                    {tab.label}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
