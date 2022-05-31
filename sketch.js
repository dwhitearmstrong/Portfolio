// Initialize the Image Classifier method with MobileNet. A callback needs to be passed.
let classifier;

// A variable to hold the image we want to classify
let img;


function preload() {
  classifier = ml5.imageClassifier('MobileNet');
  img = loadImage('images/peregrine-falcon.jpg');
}

function setup() {
  createCanvas(500, 400);
  classifier.classify(img, gotResult);
  image(img, 0, 0);
}

// A function to run when we get any errors and the results
function gotResult(error, results) {
  // Display error in the console
  if (error) {
    console.error(error);
  } else {
    // The results are in an array ordered by confidence.
    console.log(results);
    let lbldiv = createDiv(`Label: ${results[0].label}`);//look at the p5 documentation and look at the createDiv method
    lbldiv.position(500,235)
    lbldiv.style('font-size','2rem')
    let condiv = createDiv(`Confidence: ${nf(results[0].confidence, 0, 2)}`);
    condiv.style('font-size','2rem')
    condiv.position(500,260)
  }
}
