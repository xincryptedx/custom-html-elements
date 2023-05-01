import previousArrow from "./icons/arrowBack.svg";
import nextArrow from "./icons/arrowForward.svg";
import "./style.css";

const imageSlider = (imageSources) => {
  let slideCount = 0;
  let currentSlide = 0;
  const slideWidth = 180;
  const slideSpacerWidth = 100;

  // Check imageSources is array
  let validatedSources;
  if (!Array.isArray(imageSources)) validatedSources = [];
  else validatedSources = imageSources;
  // Trim invalid entries
  for (let i = 0; i < validatedSources.length; i += 1) {
    if (typeof validatedSources[i] !== "string") {
      validatedSources.splice(i, 1);
      i = -1;
    }
  }

  // #region Method for creating and returning html parent element
  const createSlides = (reel) => {
    for (let i = 0; i < validatedSources.length; i += 1) {
      // Slide
      const slide = document.createElement("img");
      slide.src = validatedSources[i];
      slide.classList.add("slide");
      // Spacer on left
      const spacer = document.createElement("div");
      spacer.classList.add("spacer");
      // Append
      reel.appendChild(spacer);
      reel.appendChild(slide);
      // Spacer on right for last img
      if (i === validatedSources.length - 1) {
        const lastSpacer = document.createElement("div");
        lastSpacer.classList.add("spacer");
        reel.appendChild(lastSpacer);
      }
      // Track total slides
      slideCount += 1;
    }
  };

  const navCircles = {};

  const createNavCircles = (container) => {
    for (let i = 0; i < slideCount; i += 1) {
      // Circle
      const navCircle = document.createElement("div");
      navCircle.setAttribute("data-index", `${i}`);
      navCircle.classList.add("nav-circle");
      // Fill
      const fill = document.createElement("div");
      fill.classList.add("fill");
      // Append
      navCircle.appendChild(fill);
      container.appendChild(navCircle);
      // Add nav circle to object that stores all nav circles
      navCircles[i] = navCircle;
    }
  };

  const createElements = () => {
    // Parent
    const parent = document.createElement("div");
    parent.classList.add("image-slider");

    // Reel
    // Container
    const reelContainer = document.createElement("div");
    reelContainer.classList.add("reel-container");
    parent.appendChild(reelContainer);
    // Reel div
    const reel = document.createElement("div");
    reel.classList.add("reel");
    reelContainer.appendChild(reel);
    // Slides
    createSlides(reel);

    // Buttons
    // Previous
    const previousBtn = document.createElement("div");
    previousBtn.classList.add("previous-btn");
    parent.appendChild(previousBtn);
    // Icon
    const previousIcon = document.createElement("img");
    previousIcon.src = previousArrow;
    previousIcon.classList.add("previous-icon");
    previousBtn.appendChild(previousIcon);

    // Next
    const nextBtn = document.createElement("div");
    nextBtn.classList.add("next-btn");
    parent.appendChild(nextBtn);
    // Icon
    const nextIcon = document.createElement("img");
    nextIcon.src = nextArrow;
    nextIcon.classList.add("next-icon");
    nextBtn.appendChild(nextIcon);

    // Nav Circles
    // Container
    const navCirclesContainer = document.createElement("div");
    navCirclesContainer.classList.add("nav-circles-container");
    parent.appendChild(navCirclesContainer);
    // Circles
    createNavCircles(navCirclesContainer);

    return { parent, reel, nextBtn, previousBtn };
  };

  // Create the elements
  const elements = createElements();
  const { parent } = elements;
  const { reel } = elements;
  const { nextBtn } = elements;
  const { previousBtn } = elements;

  // #endregion
  const setReel = (slideIndex) => {
    const positionZero = `-${slideSpacerWidth / 2}px`;
    const reelToSet = reel;

    let reelPosition;

    if (slideIndex === 0) reelPosition = positionZero;

    if (
      Number.isInteger(slideIndex) &&
      slideIndex > 0 &&
      slideIndex <= slideCount - 1
    ) {
      reelPosition = `-${
        slideSpacerWidth / 2 + slideIndex * (slideWidth + slideSpacerWidth)
      }px`;
    }

    reelToSet.style.left = reelPosition;
  };

  const setSelectedNavCircle = () => {
    Object.keys(navCircles).forEach((key) => {
      if (key === currentSlide.toString()) {
        navCircles[key].classList.add("selected");
      } else navCircles[key].classList.remove("selected");
    });
  };

  const incrementReel = (next = true) => {
    let incrementer;
    if (next) incrementer = 1;
    else incrementer = -1;

    // Set current slide and jump to start or end when needed
    currentSlide += incrementer;
    if (currentSlide < 0) currentSlide = slideCount - 1;
    if (currentSlide > slideCount - 1) currentSlide = 0;

    setReel(currentSlide);
    setSelectedNavCircle();
  };

  let autoAdvanceInterval = setInterval(incrementReel, 5000);

  const resetAutoAdvanceInterval = () => {
    clearInterval(autoAdvanceInterval);
    autoAdvanceInterval = setInterval(incrementReel, 5000);
  };

  nextBtn.addEventListener("click", () => {
    incrementReel(true);
    resetAutoAdvanceInterval();
  });
  previousBtn.addEventListener("click", () => {
    incrementReel(false);
    resetAutoAdvanceInterval();
  });

  const jumpToSlide = (slideIndex) => {
    const intIndex = parseInt(slideIndex, 10);
    setReel(intIndex);
    currentSlide = intIndex;
    setSelectedNavCircle();
  };

  Object.keys(navCircles).forEach((key) => {
    navCircles[key].addEventListener("click", () => {
      jumpToSlide(navCircles[key].dataset.index);
      resetAutoAdvanceInterval();
    });
  });

  // Init
  setReel(0, reel);
  setSelectedNavCircle();

  return { parent };
};

export default imageSlider;
