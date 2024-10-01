// Open modal function
function openModal(project) {
    var modal = document.getElementById("modal");
    var title = document.getElementById("modal-title");
    var description = document.getElementById("modal-description");

    if (project === 'project1') {
        title.innerText = "Weather Forecasting Website";
        description.innerText = "A website providing weather updates using APIs. Built with HTML, CSS, and JavaScript.";
    } else if (project === 'project2') {
        title.innerText = "E-commerce Website";
        description.innerText = "A fully functional e-commerce platform built with HTML, CSS, and JavaScript.";
    } else if (project === 'project3') {
        title.innerText = "Tic-Tac-Toe Game";
        description.innerText = "A simple game built with HTML, CSS, and JavaScript.";
    } else if (project === 'project4') {
        title.innerText = "More Websites (Coming Soon)";
        description.innerText = "Additional projects showcasing design and functionality.";
    }

    modal.style.display = "block";
}

// Close modal function
function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Close modal if user clicks outside the content
window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Scroll animation function
window.addEventListener("scroll", function () {
    var sections = document.querySelectorAll(".section");

    sections.forEach(function (section) {
        var sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("section-visible");
        }
    });
});
