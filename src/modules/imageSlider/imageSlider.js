const imageSlider = () => {
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
  // #region Auto advance slide every x seconds
  // #endregion
};

export default imageSlider;
