/** Type Animation Code */
function typeWord(textElement, spd) {
  const speed = spd || 30; // Speed of typing in milliseconds
  let index = 0;
  let wordIndex = 0;
  const text = textElement.textContent; // Text to be typed out
  textElement.textContent = "";
  const words = text.split(" ");

  const type = () => {
    if (index < words[wordIndex].length) {
      textElement.textContent += words[wordIndex][index];
      index++;
      setTimeout(type, speed);
    } else {
      if (wordIndex < words.length - 1) {
        wordIndex++;
        index = 0;
        textElement.textContent += " "; // Add space before typing the next word
        setTimeout(type, speed); // Start typing the next word immediately
      }
    }
  };
  type();
}

function startTypingOnView() {
  //for experience and paragraph
  const paraElement = document.getElementById("about-para");
  const expElement = document.querySelectorAll(".exp");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        typeWord(paraElement, 15); // Start typing animation
        expElement.forEach((exp) => typeWord(exp));
        observer.unobserve(entry.target); // Stop observing after starting
      }
    });
  });

  observer.observe(paraElement); // Start observing the element
  // observer.observe(expElement); // Start observing the element
}

// Usage for the About section
startTypingOnView();

/** Glitch Code */
const random = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
let glitchTexts = document.querySelectorAll(".glitch");
const createGlitchAnimation = (text) => {
  let content = text.textContent;
  text.textContent = "";
  let slice = text.dataset.slice;
  text.style.setProperty("--slice-count", slice);
  for (let i = 0; i <= Number(slice); i++) {
    let span = document.createElement("span");
    span.textContent = content;
    span.style.setProperty("--i", `${i + 1}`);
    if (i !== Number(slice)) {
      span.style.animationDelay = `+${random(100, 300)}ms`;
    }
    text.append(span);
  }
};

// Intersection Observer to trigger glitch animation
const observerOptions = {
  root: null,
  threshold: 0.8,
};

const observerCallback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      createGlitchAnimation(entry.target);
      observer.unobserve(entry.target); // Stop observing after animation is triggered
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

// Observe each glitch text element
glitchTexts.forEach((text) => {
  observer.observe(text);
});

// typeWord(nm, nameElement);
// typeWord(title, titleElement);

/** Slider Code */
var swiper = new Swiper(".contacts-content", {
  speed: 800,
  slidesPerView: 1,
  spaceBetween: 15,
  autoplay: {
    delay: 2000,
  },
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    320: {
      slidesPerView: 2,
    },
    750: {
      slidesPerView: 5,
    },
  },
});

swiper.init();

/** Function to highlight the current navbar item based on scroll position */
function highlightCurrentSection() {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('#navitems li a');

  window.addEventListener('scroll', () => {
      let current = '';

      // Loop through sections to find the current section
      sections.forEach(section => {
          const sectionTop = section.offsetTop; 
          const sectionHeight = section.clientHeight;

          if (scrollY >= sectionTop - sectionHeight / 3) {
              current = section.getAttribute('id'); 
          }
      });

      navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${current}`) {
              link.classList.add('active');
          }
      });
  });
}

// Call the function to activate the scroll detection
highlightCurrentSection();