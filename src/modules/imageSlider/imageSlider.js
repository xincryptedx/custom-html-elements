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
  /*
    Helper methods
        -createImageSlides(sources, reel) = Go through sources and if valid format 
         add an image element, set its src, classes, and append to the reel. slideCount++

        -createNavCircles(container) = For each img element, add a nav circle, set its data-index, 
         classes, append to container, and set its click event to JumpTo. 

    Static HTML
        -main container
            -imagesContainer
                -imagesReel
                    -*slides*(createImageSlides)
            -previousBtnContainer
                -img of arrow
            -nextBtnContainer
                -img of arrow
            -navCirclesContainer
                -*navCircles*(createNavCircles)
  */
  const createSlides = (reel) => {
    for (let i = 0; i < validatedSources.length; i += 1) {
      const slide = document.createElement("img");
      slide.src = validatedSources[i];
      slide.classList.add("slide");

      const spacer = document.createElement("div");
      spacer.classList.add("spacer");

      reel.appendChild(spacer);
      reel.appendChild(slide);

      slideCount += 1;
    }
  };

  const createNavCircles = (container) => {
    for (let i = 0; i < slideCount; i += 1) {
      const navCircle = document.createElement("div");
      navCircle.setAttribute("data-index", `${i}`);
      navCircle.classList.add("nav-circle");
      container.appendChild(navCircle);
    }
  };

  const createElements = () => {
    // Parent
    const parent = document.createElement("div");
    parent.classList.add("parent");

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

  const incrementReel = (next = true) => {
    console.log("Inc");
    let incrementer;
    if (next) incrementer = 1;
    else incrementer = -1;

    // Set current slide and jump to start or end when needed
    currentSlide += incrementer;
    if (currentSlide < 0) currentSlide = slideCount - 1;
    if (currentSlide > slideCount - 1) currentSlide = 0;

    setReel(currentSlide);
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
    // call setReel(slideIndex)
  };

  // Init
  setReel(0, reel);

  return { parent };
};

export default imageSlider;
