const config = {
  name: "Veronica Zoe Limary",
  fromName: "Nirvik Shrestha",
  birthday: "2025-01-01",
  reasons: [
    "Your laugh makes everything lighter",
    "You notice the little things",
    "You make home feel easy",
    "You are my favorite person",
    "You are kind even when tired",
    "You turn ordinary days into long lasting memories",
  ],
  moments: [
    "That one call that started everything off.",
    "When I told you that I liked you for the first time",
    "When you kissed me for the first time",
  ],
};

const nameEl = document.getElementById("name");
const fromEl = document.getElementById("fromName");
const fromCardEl = document.getElementById("fromNameCard");
const countdownEl = document.getElementById("countdown");
const reasonsEl = document.getElementById("reasons");
const momentsEl = document.getElementById("moments");
const photoStackEl = document.getElementById("photoStack");
const photoFrontEl = document.getElementById("photoFront");
const photoBackEl = document.getElementById("photoBack");

if (nameEl) {
  nameEl.textContent = config.name;
}
if (fromEl) {
  fromEl.textContent = config.fromName;
}

if (fromCardEl) {
  fromCardEl.textContent = config.fromName;
}

if (photoStackEl) {
  const togglePhotos = () => {
    photoStackEl.classList.toggle("is-swapped");
  };

  if (photoFrontEl) {
    photoFrontEl.addEventListener("click", togglePhotos);
  }

  if (photoBackEl) {
    photoBackEl.addEventListener("click", togglePhotos);
  }

  if (!photoFrontEl && !photoBackEl) {
    photoStackEl.addEventListener("click", togglePhotos);
  }
}

if (reasonsEl) {
  config.reasons.forEach((reason) => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = reason;
    reasonsEl.appendChild(card);
  });

  config.reasons.forEach((reason) => {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = reason;
    card.setAttribute("aria-hidden", "true");
    reasonsEl.appendChild(card);
  });
}

if (momentsEl) {
  config.moments.forEach((moment) => {
    const item = document.createElement("div");
    item.className = "moment";
    item.textContent = moment;
    momentsEl.appendChild(item);
  });
}

const targetDate = new Date(`${config.birthday}T00:00:00`);

function updateCountdown() {
  if (!countdownEl) {
    return;
  }
  const now = new Date();
  const diff = targetDate - now;

  if (Number.isNaN(targetDate.getTime())) {
    if (countdownEl) {
      countdownEl.textContent = "Set a valid date in main.js";
    }
    return;
  }

  if (diff <= 0) {
    if (countdownEl) {
      const countdownWrapper = countdownEl.closest(".countdown");
      if (countdownWrapper) {
        countdownWrapper.remove();
      } else {
        countdownEl.remove();
      }
    }
    document.body.classList.remove("countdown-only");
    return;
  }

  document.body.classList.add("countdown-only");

  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  if (countdownEl) {
    countdownEl.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
}

if (countdownEl) {
  setInterval(updateCountdown, 1000);
  updateCountdown();
}

function createHearts() {
  for (let i = 0; i < 18; i += 1) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.animationDelay = `${Math.random() * 12}s`;
    heart.style.animationDuration = `${10 + Math.random() * 10}s`;
    heart.style.transform = `rotate(45deg) scale(${0.6 + Math.random()})`;
    document.body.appendChild(heart);
  }
}

createHearts();
