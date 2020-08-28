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

let app = new PIXI.Application({width: 489, height: 694});
document.body.appendChild(app.view);

let img = new PIXI.Sprite.from("pipper.png");

img.width = 489;
img.height = 694;

app.stage.addChild(img);

depthMap = new PIXI.Sprite.from("pipper-map.png");
app.stage.addChild(depthMap);

displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);
app.stage.filters = [displacementFilter];
window.onmousemove = function (e) {
    displacementFilter.scale.x = (window.innerWidth / 2 - e.clientX) / 100;
    
    displacementFilter.scale.y = (window.innerHeight / 2 - e.clientY) / 100;
}