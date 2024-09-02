export class Background {
  constructor(canvas) {
    this.canvas = canvas;
    this.groups = new fabric.Group([]);
    this.folderPaths = Array.from({ length: 8 }, (_, i) => `../backImage/clouds${i + 1}`);
    this.imageCounts = [5, 4, 4, 4, 6, 4, 6, 4];
    this.initBackgrounds();
  }
// 宽为572
  initBackgrounds() {
    this.folderPaths.forEach((folderPath, index) => {
      this.createBackground(folderPath, this.imageCounts[index], 1152 * index);
    });
  }

  createBackground(folderPath, imageCount, position) {
    let imgArr = [];
    for (let i = 1; i <= imageCount; i++) {
      let image = new Promise(res => {
        const imgElement = document.createElement('img');
        imgElement.src = `${folderPath}/${i}.png`;
        imgElement.onload = () => {
          res(new fabric.Image(imgElement, { left: position, top: 0 }));
        };
      });
      imgArr.push(image);
    }

    Promise.all(imgArr).then(images => {
      const group = new fabric.Group(images, { scaleX: 2, scaleY: 1.8 });
      this.canvas.add(group);
      this.canvas.sendBackwards(group);
      this.groups.addWithUpdate(group);
    });
  }

  generate() {
    const animate = () => {
      if (this.groups.length === 0) {
        return;
      }
      this.groups.animate('left', -8216, {
        onChange: this.canvas.renderAll.bind(this.canvas),
        duration: 30000,
        easing: fabric.util.ease.linear,
        onComplete: () => {
          requestAnimationFrame(animate);
        }
      });

    };
    requestAnimationFrame(animate);
  };

  goLeft(){
    this.groups.set('left', this.groups.left + 10)
  }
  goRight(){
    this.groups.set('left', this.groups.left - 10)
  }

}