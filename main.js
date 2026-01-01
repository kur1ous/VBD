const config = {
  name: "Veronica Zoe Limary",
  fromName: "Nirvik Shrestha",
  birthday: "2026-01-01",
  reasons: [
    "Your laugh lightens my day.",
    "You notice the little things.",
    "You make me feel at home.",
    "You have eyes that see right through me.",
    "You are kind even when you are tired.",
    "You turn everyday into a memory that I will cherish.",
  ],
  moments: [
    "That one call that started everything off.",
    "When I told you that I liked you for the first time",
    "When you kissed me for the first time",
  ],
  songs: [
    {
      id: "6a3PAfOxDpgBv0ZdJuH5Eo",
      note: "Closer than the buttons on your clo o o thes",
    },
    {
      id: "17Wks0pgofBbv53Ay7m4Jc",
      note: "With you I don't see an end",
    },
    {
      id: "30TMiaI1TpsUzJAI8ZIduk",
      note: "Can I pick your brain?",
    },
    {
      id: "4WFgvKVfEhb3IUAFGrutTR",
      note: "See right now, I need you",
    },
    {
      id: "5gYCV8qcQb5v4Nl5kRr147",
      note: "blur blur blurrrr",
    },
    {
      id: "1S3ZeV4CEdqbzBYwu0pxE7",
      note: "Do you wanna wake up to me every morning?",
    },
    {
      id: "026wpXkLAjImiWOzzcJBHj",
      note: "MY GOOD LOOKING BABBYYY",
    },
    {
      id: "5lE2EFXt4muvLFMGQg4hZN",
      note: "You should be livin' next to me",
    },
    {
      id: "67f9FinHvP92rFVpPnsDcG",
      note: "One reason is enough to stay.",
    },
    {
      id: "3vkCueOmm7xQDoJ17W1Pm3",
      note: "My love is all yours <3",
    },
    {
      id: "47uY2r2IzVg8moQyAwmm83",
      note: "If heaven's for lovers, that's where we'll be.",
    },
    {
      id: "4O9dZs2B0ilk4PEfX2bPEv",
      note: "We'll be in love forever.",
    },
    {
      id: "1NZs6n6hl8UuMaX0UC0YTz",
      note: "MWAUHHHHHHHHH",
    },
    {
      id: "2enPRFda84VE2wtI8c86Uf",
      note: "You and me, always and forever.",
    },
    {
      id: "6lOrIg7RQlYHJmD2crdGbJ",
      note: "Let's do all the chores together :)",
    },
    {
      id: "0UYnhUfnUj5adChuAXvLUB",
      note: "Kiss me on the mouth",
    },
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

// Kisses Clicker Logic
const herBtn = document.getElementById("herClickerBtn");
const herCountEl = document.getElementById("herCount");
const hisCountEl = document.getElementById("hisCount");

if (herBtn && herCountEl && hisCountEl) {
  // Initialize values to 0
  let herKisses = 0;
  let hisKisses = 0;

  herCountEl.textContent = herKisses.toLocaleString();
  hisCountEl.textContent = hisKisses.toLocaleString();

  // Her Click Handler
  herBtn.addEventListener("click", () => {
    herKisses += 1;
    herCountEl.textContent = herKisses.toLocaleString();

    // Optional: Add a burst of hearts or visual feedback here if desired
    // For now, the button CSS animation provides feedback
  });

  // His Automatic Counter
  // Increment every 100ms (10 times a second)
  setInterval(() => {
    hisKisses += 1;
    hisCountEl.textContent = hisKisses.toLocaleString();
  }, 100);

  // Save his count periodically (every 1 second) to avoid spamming localStorage
  setInterval(() => {
    localStorage.setItem("vbd_his_kisses", hisKisses);
  }, 1000);
}

// Playlist Logic
const playlistGrid = document.getElementById("playlistGrid");

if (playlistGrid && config.songs) {
  playlistGrid.innerHTML = ""; // Clear loading message

  config.songs.forEach((song) => {
    const card = document.createElement("div");
    card.className = "song-card";

    // Create Spotify Embed
    const iframe = document.createElement("iframe");
    iframe.src = `https://open.spotify.com/embed/track/${song.id}?utm_source=generator`;
    iframe.width = "100%";
    iframe.height = "152";
    iframe.frameBorder = "0";
    iframe.allowFullscreen = "";
    iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
    iframe.loading = "lazy";
    iframe.style.borderRadius = "12px";

    // Create Note
    const note = document.createElement("p");
    note.className = "song-note";
    note.textContent = song.note;

    card.appendChild(iframe);
    card.appendChild(note);
    playlistGrid.appendChild(card);
  });
}

// Universe Logic
const universeContainer = document.getElementById("universe");
const starMessageEl = document.getElementById("starMessage");

if (universeContainer && starMessageEl) {
  // Configurable messages
  const starMessages = [
    "You are my favorite thought.",
    "I love you more than yesterday.",
    "Forever and always.",
    "My heart finds its home in you.",
    "You make the world brighter.",
    "In all the universe, I found you.",
    "My love for you is infinite.",
    "If you were the sun, I would be Icarus.",
    "I smile whenever I think of you.",
    "You are the best thing that happened to me.",
    "I promise to always be by your side.",
    "Your laugh is my favorite sound.",
    "I love building our future together.",
    "You are beautiful, inside and out.",
    "Thank you for being you.",
    "I love us.",
    "You are my safe place.",
  ];

  const starCount = 150; // Number of stars

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement("div");
    star.className = "star";

    // Random Position
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    star.style.left = `${x}vw`;
    star.style.top = `${y}vh`;

    // Random Size (small)
    const size = Math.random() * 2 + 1; // 1px to 3px
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;

    // Random Twinkle Animation
    const duration = Math.random() * 3 + 2;
    const delay = Math.random() * 5;
    star.style.animation = `twinkle ${duration}s ease-in-out infinite ${delay}s`;
    star.style.opacity = Math.random() * 0.7 + 0.3;

    // Assign a random message
    const message = starMessages[Math.floor(Math.random() * starMessages.length)];

    // Hover Event
    star.addEventListener("mouseenter", () => {
      starMessageEl.innerHTML = `<p class="active-message">${message}</p>`;
    });

    universeContainer.appendChild(star);
  }
}
