import './global.css';

import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-950 px-6">
      <View className="w-full max-w-sm rounded-3xl border border-white/10 bg-slate-900 px-6 py-8">
        <Text className="text-center text-xs font-semibold uppercase tracking-[3px] text-cyan-400">
          Spread Kindness
        </Text>
        <Text className="mt-3 text-center text-3xl font-bold text-white">
          NativeWind ya esta funcionando
        </Text>
        <Text className="mt-4 text-center text-base leading-6 text-slate-300">
          Ahora podes usar clases tipo Tailwind con React Native, por ejemplo
          `bg-slate-900`, `rounded-3xl` y `text-cyan-400`.
        </Text>
        <View className="mt-6 rounded-2xl bg-cyan-400 px-4 py-3">
          <Text className="text-center text-sm font-semibold text-slate-950">
            Edita App.tsx y proba className
          </Text>
        </View>
      </View>
      <StatusBar style="light" />
    </View>
  );
}
