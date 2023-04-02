// Get the current hour
const hour = new Date().getHours();

// Set the greeting based on the time of day
let greeting;
if (hour < 12) {
  greeting = 'Good morning';
} else if (hour < 16) {
  greeting = 'Good afternoon';
} else if (hour < 20) {
  greeting = 'Good evening';
} else {
  greeting = 'Good night';
}
document.getElementById('greeting').textContent = greeting;

// Get the current breakpoint based on window width
let breakpoint;
const width = window.innerWidth;
if (width < 567) {
  breakpoint = 'You are currently on a mobile device';
} else if (width < 768) {
  breakpoint = 'You are on a tablet device';
} else if (width > 768) {
  breakpoint = 'Desktop devices are the best to view my website';
}
document.getElementById('breakpoint').textContent = breakpoint;
