import { StyleSheet, Text, View } from "react-native";

import { DateHead, AddTodo, Empty } from "./components";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.block} edges={["bottom"]}>
        <DateHead date={new Date()} />
        <Empty />
        <AddTodo />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
  },
});
