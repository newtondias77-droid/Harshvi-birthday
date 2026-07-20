const BASE = import.meta.env.BASE_URL;
const tracks = {
  ironman: {
    name: "Iron Man",
    src: `${BASE}audio/marvel/ironman.mp3`,
    startAt: 30,
  },
  captain: {
  name: "Captain America",
  src: `${BASE}audio/marvel/captain.mp3`,
  startAt: 25,
},
thor: {
  name: "Thor",
  src: `${BASE}audio/marvel/thor.mp3`,
  startAt: 20,
},
spiderman: {
  name: "spiderman",
  src: `${BASE}audio/marvel/spiderman.mp3`,
  startAt: 20,
},
miles: {
  name: "Miles Morales",
  src: `${BASE}audio/marvel/miles.mp3`,
  startAt: 20,
},
strange: {
  name: "Doctor Strange",
  src: `${BASE}audio/marvel/strange.mp3`,
  startAt: 20,
},
wolverine: {
  name: "Wolverine",
  src: `${BASE}audio/marvel/wolverine.mp3`,
  startAt: 25,
},
deadpool: {
  name: "Deadpool",
  src: `${BASE}audio/marvel/deadpool.mp3`,
  startAt: 28,
},
hulk: {
  name: "Hulk",
  src: `${BASE}audio/marvel/hulk.mp3`,
  startAt: 10,
},
widow: {
  name: "Black Widow",
  src: `${BASE}audio/marvel/widow.mp3`,
  startAt: 8,
},
hawkeye: {
  name: "Hawkeye",
  src: `${BASE}audio/marvel/hawkeye.mp3`,
  startAt: 0,
},

loki: {
  name: "Loki",
  src: `${BASE}audio/marvel/loki.mp3`,
  startAt: 0,
},

wanda: {
  name: "Scarlet Witch",
  src: `${BASE}audio/marvel/wanda.mp3`,
  startAt: 4,
},

vision: {
  name: "Vision",
  src: `${BASE}audio/marvel/vision.mp3`,
  startAt: 0,
},

falcon: {
  name: "Falcon",
  src: `${BASE}audio/marvel/falcon.mp3`,
  startAt: 10,
},

captainmarvel: {
  name: "Captain Marvel",
  src: `${BASE}audio/marvel/captainmarvel.mp3`,
  startAt: 5,
},

panther: {
  name: "Black Panther",
  src: `${BASE}audio/marvel/panther.mp3`,
  startAt: 6,
},

groot: {
  name: "Groot",
  src: `${BASE}audio/marvel/groot.mp3`,
  startAt: 3,
},

starlord: {
  name: "Star-Lord",
  src: `${BASE}audio/marvel/starlord.mp3`,
  startAt: 0,
},

thanos: {
  name: "Thanos",
  src: `${BASE}audio/marvel/thanos.mp3`,
  startAt: 0,
},
barbie: {
  name: "Barbie",
  src: `${BASE}audio/barbie/barbie.mp3`,
  startAt: 10,
},
jasmine: {
  name: "Princess Jasmine",
  src: `${BASE}audio/princess/jasmine.mp3`,
  startAt: 24,
},

elsa: {
  name: "Elsa",
  src: `${BASE}audio/princess/elsa.mp3`,
  startAt: 15,
},

belle: {
  name: "Belle",
  src: `${BASE}audio/princess/belle.mp3`,
  startAt: 15,
},

rapunzel: {
  name: "Rapunzel",
  src: `${BASE}audio/princess/rapunzel.mp3`,
  startAt: 11,
},

cinderella: {
  name: "Cinderella",
  src: `${BASE}audio/princess/cinderella.mp3`,
  startAt: 10,
},

letter: {
  name: "Pirate Letter",
  src: `${BASE}audio/letter/letter.mp3`,
  startAt: 7,
},

fireworks: {
  name: "Fireworks Finale",
  src: `${BASE}audio/fireworks/finale.mp3`,
  startAt: 3,
},
};

let currentAudio = null;
let currentTrackName = null;
let resumeWhenVisible = false;

export function playMusic(trackName) {
  const track = tracks[trackName];

  if (!track) {
    console.error(`Audio track "${trackName}" was not found.`);
    return;
  }

  stopMusic();

  const audio = new Audio(track.src);

  currentAudio = audio;
  currentTrackName = trackName;

  audio.preload = "auto";

  audio.addEventListener(
    "loadedmetadata",
    () => {
      if (currentAudio !== audio) {
        return;
      }

      const safeStartTime = Math.min(
        track.startAt,
        Math.max(0, audio.duration - 0.1)
      );

      audio.currentTime = safeStartTime;

      audio.play().catch((error) => {
        console.error(`Could not play "${track.name}":`, error);
      });
    },
    { once: true }
  );

  audio.addEventListener("ended", () => {
    if (currentAudio !== audio || currentTrackName !== trackName) {
      return;
    }

    audio.currentTime = Math.min(
      track.startAt,
      Math.max(0, audio.duration - 0.1)
    );

    audio.play().catch((error) => {
      console.error(`Could not restart "${track.name}":`, error);
    });
  });

  audio.addEventListener("error", () => {
    console.error(`Audio file could not be loaded: ${track.src}`);
  });
}

export function stopMusic() {
  resumeWhenVisible = false;

  if (!currentAudio) {
    return;
  }

  currentAudio.pause();
  currentAudio.removeAttribute("src");
  currentAudio.load();

  currentAudio = null;
  currentTrackName = null;
}
document.addEventListener("visibilitychange", () => {
  if (!currentAudio) {
    return;
  }

  if (document.hidden) {
    resumeWhenVisible = !currentAudio.paused;
    currentAudio.pause();
    return;
  }

  if (resumeWhenVisible) {
    currentAudio.play().catch((error) => {
      console.error("Could not resume the music:", error);
    });

    resumeWhenVisible = false;
  }
});