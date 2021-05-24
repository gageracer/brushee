import * as React from "react";
import { StyleSheet } from "react-native";

import { Text, View } from "../../components/Themed";
import { Timer } from "./components/Timer/Timer";

export default function TabOneScreen() {
  const [time, setTime] = React.useState<number>(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <Timer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
