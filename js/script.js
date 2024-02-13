let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('open')
};
window.onscroll = () => {
    menu.classList.remove('bx-x')
    navbar.classList.remove('open')
};

let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('dark');
    }else{
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('dark')
    }
}
// Get elements
const orderBtn = document.getElementById('order-btn');
const signupMenu = document.getElementById('signup-menu');

// Show signup menu when "Order" button is clicked
orderBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent default action of the link
    signupMenu.style.display = 'block'; // Show signup menu
});

// Hide signup menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (!signupMenu.contains(event.target) && event.target !== orderBtn) {
        // If the clicked element is not inside the signup menu and not the "Order" button
        signupMenu.style.display = 'none'; // Hide signup menu
    }
});
