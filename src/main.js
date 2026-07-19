import "./style.css";
import "./styles/jasmine.css";
import "./styles/elsa.css";
import "./styles/belle.css";
import "./styles/rapunzel.css";
import "./styles/cinderella.css";
import "./styles/scroll.css";

import { marvelCharacters } from "./characters.js";
import { barbie } from "./data/barbie.js";
import { princessIntro } from "./data/princesses.js";
import { jasmine } from "./data/jasmine.js";
import { elsa } from "./data/elsa.js";
import { belle } from "./data/belle.js";
import { rapunzel } from "./data/rapunzel.js";
import { cinderella } from "./data/cinderella.js";
import { finalMessage } from "./data/finalMessage.js";
import { playMusic, stopMusic } from "./audio/audioManager.js";

let currentCharacterIndex = 0;

const heroThemes = [
  "ironman-theme",
  "captain-theme",
  "thor-theme",
  "spiderman-theme",
  "miles-theme",
  "strange-theme",
  "wolverine-theme",
  "deadpool-theme",
  "hulk-theme",
  "widow-theme",
  "hawkeye-theme",
  "loki-theme",
  "wanda-theme",
  "vision-theme",
  "falcon-theme",
  "captainmarvel-theme",
  "panther-theme",
  "groot-theme",
  "starlord-theme",
  "thanos-theme",
];

const heroMusic = [
  "ironman",
  "captain",
  "thor",
  "spiderman",
  "miles",
  "strange",
  "wolverine",
  "deadpool",
  "hulk",
  "widow",
  "hawkeye",
  "loki",
  "wanda",
  "vision",
  "falcon",
  "captainmarvel",
  "panther",
  "groot",
  "starlord",
  "thanos",
];

const animationClasses = [
  "ironman-enter",
  "captain-enter",
  "thor-enter",
  "spiderman-enter",
  "miles-enter",
  "strange-enter",
  "wolverine-enter",
  "deadpool-enter",
  "hulk-enter",
  "widow-enter",
  "hawkeye-enter",
  "loki-enter",
  "wanda-enter",
  "vision-enter",
  "falcon-enter",
  "captainmarvel-enter",
  "panther-enter",
  "groot-enter",
  "starlord-enter",
  "thanos-enter",
];

document.querySelector("#app").innerHTML = `
  <div class="scene" id="landingScene">
    <div class="stars"></div>
    <div class="moon"></div>

    <div class="content">
      <h1>Happy Birthday Harshvi ✨</h1>
      <p>A magical surprise is waiting for you...</p>

      <button id="startBtn">
        Open Your Surprise 🎁
      </button>
    </div>
  </div>

  <section class="hero-show hidden" id="heroShow">
    <div class="hero-background-glow"></div>

    <div class="hero-counter" id="heroCounter"></div>

    <div class="hero-stage">
      <img
        id="heroImage"
        class="hero-image"
        src=""
        alt=""
      />

      <div class="hero-message-box">
        <p class="hero-introduction">
          A special message from...
        </p>

        <h2 id="heroName"></h2>

        <p id="heroMessage"></p>

        <button id="nextHeroBtn">
          Next Hero ➜
        </button>
      </div>
    </div>
  </section>

  <section class="barbie-show hidden" id="barbieShow">
    <div class="barbie-sparkles"></div>

    <div class="barbie-hearts">
      <span>💖</span>
      <span>💕</span>
      <span>💗</span>
      <span>💓</span>
      <span>💞</span>
      <span>💖</span>
      <span>💕</span>
      <span>💗</span>
    </div>

    <div class="barbie-butterflies">
      <span>🦋</span>
      <span>🦋</span>
      <span>🦋</span>
      <span>🦋</span>
    </div>

    <div class="barbie-stage">
      <img
        id="barbieImage"
        class="barbie-image"
        src="${barbie.image}"
        alt="${barbie.name}"
      />

      <div class="barbie-message-box">
        <p class="barbie-small-title">
          A special birthday message from...
        </p>

        <h2>${barbie.name}</h2>

        <p class="barbie-message">
          ${barbie.message}
        </p>

        <button id="startBarbieBtn">
          ${barbie.button}
        </button>
      </div>
    </div>
  </section>

  <section class="princess-show hidden" id="princessShow">
    <div class="castle-glow"></div>

    <div class="princess-clouds">
      ☁️ ☁️ ☁️ ☁️ ☁️
    </div>

    <img
      class="castle-image"
      src="/Princess/castle.png"
      alt="Castle"
    />

    <div class="princess-intro">
      <h1>${princessIntro.title}</h1>

      <p>${princessIntro.subtitle}</p>

      <button id="startPrincessBtn">
        ${princessIntro.button}
      </button>
    </div>
  </section>
  <section class="jasmine-show hidden" id="jasmineShow">
  <div class="jasmine-palace-background"></div>
<div class="jasmine-palace-overlay"></div>

  <div class="jasmine-stars"></div>
  <div class="jasmine-shooting-stars">
  <span></span>
  <span></span>
  <span></span>
</div>

  <img
    id="jasmineImage"
    class="jasmine-image"
    src="${jasmine.image}"
    alt="${jasmine.name}"
  />

  <div class="jasmine-message-box">

    <p class="jasmine-small-title">
      A magical birthday message from...
    </p>

    <h2 id="jasmineName">
      ${jasmine.name}
    </h2>

    <p id="jasmineMessage">
      ${jasmine.message}
    </p>

    <button id="nextPrincessBtn">
      ${jasmine.button}
    </button>

  </div>

</section>
<section class="elsa-show hidden" id="elsaShow">
  <div class="elsa-castle-background"></div>
  <div class="elsa-overlay"></div>
  <div class="elsa-snow"></div>

  <img
    id="elsaImage"
    class="elsa-image"
    src="${elsa.image}"
    alt="${elsa.name}"
  />

  <div class="elsa-message-box">
    <p class="elsa-small-title">
      A magical birthday message from...
    </p>

    <h2 id="elsaName">
      ${elsa.name}
    </h2>

    <p id="elsaMessage">
      ${elsa.message}
    </p>

    <button id="nextElsaBtn">
      ${elsa.button}
    </button>
  </div>
</section>
<section class="belle-show hidden" id="belleShow">
  <div class="belle-castle-background"></div>
  <div class="belle-overlay"></div>

  <div class="belle-rose-petals">
    <img src="/princess/rose-petal.gif" alt="" />
    <img src="/princess/rose-petal.gif" alt="" />
    <img src="/princess/rose-petal.gif" alt="" />
    <img src="/princess/rose-petal.gif" alt="" />
  </div>

  <div class="belle-stage">
    <img
      id="belleImage"
      class="belle-image"
      src="${belle.image}"
      alt="${belle.name}"
    />

    <div class="belle-message-box">
      <p class="belle-small-title">
        A magical birthday message from...
      </p>

      <h2 id="belleName">
        ${belle.name}
      </h2>

      <p id="belleMessage">
        ${belle.message}
      </p>

      <button id="nextBelleBtn">
        ${belle.button}
      </button>
    </div>
  </div>
</section>
<section class="rapunzel-show hidden" id="rapunzelShow">
  <div class="rapunzel-tower-background"></div>
  <div class="rapunzel-overlay"></div>

  <div class="rapunzel-lanterns">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div class="rapunzel-fireflies">
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
  <span></span>
</div>

  <div class="rapunzel-stage">
    <img
      id="rapunzelImage"
      class="rapunzel-image"
      src="${rapunzel.image}"
      alt="${rapunzel.name}"
    />

    <div class="rapunzel-message-box">
      <p class="rapunzel-small-title">
        A magical birthday message from...
      </p>

      <h2 id="rapunzelName">
        ${rapunzel.name}
      </h2>

      <p id="rapunzelMessage">
        ${rapunzel.message}
      </p>

      <button id="nextRapunzelBtn">
        ${rapunzel.button}
      </button>
    </div>
  </div>
</section>
<section class="cinderella-show hidden" id="cinderellaShow">
  <div class="cinderella-castle-background"></div>
  <div class="cinderella-overlay"></div>

  <div class="cinderella-fairy-dust">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>

  <div class="cinderella-stage">
    <img
      id="cinderellaImage"
      class="cinderella-image"
      src="${cinderella.image}"
      alt="${cinderella.name}"
    />

    <div class="cinderella-message-box">
      <p class="cinderella-small-title">
        A magical birthday message from...
      </p>

      <h2 id="cinderellaName">
        ${cinderella.name}
      </h2>

      <p id="cinderellaMessage">
        ${cinderella.message}
      </p>

      <button id="nextCinderellaBtn">
        ${cinderella.button}
      </button>
    </div>
  </div>
</section>
<section class="scroll-show hidden" id="scrollShow">
  <div class="scroll-dark-overlay"></div>

  <div class="scroll-scene">
    <img
      class="scroll-png"
      src="/scroll/pirate-scroll.png"
      alt="Pirate scroll"
    />

    <div class="scroll-letter" id="scrollLetter">
      <h2 class="scroll-greeting">
        ${finalMessage.greeting}
      </h2>

      <div class="scroll-letter-text" id="scrollLetterText">
        ${finalMessage.paragraphs
          .map((paragraph) => `<p>${paragraph}</p>`)
          .join("")}
      </div>

      <p class="scroll-signature">
        ${finalMessage.signature.replace("\n", "<br>")}
      </p>
      <button id="startFireworksBtn" type="button">
        ${finalMessage.button}
      </button>
    </div>

    <div class="writing-quill" id="writingQuill">🪶</div>
  </div>
</section>
<div class="fireworks-gif-overlay hidden" id="fireworksGifOverlay">
  <img
    src="/fireworks/fireworks.gif"
    alt="Birthday fireworks"
  />

  <button id="closeFireworksBtn" type="button">
  Start From the Beginning ✨
  </button>
</div>
`;

const landingScene = document.querySelector("#landingScene");
const heroShow = document.querySelector("#heroShow");
const barbieShow = document.querySelector("#barbieShow");
const princessShow = document.querySelector("#princessShow");

const heroImage = document.querySelector("#heroImage");
const heroName = document.querySelector("#heroName");
const heroMessage = document.querySelector("#heroMessage");
const heroCounter = document.querySelector("#heroCounter");

const startBtn = document.querySelector("#startBtn");
const nextHeroBtn = document.querySelector("#nextHeroBtn");
const startBarbieBtn = document.querySelector("#startBarbieBtn");
const startPrincessBtn = document.querySelector("#startPrincessBtn");
const jasmineShow = document.querySelector("#jasmineShow");
const elsaShow = document.querySelector("#elsaShow");
const belleShow = document.querySelector("#belleShow");
const rapunzelShow = document.querySelector("#rapunzelShow");
const cinderellaShow = document.querySelector("#cinderellaShow");
const nextRapunzelBtn = document.querySelector("#nextRapunzelBtn");
const nextBelleBtn = document.querySelector("#nextBelleBtn");
const nextElsaBtn = document.querySelector("#nextElsaBtn");
const nextPrincessBtn = document.querySelector("#nextPrincessBtn");
const nextCinderellaBtn = document.querySelector("#nextCinderellaBtn");
const scrollShow = document.querySelector("#scrollShow");
const startFireworksBtn =
  document.querySelector("#startFireworksBtn");

const fireworksGifOverlay =
  document.querySelector("#fireworksGifOverlay");

const closeFireworksBtn =
  document.querySelector("#closeFireworksBtn");
closeFireworksBtn.addEventListener("click", () => {
  stopMusic();

  window.location.reload();
});

nextCinderellaBtn.addEventListener("click", () => {
  stopMusic();
  cinderellaShow.classList.add("cinderella-exit");

  window.setTimeout(() => {
    cinderellaShow.classList.add("hidden");

    scrollShow.classList.remove("hidden");
    scrollShow.classList.add("scroll-enter");

    playMusic("letter");

    window.setTimeout(() => {
      startQuillAnimation();
    }, 1200);
  }, 900);
});
startFireworksBtn.addEventListener("click", () => {
  scrollShow.classList.add("hidden");

  fireworksGifOverlay.classList.remove("hidden");
  fireworksGifOverlay.classList.add("fireworks-gif-enter");

  playMusic("fireworks");
});

function showCharacter(index) {
  const character = marvelCharacters[index];

playMusic(heroMusic[index]);

  heroThemes.forEach((theme) => {
    heroShow.classList.remove(theme);
  });

  heroShow.classList.add(heroThemes[index]);

  animationClasses.forEach((animation) => {
    heroImage.classList.remove(animation);
  });

  heroImage.classList.remove("hero-image");
  void heroImage.offsetWidth;
  heroImage.classList.add("hero-image");

  heroImage.src = character.image;
  heroImage.alt = character.name;

  heroName.textContent = character.name;
  heroMessage.textContent = character.message;

  heroCounter.textContent =
    `Hero ${index + 1} of ${marvelCharacters.length}`;

  if (index === marvelCharacters.length - 1) {
    nextHeroBtn.textContent = "Continue the Surprise ✨";
  } else {
    nextHeroBtn.textContent = "Next Hero ➜";
  }

  heroImage.classList.add(animationClasses[index]);
}


startBtn.addEventListener("click", () => {
  landingScene.classList.add("fadeOut");

  setTimeout(() => {
    landingScene.classList.add("hidden");
    heroShow.classList.remove("hidden");

    showCharacter(currentCharacterIndex);
  }, 1000);
});

nextHeroBtn.addEventListener("click", () => {
  if (currentCharacterIndex < marvelCharacters.length - 1) {
    currentCharacterIndex++;
    showCharacter(currentCharacterIndex);
    return;
  }

  heroShow.classList.add("section-fade-out");

  setTimeout(() => {
    heroShow.classList.add("hidden");
    heroShow.classList.remove("section-fade-out");

    barbieShow.classList.remove("hidden");
    barbieShow.classList.add("barbie-enter");

    playMusic("barbie");
  }, 800);
});

startBarbieBtn.addEventListener("click", () => {
  barbieShow.classList.add("section-fade-out");

  setTimeout(() => {
    barbieShow.classList.add("hidden");
    barbieShow.classList.remove("section-fade-out");

    princessShow.classList.remove("hidden");
    princessShow.classList.add("barbie-enter");
  }, 800);
});

startPrincessBtn.addEventListener("click", () => {
  nextPrincessBtn.addEventListener("click", () => {
  jasmineShow.classList.add("section-fade-out");

  setTimeout(() => {
    jasmineShow.classList.add("hidden");
    jasmineShow.classList.remove("section-fade-out");

    elsaShow.classList.remove("hidden");
    elsaShow.classList.add("elsa-enter");
    playMusic("elsa");
  }, 800);
});
  princessShow.classList.add("section-fade-out");

  setTimeout(() => {
    princessShow.classList.add("hidden");
    princessShow.classList.remove("section-fade-out");

    jasmineShow.classList.remove("hidden");
    jasmineShow.classList.add("jasmine-enter");
    playMusic("jasmine");
  }, 800);
});
nextElsaBtn.addEventListener("click", () => {

  elsaShow.classList.add("section-fade-out");

  setTimeout(() => {
    elsaShow.classList.add("hidden");
    elsaShow.classList.remove("section-fade-out");

    belleShow.classList.remove("hidden");
    belleShow.classList.add("belle-enter");
    playMusic("belle");

  }, 800);

});
nextBelleBtn.addEventListener("click", () => {
  belleShow.classList.add("section-fade-out");

  setTimeout(() => {
    belleShow.classList.add("hidden");
    belleShow.classList.remove("section-fade-out");

    rapunzelShow.classList.remove("hidden");
    rapunzelShow.classList.add("rapunzel-enter");
    playMusic("rapunzel");
  }, 800);
});
nextRapunzelBtn.addEventListener("click", () => {
  rapunzelShow.classList.add("section-fade-out");

  setTimeout(() => {
    rapunzelShow.classList.add("hidden");
    rapunzelShow.classList.remove("section-fade-out");

    cinderellaShow.classList.remove("hidden");
    cinderellaShow.classList.add("cinderella-enter");
    playMusic("cinderella");
  }, 800);
});