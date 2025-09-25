// Simple Greeting Based on Time
const hour = new Date().getHours();
let message = "Hello!";
if (hour < 12) message = "Good Morning!";
else if (hour < 18) message = "Good Afternoon!";
else message = "Good Evening!";

alert(message);

//menu button for phone
document.getElementById('menu-btn').addEventListener('click', () => {
  document.getElementById('nav-menu').classList.toggle('show');
});