import React from "react";
import { StyleSheet } from "react-native";
import { MonoText } from "../StyledText";
import { PrimaryView } from "../Themed";
import commonStyles from "../../constants/CommonStyles";
import { TouchableHighlight } from "react-native-gesture-handler";

interface ButtonProps {
  text: string;
  onPress?: () => void;
}

export const Button: React.FC<ButtonProps> = ({ text, onPress }) => {
  return (
    <PrimaryView style={styles.container}>
      <TouchableHighlight onPress={onPress}>
        <MonoText style={styles.buttonText}>{text}</MonoText>
      </TouchableHighlight>
    </PrimaryView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    borderRadius: 8,
  },
  buttonText: {
    textAlign: "center",
    paddingVertical: 8,
    fontSize: commonStyles.buttonText,
  },
});
