function setup(){
  canvas=createCanvas(350,350);
  canvas.center();
  background("white");
 canvas.mouseReleased(classifyCanvas);
 synth=window.speechSynthesis;

}

function clearcanvas(){
  background("white");  
}

function preload(){
  classifier=ml5.imageClassifier('DoodleNet');
}

function classifyCanvas(){
 classifier.classify(canvas,getresult);
}


function getresult(error,results){
if(error){
console.error(error);
}
console.log(results);

document.getElementById('sketch').innerHTML='Sketch - ' +results[0].label;
document.getElementById('confidence').innerHTML='Confidence - ' + Math.round(results[0].confidence * 100) + '%'

utterThis = new SpeechSynthesisUtterance(results[0].label);
synth.speak(utterThis);
}

function draw(){
  strokeWeight(8);
  stroke("green");
  if(mouseIsPressed){
line(pmouseX,pmouseY,mouseX,mouseY);
  }
}
