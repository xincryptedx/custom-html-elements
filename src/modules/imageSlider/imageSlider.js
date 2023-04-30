const imageSlider = (imageSources) => {
  const slideCount = 0;
  const currentSlide = 0;

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
  const createElements = () => {
    // Parent
    const parent = document.createElement("div");
    parent.classList.add("parent");

    // Reel
    // Container
    const reelContainer = document.createElement("div");
    reelContainer.classList.add("reel-container");
    parent.appendChild(reelContainer);

    // Buttons
    // Previous
    const previousBtn = document.createElement("div");
    previousBtn.classList.add("previous-btn");
    parent.appendChild(previousBtn);

    // Next
    const nextBtn = document.createElement("div");
    nextBtn.classList.add("next-btn");
    parent.appendChild(nextBtn);

    // Nav Circles
    // Container
    const navCirclesContainer = document.createElement("div");
    navCirclesContainer.classList.add("nav-circles-container");
    parent.appendChild(navCirclesContainer);

    return parent;
  };

  // #endregion
  const setReel = (slideIndex) => {
    // set reel position based on slideCount and currentSlide
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

  const parent = createElements();

  return { parent };
};

export default imageSlider;
