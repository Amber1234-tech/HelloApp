function person(pname, age, gender) {
  this.name = pname;
  this.age = age;
  this.gender = gender;
}

var p1 = new person("Amber", 21, "Female");
var p2 = new person("John", 23, "Male");

var outputDiv = document.getElementById('output');
outputDiv.innerHTML = p1.name + " is " + p1.age + " years old and is a " + p1.gender + ".<br>";

document.write(p2.name + " is " + p2.age + " years old and is a " + p2.gender + ".");

var courses = new Array("HTML", "CSS", "JS");

var outputs = document.getElementById('array-list');

courses.forEach((course) => {
  var listItem = document.createElement('li');
  listItem.innerText = course;
  outputs.appendChild(listItem);
});

//arrays are also dynamic in JS you can declare an array and add elements to it later
var names = new Array();
names[0] = "Amber";
names[1] = "John";
names[2] = "Doe";

//or use the array literal notation to create an array and add elements to it later
var cars = ["BMW", "Mercedes", "Audi"];

//JS arrays have many useful built-in properties and methods: length returns the length of the array
var getArrayLength = document.getElementById('array-length');
var arrayLength = cars.length;
getArrayLength.innerText = "The length of the cars array is: " + arrayLength;

//the concat() method allows you to combine two arrays and make a totally new array
var longArray = courses.concat(names);
longArray.forEach((item) => {
  var listItem = document.createElement('li');
  listItem.innerText = item;
  outputs.appendChild(listItem);
});

//associative arrays are arrays with named indexes. In JS, objects are associative arrays.
var person = [];
person["name"] = "Amber";
person["age"] = "20";
person["gender"] = "Female";

var assArray = document.getElementById('ass-array');
//wanted to insert the persons name into the ass-array <p> but after the words I already had in there.
assArray.insertAdjacentText('beforeend', person["name"]);
//If you use a named index, JavaScript will redefine the array to a standard object.

//math object in JS has many useful properties and methods.
var mathob = document.getElementById('math');

mathob.innerText = "The value of PI is: " + Math.PI;
mathob.innerText += "\nThe value of E is: " + Math.E;
mathob.innerText += "\nThe value of Math.sqrt(4) is: " + Math.sqrt(4);
mathob.innerText += "\nThe value of Math.ceil(Math.random() * 10): " + Math.ceil(Math.random() * 10);

// var n = prompt("Enter a number: ");
// var answer = Math.sqrt(n);
// alert("The square root of " + n + " is " + answer);

var d =  new Date(); //stores the current date and time.
var setdate = document.getElementById('date');
setdate.insertAdjacentText('beforeend', d);

//update the time every second function
function updateTime() {
  var now = new Date();
  var time = now.toLocaleTimeString();
  document.getElementById('time').innerHTML = time;
}
setInterval(updateTime, 1000);
