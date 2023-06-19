import { View, Text, StyleSheet, Image } from "react-native";

function Empty() {
  return (
    <View style={styles.block}>
      <Image
        style={styles.image}
        source={require("../assets/images/young_and_happy.png")}
        resizeMode="contain"
      />
      <Text style={styles.description}>야호! 할 일이 없습니닷!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 240,
    height: 179,
    marginBottom: 16,
  },
  description: {
    fontSize: 24,
    color: "#9e9e9e",
  },
});

export default Empty;
