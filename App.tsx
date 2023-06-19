import { StyleSheet, Text, View } from "react-native";

import { DateHead } from "./components";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <SafeAreaView edges={["bottom"]}>
        <DateHead date={new Date()} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
