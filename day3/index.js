let rawInput = require('./input');
let input = rawInput.input;

let x;
let y;
//let meChar;

x = 0;
y = 0;

const myPosition = (inp, x, y, d) => {
  let meChar = inp[y][0][x];

  if (d === '-d' || d === '--debbug') {
    let meCharYline = input.length;
    let meCharXline = input[y][0].length;
    console.log('meCharXline: ', meCharXline);
    console.log('meCharYline: ', meCharYline);
    console.log('inp: ', inp);
    console.log('x: ', x);
    console.log('y: ', y);
    console.log('meChar: ', meChar);
    return meChar;
  } else {
    return meChar;
  }
};

console.log(myPosition(input, 1, 0));
//meCharXline = input[y][0].length;
//meCharYline = input.length;

//console.log('x: ', x);
//console.log('y: ', y);
//console.log('meCharXline: ', meCharXline);
//console.log('meCharYline: ', meCharYline);
//console.log('meChar: ', meChar);
