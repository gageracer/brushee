import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { View } from "../../../../components/Themed";
import { setTimer, stopTimer } from "../../../../hooks/useTimer";
import { MainButton } from "./MainButton";
import { TimerText } from "./TimerText";
import Sounds from 'app/utils/Sounds'

export const Timer: React.FC = () => {
  const [time, setTime] = useState<number>(5);
  const [isTimeRunning, setIsTimeRunning] = useState<boolean>(false);

  const handleTimer = () => {
    if (isTimeRunning) return;
    Sounds.playSoundFromStart(Sounds.Name.FIRST)
    setIsTimeRunning(true);
    let currentTime = time;
    setTimer(() => {
      setTime(currentTime - 1);
      currentTime = currentTime - 1;
    });
  };

  useEffect(() => {
    if (time === -1) {
      Sounds.playSoundFromStart(Sounds.Name.NEXT)
      stopTimer();
      setTime(5);
      setIsTimeRunning(false);
      
    }
  }, [time]);

  return (
    <View style={styles.body}>
      <TimerText text={`${time}`} />
      <MainButton onPress={handleTimer} />
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
