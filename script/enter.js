import { Dog } from "./charactor.js";
import { Background } from "./background.js";
import { size } from "./config.js"

const canvas = new fabric.StaticCanvas("cs", {
  backgroundColor: "#fff",
});
const imgElement = document.getElementById("img");
const img = new fabric.Image(imgElement, {
  left: 0,
  top: 250,
  cropX: 0,
  cropY: 0,
  height: size.height,
  width: size.width,
});
img.scale(0.1);

const dog = new Dog(img, canvas);
canvas.add(dog.img);
dog.walk();
const bg = new Background(canvas);

window.onload = () => {
  bg.generate()
}

window.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') {
    dog.move('up')

  }
  if (e.key === 'ArrowDown') {
    dog.move('down')
  }
  if (e.key === 'ArrowLeft') {
    dog.move('left')
  }
  if (e.key === 'ArrowRight') {
    dog.move('right')
  }
})
window.addEventListener('keyup', () => {
  dog.stopMove()
})

