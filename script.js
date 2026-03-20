function getNestedValue(obj, path) {
  return path.split(".").reduce((acc, key) => (acc ? acc[key] : undefined), obj);
}

function applySimpleContent() {
  const elements = document.querySelectorAll("[data-content]");
  elements.forEach((el) => {
    const path = el.getAttribute("data-content");
    const value = getNestedValue(CONTENT, path);
    if (typeof value === "string") {
      el.textContent = value;
    }
  });
}

function buildNav() {
  const navContainer = document.getElementById("nav-links");
  if (!navContainer) return;

  navContainer.innerHTML = "";
  CONTENT.nav.forEach((item) => {
    const link = document.createElement("a");
    link.href = item.href;
    link.textContent = item.label;
    navContainer.appendChild(link);
  });
}

function buildStoryLines() {
  const container = document.getElementById("story-sequence");
  const heroButton = document.getElementById("hero-cta");
  const replayButton = document.getElementById("replay-intro-btn");
  const heroPhoto = document.getElementById("hero-photo");

  if (!container) return;

  container.innerHTML = "";

  CONTENT.hero.lines.forEach((line, index) => {
    const div = document.createElement("div");
    div.className = "story-line";
    if (line.emphasis) div.classList.add("story-line-emphasis");
    if (index < 4) div.dataset.group = "early";
    div.textContent = line.text;
    div.dataset.delay = String(line.delay);
    container.appendChild(div);
  });

  if (heroButton) {
    heroButton.textContent = CONTENT.hero.button.label;
    heroButton.href = CONTENT.hero.button.href;
  }

  if (replayButton) {
    replayButton.textContent = CONTENT.hero.replayLabel;
  }

  if (heroPhoto) {
    heroPhoto.src = CONTENT.hero.photo.src;
    heroPhoto.alt = CONTENT.hero.photo.alt;
  }
}

let dimTimeout;

function resetIntroAnimations() {
  const lines = document.querySelectorAll(".story-line");
  const earlyLines = document.querySelectorAll('.story-line[data-group="early"]');
  const photoFrame = document.getElementById("hero-photo-frame");
  const controls = document.getElementById("hero-controls");
  const scrollCue = document.getElementById("scroll-cue");

  const lineDuration = CONTENT.hero.lineDuration || 0.9;
  const lastLineDelay = Math.max(...CONTENT.hero.lines.map((line) => line.delay));
  const photoDelay = lastLineDelay + lineDuration + (CONTENT.hero.photoDelayAfterLastLine || 1);
  const controlsDelay = photoDelay + (CONTENT.hero.controlsDelayAfterPhoto || 0.4);
  const cueDelay = controlsDelay + 0.4;
  const dimAt = CONTENT.hero.dimFirstLinesAt || 7.2;

  clearTimeout(dimTimeout);

  lines.forEach((line, index) => {
    line.classList.remove("animate-in", "story-line-dimmed");
    line.style.animation = "none";
    line.style.opacity = "0";
    line.style.transform = "translateY(18px)";
    void line.offsetWidth;
    line.style.animation = "";
    line.style.animationDelay = `${CONTENT.hero.lines[index].delay}s`;
    line.classList.add("animate-in");
  });

  if (photoFrame) {
    photoFrame.classList.remove("animate-in");
    photoFrame.style.animation = "none";
    photoFrame.style.opacity = "0";
    photoFrame.style.transform = "translateY(18px)";
    void photoFrame.offsetWidth;
    photoFrame.style.animation = "";
    photoFrame.style.animationDelay = `${photoDelay}s`;
    photoFrame.classList.add("animate-in");
  }

  if (controls) {
    controls.classList.remove("animate-in");
    controls.style.animation = "none";
    controls.style.opacity = "0";
    controls.style.transform = "translateY(18px)";
    void controls.offsetWidth;
    controls.style.animation = "";
    controls.style.animationDelay = `${controlsDelay}s`;
    controls.classList.add("animate-in");
  }

  if (scrollCue) {
    scrollCue.classList.remove("fade-in-only");
    scrollCue.style.animation = "none";
    scrollCue.style.opacity = "0";
    void scrollCue.offsetWidth;
    scrollCue.style.animation = "";
    scrollCue.style.animationDelay = `${cueDelay}s`;
    scrollCue.classList.add("fade-in-only");
  }

  dimTimeout = setTimeout(() => {
    earlyLines.forEach((line) => line.classList.add("story-line-dimmed"));
  }, dimAt * 1000);
}

function setupReplayButton() {
  const replayButton = document.getElementById("replay-intro-btn");
  if (!replayButton) return;

  replayButton.addEventListener("click", () => {
    resetIntroAnimations();
  });
}

function buildRevealButtons() {
  const primaryBtn = document.getElementById("reveal-primary-btn");
  const resumeBtn = document.getElementById("resume-btn");

  if (primaryBtn) {
    primaryBtn.textContent = CONTENT.reveal.primaryButton.label;
    primaryBtn.href = CONTENT.reveal.primaryButton.href;
  }

  if (resumeBtn) {
    resumeBtn.textContent = CONTENT.reveal.resumeButton.label;
    resumeBtn.href = CONTENT.reveal.resumeButton.href;
  }
}

function buildProjects() {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  grid.innerHTML = "";

  CONTENT.projects.items.forEach((project, index) => {
    const article = document.createElement("article");
    article.className = `project-card reveal-on-scroll reveal-delay-${index % 3}`;
    article.innerHTML = `
      <p class="project-tag">${project.tag}</p>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="project-links">
        <a href="${project.github}" target="_blank" class="project-link">GitHub</a>
        <a href="${project.details}" class="project-link secondary-link">Details</a>
      </div>
    `;
    grid.appendChild(article);
  });
}

function buildProcess() {
  const container = document.getElementById("process-steps");
  if (!container) return;

  container.innerHTML = "";

  CONTENT.process.steps.forEach((step, index) => {
    const div = document.createElement("div");
    div.className = `process-step reveal-on-scroll reveal-delay-${index % 2}`;
    div.innerHTML = `
      <span class="step-number">${step.number}</span>
      <div>
        <h3>${step.title}</h3>
        <p>${step.description}</p>
      </div>
    `;
    container.appendChild(div);
  });
}

function buildAbout() {
  const paragraphsContainer = document.getElementById("about-paragraphs");
  const aboutPhoto = document.getElementById("about-photo");

  if (paragraphsContainer) {
    paragraphsContainer.innerHTML = "";
    CONTENT.about.paragraphs.forEach((text) => {
      const p = document.createElement("p");
      p.textContent = text;
      paragraphsContainer.appendChild(p);
    });
  }

  if (aboutPhoto) {
    aboutPhoto.src = CONTENT.about.photo.src;
    aboutPhoto.alt = CONTENT.about.photo.alt;
  }
}

function buildCurrent() {
  const container = document.getElementById("current-slide-track");
  if (!container) return;

  container.innerHTML = "";

  CONTENT.current.items.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = `current-item${index === 0 ? " active" : ""}`;
    div.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.description}</p>
    `;
    container.appendChild(div);
  });
}

function buildContact() {
  const container = document.getElementById("contact-links");
  if (!container) return;

  container.innerHTML = "";

  CONTENT.contact.links.forEach((item) => {
    const link = document.createElement("a");
    link.className = "contact-link";
    link.href = item.href;
    link.textContent = item.label;
    if (!item.href.startsWith("mailto:")) link.target = "_blank";
    container.appendChild(link);
  });
}

function setupSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      const targetId = link.getAttribute("href");
      if (!targetId || targetId === "#") return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });
}

function setupCurrentSlider() {
  let items = document.querySelectorAll(".current-item");
  const showcase = document.querySelector(".current-showcase");
  const prevButton = document.querySelector(".current-prev");
  const nextButton = document.querySelector(".current-next");

  let currentIndex = 0;
  let touchStartX = 0;
  let touchEndX = 0;
  let wheelLocked = false;
  let animating = false;

  function updateArrowState() {
    if (!prevButton || !nextButton) return;
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === items.length - 1;
  }

  function showItem(index) {
    if (animating) return;
    if (index < 0 || index >= items.length) return;
    if (index === currentIndex) return;

    animating = true;

    items.forEach((item, i) => {
      item.classList.remove("active");
      item.style.opacity = "0";
      item.style.transform = i < index ? "translateX(-22px)" : "translateX(22px)";
    });

    const activeItem = items[index];
    activeItem.classList.add("active");

    requestAnimationFrame(() => {
      activeItem.style.opacity = "1";
      activeItem.style.transform = "translateX(0)";
    });

    currentIndex = index;
    updateArrowState();

    setTimeout(() => {
      animating = false;
    }, 420);
  }

  function nextItem() {
    if (currentIndex < items.length - 1) showItem(currentIndex + 1);
  }

  function prevItem() {
    if (currentIndex > 0) showItem(currentIndex - 1);
  }

  if (prevButton) prevButton.addEventListener("click", prevItem);
  if (nextButton) nextButton.addEventListener("click", nextItem);

  if (showcase) {
    showcase.addEventListener(
      "wheel",
      (e) => {
        const absX = Math.abs(e.deltaX);
        const absY = Math.abs(e.deltaY);

        if (absX <= absY || absX < 10) return;

        e.preventDefault();

        if (wheelLocked || animating) return;
        wheelLocked = true;

        if (e.deltaX > 0) nextItem();
        else prevItem();

        setTimeout(() => {
          wheelLocked = false;
        }, 460);
      },
      { passive: false }
    );

    showcase.addEventListener("touchstart", (e) => {
      touchStartX = e.changedTouches[0].clientX;
    });

    showcase.addEventListener("touchend", (e) => {
      touchEndX = e.changedTouches[0].clientX;
      const swipeDistance = touchStartX - touchEndX;

      if (Math.abs(swipeDistance) > 45) {
        if (swipeDistance > 0) nextItem();
        else prevItem();
      }
    });
  }

  items.forEach((item, i) => {
    if (i === 0) {
      item.classList.add("active");
      item.style.opacity = "1";
      item.style.transform = "translateX(0)";
    } else {
      item.classList.remove("active");
      item.style.opacity = "0";
      item.style.transform = "translateX(22px)";
    }
  });

  updateArrowState();
}

function setupScrollIndicator() {
  const progressCircle = document.querySelector(".progress-circle");
  const progressText = document.getElementById("scroll-indicator-text");
  if (!progressCircle || !progressText) return;

  const circumference = 2 * Math.PI * 26;
  progressCircle.style.strokeDasharray = `${circumference}`;
  progressCircle.style.strokeDashoffset = `${circumference}`;

  function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? scrollTop / docHeight : 0;

    const offset = circumference - progress * circumference;
    progressCircle.style.strokeDashoffset = offset;

    const percent = Math.round(progress * 100);
    progressText.textContent = `${percent}%`;
  }

  window.addEventListener("scroll", updateScrollProgress);
  updateScrollProgress();
}

function setupRevealOnScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    {
      threshold: 0.18
    }
  );

  document.querySelectorAll(".reveal-on-scroll").forEach((el) => observer.observe(el));
}

function init() {
  applySimpleContent();
  buildNav();
  buildStoryLines();
  buildRevealButtons();
  buildProjects();
  buildProcess();
  buildAbout();
  buildCurrent();
  buildContact();
  setupSmoothScroll();
  setupReplayButton();
  resetIntroAnimations();
  setupCurrentSlider();
  setupScrollIndicator();
  setupRevealOnScroll();
}

document.addEventListener("DOMContentLoaded", init);