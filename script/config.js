export const config = {
  walk: {
    count: 7,
    col: 0,
    speed: 20,
  },
  jump: {
    count: 7,
    col: 1,
    speed: 20,
  },
  down: {
    count: 7,
    col: 2,
    speed: 20,
  },
  run: {
    count: 9,
    col: 3,
    speed: 10,
  },
  upgrade: {
    count: 11,
    col: 4,
    speed: 20,
  },
  stay: {
    count: 5,
    col: 5,
    speed: 20,
  },
  roll: {
    count: 7,
    col: 6,
    speed: 30,
  },
  punch: {
    count: 7,
    col: 7,
    speed: 100,
  },
  die: {
    count: 12,
    col: 8,
    speed: 30,
  },
  attack: {
    count: 4,
    col: 9,
    speed: 10,
  },
};

export const size = {
  width: 575,
  height: 523,
}

const border = {
  borderLeft: 20,
  borderRight: 930,
  borderTop: 10,
  borderBottom: 530,
}

export const directions = {

  right: {
    prop: 'left',
    condition: (img) => img.left < border.borderRight,
    increment: 10
  },
  left: {
    prop: 'left',
    condition: (img) => img.left > border.borderLeft,
    increment: -10
  },
  up: {
    prop: 'top',
    condition: (img) => img.top > border.borderTop,
    increment: -10
  },
  down: {
    prop: 'top',
    condition: (img) => img.top < border.borderBottom,
    increment: 10
  }
};
