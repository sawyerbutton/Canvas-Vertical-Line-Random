// Import stylesheets
import './style.css';

// Write TypeScript code!
var myCanvas: any;
myCanvas = document.getElementById('myCanvas');
var drawingContext = myCanvas.getContext('2d');

var color = '#ffffff';
var numberOfStripes = 50;
let yArray = [];
for (let j = 0; j < numberOfStripes; j++) {
  let temp = parseInt((Math.random() * 3).toString());
  let start = 0;
  yArray[j] = [];
  for (let m = 0; m < temp; m++) {
    let y1 = start + parseInt((Math.random() * 200).toString());
    let y2 = y1 + parseInt((Math.random() * 200).toString());
    let tempY1Y2 = {
      y1,
      y2,
    };
    start = tempY1Y2.y2 + 10;
    yArray[j].push(tempY1Y2);
  }
}
for (var i = 0; i < numberOfStripes; i++) {
  var thickness = 500 / numberOfStripes;
  drawingContext.beginPath();
  drawingContext.strokeStyle = color;
  drawingContext.lineWidth = 1;
  let temp = yArray[i];
  for (let k = 0; k < temp.length; k++) {
    drawingContext.moveTo(i * thickness + thickness / 2, temp[k].y1);
    drawingContext.lineTo(i * thickness + thickness / 2, temp[k].y2);
    drawingContext.stroke();
  }
}
