// Form Validation
document.getElementById("contact-form").addEventListener("submit", function (event) {
    let email = document.getElementById("email").value;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        event.preventDefault(); 
    }
});

// Feature Spotlight
let buttons = document.querySelectorAll(".project button");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        let details = this.nextElementSibling;
        if (details.style.display === "none" || details.style.display === "") {
            details.style.display = "block";
            this.textContent = "Show Less";
        } else {
            details.style.display = "none";
            this.textContent = "Show More";
        }
    });
});

// Puzzle Unlock
document.getElementById("puzzle-btn").addEventListener("click", function () {
    let answer = document.getElementById("puzzle-answer").value.toLowerCase().trim();

    if (answer === "baking") {
        document.getElementById("secret-section").style.display = "block";
    } else {
        alert("Wrong answer! Try again.");
    }
});
