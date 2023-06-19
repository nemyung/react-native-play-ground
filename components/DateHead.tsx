import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Logger } from "../lib/logger";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type DateHeadProps = {
  date: Date;
};

function DateHead({ date }: DateHeadProps) {
  const inset = useSafeAreaInsets();
  Logger.info(inset);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const formatted = `${year}년 ${month}월 ${day}일`;
  return (
    <>
      <View style={{ height: inset.top, backgroundColor: "#26a69a" }}>
        <StatusBar style="light" />
      </View>
      <View style={styles.block}>
        <Text style={styles.dateText}>{formatted}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  block: {
    padding: 16,
    backgroundColor: "#26a69a",
  },
  dateText: {
    fontSize: 24,
    color: "white",
  },
});

export default DateHead;
