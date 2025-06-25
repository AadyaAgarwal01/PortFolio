document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".flip-card").forEach((card) => {
    const inner = card.querySelector(".flip-card-inner");
    const backButton = card.querySelector(".back-button");

    card.addEventListener("click", (e) => {
      const isBackBtn = e.target.closest(".back-button");
      const isLink = e.target.closest("a");
      if (!isBackBtn && !isLink) {
        card.classList.toggle("flipped");
      }
    });

    backButton?.addEventListener("click", (e) => {
      e.stopPropagation();
      card.classList.remove("flipped");
    });
  });
});

const animateOnScroll = (selector = ".topic", visibleClass = "visible") => {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(visibleClass);
          obs.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px",
    }
  );

  document.querySelectorAll(selector).forEach((el) => observer.observe(el));
};

document.addEventListener("DOMContentLoaded", () => {
  animateOnScroll(".topic", "visible");
});
const titles = [
  " AADYA AGARWAL ",
  " UI/UX DESIGNER ",
  " PASSIONATE DEVELOPER ",
];
let titleIndex = 0;
let charIndex = 0;
let currentTitle = "";
let isDeleting = false;

function type() {
  const titleElement = document.getElementById("changing-title");
  if (isDeleting) {
    currentTitle = titles[titleIndex].substring(0, charIndex--);
  } else {
    currentTitle = titles[titleIndex].substring(0, charIndex++);
  }
  titleElement.textContent = currentTitle;

  if (!isDeleting && charIndex === titles[titleIndex].length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    titleIndex = (titleIndex + 1) % titles.length;
    setTimeout(type, 500);
  } else {
    setTimeout(type, isDeleting ? 50 : 100);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});
