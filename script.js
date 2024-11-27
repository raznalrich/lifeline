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
