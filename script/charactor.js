import { size, config, directions } from "./config.js"
export class Dog {
  constructor(img, canvas) {
    this.cs = canvas
    this.img = img;
    this.direction = 'right'
    this.currentIndex = 0

    // 是否有动画在播放
    this.playId = null;
    // 是否处于移动状态
    this.moveFlag = false;
  }

  toggleCrop() {
    this.currentIndex++
    if (this.currentIndex === config[this.movement].count - 1) {
      this.currentIndex = 0;
    }
    return this.currentIndex * size.width
  }

  toggleMove() {
    if (!this.moveFlag) return {};

    const dir = directions[this.direction];
    if (!dir) return {}; // 处理未定义的方向  

    const { prop, condition, increment } = dir;
    const newValue = condition(this.img) ? this.img[prop] + increment : this.img[prop];
    const flipBehavior = {
      right: { flipX: false },
      left: { flipX: true }
    }
    return { [prop]: newValue, ...flipBehavior?.[this.direction] };
  }
  play() {
    this.stop(); // 停止之前的动画
    this.img.cropY = config[this.movement].col * size.height
    const myAnimate = () => {
      const animateFrame = (time) => {
        // 记录上一次动画的时间
        if (!this.lastTime) this.lastTime = time;
        const elapsed = time - this.lastTime;
        if (elapsed > config[this.movement].speed) {
          this.img.set({
            cropX: this.toggleCrop(),
            ...this.toggleMove()
          })
          this.cs.renderAll();
          this.lastTime = time;
        }
        this.playId = requestAnimationFrame(animateFrame);
      }
      requestAnimationFrame(animateFrame);
    }
    myAnimate(); // 开始新的动画
  }
  // 使用ID停止动画
  stop() {
    if (this.playId !== null) {
      cancelAnimationFrame(this.playId);
      this.playId = null;
      this.lastTime = null; // 重置时间，以便下次播放时重新开始计时
    }
  }
  move(direction) {
    this.moveFlag = true
    this.direction = direction
  }
  stopMove() {
    this.moveFlag = false
  }

  walk() {
    this.movement = 'walk'
    this.play()
  }
  jump() {
    this.movement = 'jump'
    this.play()
  }
  down() {
    this.movement = 'down'
    this.play()
  }
  run() {
    this.movement = 'run'
    this.play()
  }
  upgrade() {
    this.movement = 'upgrade'
    this.play()
  }
  stay() {
    this.movement = 'stay'
    this.play()
  }
  roll() {
    this.movement = 'roll'
    this.play()
  }
  punch() {
    this.movement = 'punch'
    this.play()
  }
  die() {
    this.movement = 'die'
    this.play()
  }
  attack() {
    this.movement = 'attack'
    this.play()
  }

}
