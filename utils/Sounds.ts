import { Audio } from "expo-av";

enum Sounds {
  NEXT = require("app/assets/sounds/nextbeep.mp3"),
  FIRST = require("app/assets/sounds/firstbeep.mp3"),
}

const firstSound = new Audio.Sound();
const nextSound = new Audio.Sound();

async function loadSound() {
  // Loading Sound
  try {
    await firstSound.loadAsync(Sounds.FIRST);
    await nextSound.loadAsync(Sounds.NEXT);
  } catch (error) {
    console.log(error);
  }
}

loadSound();

async function playFirstSound() {
  // Playing Sound
  if (firstSound) {
    await firstSound.setPositionAsync(0);
    await firstSound.playAsync();
  }
}

async function playNextSound() {
  // Playing Sound
  if (nextSound) {
    await nextSound.setPositionAsync(0);
    await nextSound.playAsync();
  }
}


// useEffect(() => {
//   return sound
//     ? () => {
//         sound.unloadAsync();
//       }
//     : undefined;
// }, [sound]);


export default { playFirstSound, playNextSound }