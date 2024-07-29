const button = document.getElementById('share');
const tooltip = document.getElementById('tooltip');
const author = document.getElementById('author');
const socials = document.getElementById('socials');
const bottomContent = document.getElementById('bottom-content');

let display = false;

// Handle button click event
const buttonClick = () => {
  const isMobile = window.innerWidth <= 767;
  display = !display;

  button.classList.toggle('clicked', display);
  tooltip.classList.toggle('visible', display && !isMobile);
  author.classList.toggle('hidden', display && isMobile);
  socials.classList.toggle('hidden', !(display && isMobile));
  bottomContent.classList.toggle('color', display && isMobile);
};

button.addEventListener('click', buttonClick);

tooltip.classList.add('hidden');
socials.classList.add('hidden');

// Handle responsive changes dynamically
window.addEventListener('resize', () => {
  if (display) {
    const isMobile = window.innerWidth <= 767;
    tooltip.classList.toggle('visible', !isMobile);
    author.classList.toggle('hidden', isMobile);
    socials.classList.toggle('hidden', !isMobile);
    bottomContent.classList.toggle('color', isMobile);
  }
});

// Check if the click is outside the button and tooltip
document.addEventListener('click', (event) => {
  if (display && !button.contains(event.target) && !tooltip.contains(event.target)) {
    display = false;
    button.classList.remove('clicked');
    tooltip.classList.add('hidden');
    tooltip.classList.remove('visible');
    author.classList.remove('hidden');
    socials.classList.add('hidden');
    bottomContent.classList.remove('color');
  }
});
