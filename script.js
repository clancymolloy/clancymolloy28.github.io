// script.js

document.addEventListener("DOMContentLoaded", function () {

    // Create a print button
    const printButton = document.createElement("button");

    printButton.textContent = "Print / Save as PDF";
    printButton.className = "print-button";

    // Add the button to the page
    document.body.prepend(printButton);

    // Print the resume when clicked
    printButton.addEventListener("click", function () {
        window.print();
    });

});
