// console.log("hello");
// const toggleBtn = document.querySelector('.bar__icon');
// const toggleBtnIcon = document.querySelector('.bar__img');
// const dropDownMenu = document.querySelector('.dropdown_menu');

// toggleBtn.onclick = function () {
//   dropDownMenu.classList.toggle('open')
//   console.log('hi');
//   const isOpen = dropDownMenu.classList.contains('open')
  
//   togg
//   // toggleBtnIcon.classList = isOpen
// }

document.addEventListener('DOMContentLoaded', function () {
  // Get the elements
  const barIcon = document.querySelector('.bar__icon');
  const dropdownMenu = document.querySelector('.dropdown__menu');

  // Add a click event listener to the bar icon
  barIcon.addEventListener('click', function () {
    // Toggle the 'open' class on the dropdown menu
    dropdownMenu.classList.toggle('open');
  });
});