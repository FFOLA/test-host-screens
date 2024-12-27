import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';

import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

import {
  PublicSans_100Thin,
  PublicSans_200ExtraLight,
  PublicSans_300Light,
  PublicSans_400Regular,
  PublicSans_500Medium,
  PublicSans_600SemiBold,
  PublicSans_700Bold,
  PublicSans_800ExtraBold,
  PublicSans_900Black,
  PublicSans_100Thin_Italic,
  PublicSans_200ExtraLight_Italic,
  PublicSans_300Light_Italic,
  PublicSans_400Regular_Italic,
  PublicSans_500Medium_Italic,
  PublicSans_600SemiBold_Italic,
  PublicSans_700Bold_Italic,
  PublicSans_800ExtraBold_Italic,
  PublicSans_900Black_Italic,
} from '@expo-google-fonts/public-sans';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    PublicSans_100Thin,
    PublicSans_200ExtraLight,
    PublicSans_300Light,
    PublicSans_400Regular,
    PublicSans_500Medium,
    PublicSans_600SemiBold,
    PublicSans_700Bold,
    PublicSans_800ExtraBold,
    PublicSans_900Black,
    PublicSans_100Thin_Italic,
    PublicSans_200ExtraLight_Italic,
    PublicSans_300Light_Italic,
    PublicSans_400Regular_Italic,
    PublicSans_500Medium_Italic,
    PublicSans_600SemiBold_Italic,
    PublicSans_700Bold_Italic,
    PublicSans_800ExtraBold_Italic,
    PublicSans_900Black_Italic,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ headerShown: false }} />
        <StatusBar style="auto" />
      </ThemeProvider>

    </Provider>
  );
}
