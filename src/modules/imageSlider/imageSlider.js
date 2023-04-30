import previousArrow from "./icons/arrowBack.svg";
import nextArrow from "./icons/arrowForward.svg";
import "./style.css";

const imageSlider = (imageSources) => {
  let slideCount = 0;
  const currentSlide = 0;
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

    return { parent, reel };
  };

  // #endregion
  const setReel = (slideIndex) => {
    // set reel position based on slideCount and currentSlide
    // 0 should be -1/2 of spacer width
    // 1 should be
  };

  const incrementReel = (next = true) => {
    // Increment the currentSlide and then call setReel(currentSlide+/- based on next)
  };

  const jumpToSlide = (slideIndex) => {
    // call setReel(slideIndex)
  };

  const autoAdvance = () => {
    // Set timer, call setReel(currentSlide + 1), reset timer
  };

  // Initialize the image slider
  const elements = createElements();
  const { parent } = elements;
  const { reel } = elements;
  reel.style.left = `-${slideSpacerWidth / 2}px`; // Replace with method later

  return { parent };
};

export default imageSlider;
