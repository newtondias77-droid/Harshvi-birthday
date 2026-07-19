const tracks = {
  ironman: {
    name: "Iron Man",
    src: "/audio/marvel/ironman.mp3",
    startAt: 30,
  },
  captain: {
  name: "Captain America",
  src: "/audio/marvel/captain.mp3",
  startAt: 25,
},
thor: {
  name: "Thor",
  src: "/audio/marvel/thor.mp3",
  startAt: 20,
},
spiderman: {
  name: "spiderman",
  src: "/audio/marvel/spiderman.mp3",
  startAt: 20,
},
miles: {
  name: "Miles Morales",
  src: "/audio/marvel/miles.mp3",
  startAt: 20,
},
strange: {
  name: "Doctor Strange",
  src: "/audio/marvel/strange.mp3",
  startAt: 20,
},
wolverine: {
  name: "Wolverine",
  src: "/audio/marvel/wolverine.mp3",
  startAt: 25,
},
deadpool: {
  name: "Deadpool",
  src: "/audio/marvel/deadpool.mp3",
  startAt: 28,
},
hulk: {
  name: "Hulk",
  src: "/audio/marvel/hulk.mp3",
  startAt: 25,
},
widow: {
  name: "Black Widow",
  src: "/audio/marvel/widow.mp3",
  startAt: 8,
},
hawkeye: {
  name: "Hawkeye",
  src: "/audio/marvel/hawkeye.mp3",
  startAt: 0,
},

loki: {
  name: "Loki",
  src: "/audio/marvel/loki.mp3",
  startAt: 0,
},

wanda: {
  name: "Scarlet Witch",
  src: "/audio/marvel/wanda.mp3",
  startAt: 4,
},

vision: {
  name: "Vision",
  src: "/audio/marvel/vision.mp3",
  startAt: 0,
},

falcon: {
  name: "Falcon",
  src: "/audio/marvel/falcon.mp3",
  startAt: 10,
},

captainmarvel: {
  name: "Captain Marvel",
  src: "/audio/marvel/captainmarvel.mp3",
  startAt: 5,
},

panther: {
  name: "Black Panther",
  src: "/audio/marvel/panther.mp3",
  startAt: 6,
},

groot: {
  name: "Groot",
  src: "/audio/marvel/groot.mp3",
  startAt: 3,
},

starlord: {
  name: "Star-Lord",
  src: "/audio/marvel/starlord.mp3",
  startAt: 0,
},

thanos: {
  name: "Thanos",
  src: "/audio/marvel/thanos.mp3",
  startAt: 0,
},
barbie: {
  name: "Barbie",
  src: "/audio/barbie/barbie.mp3",
  startAt: 10,
},
jasmine: {
  name: "Princess Jasmine",
  src: "/audio/princess/jasmine.mp3",
  startAt: 24,
},

elsa: {
  name: "Elsa",
  src: "/audio/princess/elsa.mp3",
  startAt: 15,
},

belle: {
  name: "Belle",
  src: "/audio/princess/belle.mp3",
  startAt: 15,
},

rapunzel: {
  name: "Rapunzel",
  src: "/audio/princess/rapunzel.mp3",
  startAt: 11,
},

cinderella: {
  name: "Cinderella",
  src: "/audio/princess/cinderella.mp3",
  startAt: 10,
},

letter: {
  name: "Pirate Letter",
  src: "/audio/letter/letter.mp3",
  startAt: 7,
},

fireworks: {
  name: "Fireworks Finale",
  src: "/audio/fireworks/finale.mp3",
  startAt: 3,
},
};

let currentAudio = null;
let currentTrackName = null;

export function playMusic(trackName) {
  const track = tracks[trackName];

  if (!track) {
    console.error(`Audio track "${trackName}" was not found.`);
    return;
  }

  stopMusic();

  currentTrackName = trackName;
  currentAudio = new Audio(track.src);
  currentAudio.preload = "auto";

  currentAudio.addEventListener(
    "loadedmetadata",
    () => {
      currentAudio.currentTime = track.startAt;

      currentAudio.play().catch((error) => {
        console.error("Audio could not play:", error);
      });
    },
    { once: true }
  );

  currentAudio.addEventListener("ended", () => {
    if (!currentAudio || currentTrackName !== trackName) {
      return;
    }

    currentAudio.currentTime = track.startAt;

    currentAudio.play().catch((error) => {
      console.error("Audio could not restart:", error);
    });
  });
}

export function stopMusic() {
  if (!currentAudio) {
    return;
  }

  currentAudio.pause();
  currentAudio.currentTime = 0;
  currentAudio = null;
  currentTrackName = null;

}
