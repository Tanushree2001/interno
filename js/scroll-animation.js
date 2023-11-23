$(document).ready(function () {
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to handle the scroll event
  function handleScroll() {
    $('.fade-in-section').each(function () {
      if (isElementInViewport(this)) {
        // Added this class to trigger the animation
        $(this).addClass('in-viewport');
      }
    });
  }

  // Attach the handleScroll function to the scroll event
  $(window).on('scroll', handleScroll);

  // Trigger the handleScroll function once on page load
  handleScroll();
});
