// Assuming the code is in a file named 'hamburger.js' or similar.

document.body.innerHTML = `
  <div class="click_Icon"></div>
  <div class="nav-list"></div>
`;

const hamburger = document.querySelector('.click_Icon');
const navList = document.querySelector('.nav-list');

hamburger.addEventListener('click', () => {
  navList.classList.toggle('active');
});

test('should toggle "active" class on click', () => {
  // Initially, the class should not be present
  expect(navList.classList.contains('active')).toBe(false);

  // Simulate the click event
  hamburger.click();

  // After first click, the class should be added
  expect(navList.classList.contains('active')).toBe(true);

  // Simulate the second click event
  hamburger.click();

  // After second click, the class should be removed
  expect(navList.classList.contains('active')).toBe(false);
});
