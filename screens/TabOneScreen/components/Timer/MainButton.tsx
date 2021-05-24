import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "../../../../components/Button/Button";
import { View } from "../../../../components/Themed";

interface MainButtonProps {
  onPress: () => void;
}

export const MainButton: React.FC<MainButtonProps> = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Button text={"Timer test button"} onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
  },
});
