const mouseCursor = document.querySelector('.cursor');
const navLinks = document.querySelectorAll('.nav-links li');

window.addEventListener('mousemove', cursor);

function cursor(pos) {
    mouseCursor.style.top = pos.pageY + "px";
    mouseCursor.style.left = pos.pageX + "px";
}

navLinks.forEach(link => {
    link.addEventListener("mouseleave", () => {
        mouseCursor.classList.remove("link-grow");
        link.classList.remove('hovered-link');
    });
    link.addEventListener("mouseover", () => {
        mouseCursor.classList.add("link-grow");
        link.classList.add('hovered-link');
    });
});


