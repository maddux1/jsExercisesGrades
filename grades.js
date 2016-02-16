var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var gradesVar = document.getElementById("gradesAll");
var a = []; 
var b = [];
var c = [];
var d =[];
var f = [];


for (var i = 0; i < scores.length; i++) {
  if ( scores[i] < 61) {
    f.push(scores[i]);
  } else if ( scores[i] > 60 && scores[i] < 71 ) { 
    d.push(scores[i] );
  } else if ( scores[i] > 70 && scores[i] < 81 ) {
    c.push(scores[i]);
  } else if ( scores[i] > 80 && scores[i] < 91 ) {
    b.push(scores[i]);
  } else {
    a.push(scores[i]);
  }
}

console.log("A's", a.length );
console.log("B's", b.length );
console.log("C's", c.length );
console.log("D's", d.length );
console.log("F's", f.length );

var gradeRange = scores.sort(function(first, second) { return first - second });
// why is chaining not working with .reverse at this end of the above line? or on last line for highest grade?
console.log("Lowest grade =", gradeRange[0] );
console.log("Highest grade =", gradeRange.reverse()[0] );






