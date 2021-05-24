import React from "react";
import { StyleSheet } from "react-native";
import { MonoText } from "../../../../components/StyledText";
import CommonStyles from "../../../../constants/CommonStyles";

interface TimerTextProps {
  text: string;
}

export const TimerText: React.FC<TimerTextProps> = ({ text }) => {
  return <MonoText style={styles.boldText}>{text}</MonoText>;
};

const styles = StyleSheet.create({
  boldText: {
    fontWeight: "bold",
    fontSize: CommonStyles.timerText,
  },
});
