export function startQuillAnimation() {
  const scrollLetter = document.querySelector("#scrollLetter");
  const writingQuill = document.querySelector("#writingQuill");
  const scrollScene = document.querySelector(".scroll-scene");
  const fireworksButton = document.querySelector("#startFireworksBtn");

  if (
    !scrollLetter ||
    !writingQuill ||
    !scrollScene ||
    !fireworksButton
  ) {
    console.error("Quill animation elements were not found.");
    return;
  }

  const writingElements = scrollLetter.querySelectorAll(
    ".scroll-greeting, .scroll-letter-text p, .scroll-signature"
  );

  const characters = [];

  writingElements.forEach((element) => {
    const originalText = element.textContent.trim();

    element.textContent = "";

    Array.from(originalText).forEach((character) => {
      const span = document.createElement("span");

      span.className = "quill-character";
      span.textContent = character;

      element.appendChild(span);
      characters.push(span);
    });
  });

  fireworksButton.classList.remove("show-fireworks-button");
  writingQuill.classList.add("quill-visible");

  let currentCharacter = 0;

  function writeNextCharacter() {
    if (currentCharacter >= characters.length) {
      writingQuill.classList.remove("quill-visible");

      window.setTimeout(() => {
        fireworksButton.classList.add("show-fireworks-button");
      }, 700);

      return;
    }

    const characterSpan = characters[currentCharacter];

    characterSpan.classList.add("written");

    const characterPosition =
      characterSpan.getBoundingClientRect();

    const scenePosition =
      scrollScene.getBoundingClientRect();

    writingQuill.style.left =
      `${characterPosition.right - scenePosition.left}px`;

    writingQuill.style.top =
      `${characterPosition.bottom - scenePosition.top}px`;

    const writtenCharacter = characterSpan.textContent;

    currentCharacter++;

    let writingSpeed = 22;

    if (writtenCharacter === " ") {
      writingSpeed = 8;
    }

    if (
      writtenCharacter === "." ||
      writtenCharacter === "," ||
      writtenCharacter === "!" ||
      writtenCharacter === "?"
    ) {
      writingSpeed = 100;
    }

    window.setTimeout(writeNextCharacter, writingSpeed);
  }

  writeNextCharacter();
}