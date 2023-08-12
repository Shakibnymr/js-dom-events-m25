console.log("this is separate JS file");
// opt 1: directly set on the html element
// onclick option 2: 
// IMPORTANT: we will use this
function makeRed() {
  document.body.style.backgroundColor = "red";
}
// option 3
const makeBlueButton = document.getElementById("make-blue");
makeBlueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}
// option 3 another 
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple'
}
// option 4
const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click',makePink)

function makePink (){
  document.body.style.backgroundColor = 'pink';
}
// opt 4 another
const makeGreenButton = document.getElementById('make-green');
makeGreenButton.addEventListener('click',function makeGreen(){
 document.body.style.backgroundColor = 'green';
})
// opt 4 final
// [we will use this sometimes]
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod'
})