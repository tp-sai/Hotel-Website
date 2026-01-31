// Contact Form Message
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for contacting us! We will reach out soon.");
    this.reset();
});

// Custom Cursor
const cursor = document.querySelector(".cursor");
const follower = document.querySelector(".cursor-follower");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    follower.style.left = e.clientX - 12 + "px";
    follower.style.top = e.clientY - 12 + "px";
});

const spotlight = document.querySelector(".spotlight");

window.addEventListener("mousemove", (e) => {
    spotlight.style.setProperty("--x", e.clientX + "px");
    spotlight.style.setProperty("--y", e.clientY + "px");
});
