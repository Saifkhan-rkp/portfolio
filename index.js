// const nameElement = document.getElementById("name");
// const titleElement = document.getElementById("title");

// const nm = "Saif Khan"; // Text to be typed out
// const title = "Software Developer"; // Text to be typed out

// function typeWord(text, textElement, spd) {
//   const speed = spd || 300; // Speed of typing in milliseconds
//   let index = 0;
//   let wordIndex = 0;
//   let isTyping = true;
//   const words = text.split(" ");
//   const type = () => {
//     if (index < words[wordIndex].length) {
//       textElement.textContent += words[wordIndex][index];
//       index++;
//       setTimeout(type, speed);
//     } else {
//       if (wordIndex < words.length - 1) {
//         textElement.textContent += " "; // Add space between words
//         index = 0;
//         wordIndex++;
//         setTimeout(type, speed);
//       } else {
//         isTyping = false; // End typing animation
//       }
//     }
//   };
//   type();
// }



/** Glitch Code */
const random = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));
  let glitchTexts = document.querySelectorAll(".glitch");
  glitchTexts.forEach(text => {
    let content = text.textContent;
    text.textContent = "";
    let slice = (text ).dataset.slice;
    (text).style.setProperty("--slice-count", slice);
    for (let i = 0; i <= Number(slice); i++) {
      let span = document.createElement("span");
      span.textContent = content;
      span.style.setProperty("--i", `${i + 1}`);
      if (i !== Number(slice)) {
        span.style.animationDelay = `${random(100, 300)}ms`;
      }
      text.append(span);
    }
  });
  

// typeWord(nm, nameElement);
// typeWord(title, titleElement);
