import './src/lib/dayjs';

import { StatusBar } from "react-native";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_800ExtraBold,
} from "@expo-google-fonts/inter";

import { Routes } from './src/routes';
import { Loading } from "./src/components/Loading";

export default function App() {
  const [fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
  });

  if (!fontLoaded) return <Loading />;

  return (
    <>
      <Routes/>
      <StatusBar translucent barStyle="light-content" backgroundColor="transparent"/>
    </>
  );
}
