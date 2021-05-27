import { Audio } from "expo-av";
/*
  If you want to add a new sound:
  1. Create a new constant below,
  2. Add a new object reference to Name,
  3. Edit the loadSounds function using loadAsync inside the try and show the sound file location,
*/

// Sound Objects
const firstSound = new Audio.Sound();
const nextSound = new Audio.Sound();

// Sounds Object to refer any Sound  somewhere else
const Name = {
  NEXT : nextSound,
  FIRST : firstSound,
}
async function loadSounds() {
  // Loading Sound
  try {
    await firstSound.loadAsync(require("app/assets/sounds/firstbeep.mp3"));
    await nextSound.loadAsync(require("app/assets/sounds/nextbeep.mp3"));
  } catch (error) {
    console.log(error);
  }
}
loadSounds()

async function playSoundFromStart(sound: Audio.Sound) {
  if(sound){
    // Playing a Sound from start
    if(await sound.setPositionAsync(0))
      await sound.playAsync();
  }
}

export default { Name, playSoundFromStart };