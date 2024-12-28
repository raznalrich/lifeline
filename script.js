let toggle = true; // Initial state
const mobileQuery = window.matchMedia("(max-width: 768px)");
if(mobileQuery.matches){
    nodisplay();
}

console.log(document.getElementById("menubar"));

document.getElementById("menubar").addEventListener("click", () => {
    if (toggle) {
        display(); // Show the menu
    } else {
        nodisplay(); // Hide the menu
    }
});

function display() {
    let addnewmenu = document.getElementById("list");
    addnewmenu.style.display = "flex"; // Display the menu
    toggle = false; // Update toggle state
    console.log(toggle);
}

function nodisplay() {
    let addnewmenu = document.getElementById("list");
    addnewmenu.style.display = "none"; // Hide the menu
    toggle = true; // Update toggle state
    console.log(toggle);
}

const form = document.getElementById('contact-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const emailBody = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;

    // Replace 'your_email@example.com' with your actual email address
    const mailtoLink = `mailto:binduaravind@orktsgamil.com?subject=Contact Form Submission&body=${encodeURIComponent(emailBody)}`;

    window.location.href = mailtoLink;
});