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

// PIXI JS for 3D effect
const containerImg = document.querySelector('.img-pixi');

const widthPixi = 489;
const heightPixi = 694;

let app = new PIXI.Application({width: widthPixi, height: heightPixi});
containerImg.appendChild(app.view);

let img = new PIXI.Sprite.from("pipper.png");

img.width = widthPixi;
img.height = heightPixi;

app.stage.addChild(img);

depthMap = new PIXI.Sprite.from("pipper-map.png");
app.stage.addChild(depthMap);

displacementFilter = new PIXI.filters.DisplacementFilter(depthMap);
app.stage.filters = [displacementFilter];
window.onmousemove = function (e) {
    displacementFilter.scale.x = (window.innerWidth / 2 - e.clientX) / 100;

    displacementFilter.scale.y = (window.innerHeight / 2 - e.clientY) / 100;
}