// HELLO WORLD APP
var msg = "Hello World";
console.log(msg);

console.log("hello world !!!");

/// test strings
var productName = "samuel effiong",
  productId = "samuel effiong";
console.log(productName, productId);

var dick = "samuel'h bullos";
console.log(dick);

// intergers
var price = 5.0,
  price2 = 10.0;
console.log(price + price2)
var filename = "SAMUEL EFFIONG",
  filename2 = "JACOB SAMUEL";
console.log(filename + " " + filename2);

// intergers calculations
var love = 12,
  love2 = 4;
var answer = love + love2;
console.log(answer);

// intergers calculations
var love3 = 12,
  love4 = 4;
var answer1 = love3 / love4;
console.log(answer1);

// intergers calculations
var love5 = 12,
  love6 = 4;
var answer2 = love5 - love6;
console.log(answer2);

// intergers calculations
var love7 = 12,
  love8 = 4;
var answer3 = love7 % love8;
console.log(answer3);

// intergers calculations
var love9 = 12,
  love09 = 4;
var answer4 = love9 * love09;
console.log(answer4);

var answer5 = 3+4*5;
console.log(answer5);

var answer5 = (3+4)*5;
console.log(answer5);

// /// block scope variables
// // program to show the change in global variable
// let a = "hello";

// console.log(a);

// function greet() {
//     a = 3;
//     console.log(a);
// }

// value classification
var value = " LIGHT";
console.log(value);

var value = " LIGHT";
console.log( typeof (value));

var value1 = ' LIGHT ';
console.log( typeof (value1));

var value2 =  344 ;
console.log( typeof (value2));


var value3 =  '344 ';
console.log(value3 + value3);

var value4 =  344 ;
console.log(value4 + value4);

var value5 =  344.11 ;
console.log(value5 + value5);

var value6 =  344.11 + 344.33;
console.log(value6);

var jimak = 10/0;
console.log(jimak);

var jimak1 = -10/0;
console.log(jimak1);

var jimak2 = -0/0;
console.log(jimak2);


var jimak3 = 0/0;
console.log(jimak3);


var jimak3 = 0/0;
console.log(jimak3 , typeof(jimak3));

// boolean tricks
var futminna = true;
console.log(futminna, typeof(futminna));

var futminna1 = false;
console.log(futminna1, typeof(futminna1));

/// Identifying Underfine and Null in code
var calculations;
console.log(calculations);

calculations1=null;
console.log(calculations1);

var calculations;
console.log(calculations, typeof(calculations));

calculations = null;
console.log(calculations, typeof(calculations));


/// creating an array
var countdown=[];
console.log(countdown,typeof(countdown));

// Initialize an Array
var countdown1=[1,2,3,4,5,6,7,8,9,10];
console.log(countdown1,typeof(countdown1));

// Acccessing an Array by method of subscripting
console.log(countdown1[0]);   // for 1
console.log(countdown1[1]);
console.log(countdown1[2]); 
console.log(countdown1[3]) ;
console.log(countdown1[4]) ;
console.log(countdown1[5]) ;
console.log(countdown1[6]) ;
console.log(countdown1[7]) ;
console.log(countdown1[8]) ;
console.log(countdown1[9]) ;
// console.log(countdown1[10]) ;


/// STRING INDEX EXAMPLES
var names = ['JESUS', 'song ','man' ,'king', "jews"];
console.log(names, typeof(names));


var names1 = ['JESUS', 'song ','man\'s' ,'king', "jews"];
console.log(names1, typeof(names1));

var names2 = ['JESUS', 'song ','man\'s' ,'king', "jews's"];
console.log(names2, typeof(names2));
console.log(names2[0]);   // for 1
console.log(names2[1]);
console.log(names2[2]); 
console.log(names2[3]) ;
console.log(names2[4]) ;
// console.log(names2[5]) ;
// console.log(names2[6]) ;
// console.log(names2[7]) ;
// console.log(names2[8]) ;
// console.log(names2[9]) ;
// console.log(names2[10]) ;


var city=[ 'JESUS', 'song ','man\'s' ,'king', "jews's" ];
console.log(city);

var method=['JESUS',80, true];
console.log(method, typeof(method) , method.length);

// advance method to add an array
var cup = [];
cup.push(50);
cup.push(80);
cup.push(90);
cup.push(-80);
cup.push(100);
console.log(cup);

/// How to add ,remove values from array
cup.pop(); // remove the last value in cup
console.log(cup);
cup.shift(); // remove the first value in cup 
console.log(cup);
cup.splice(1,2);// remove any index number from the 2 to count 2
console.log(cup);

cup.splice(11,2,3,4,5,7); /// add new element to this array cup 
console.log(cup);

//OBJECT 
function changepla(pla) {
  pla.n ="clubs";
}

 var pla = [
 
 {
   n:'samuel',
   p:29,
 },
 {

  n:'samuel',
   p:45,
 }
 
 ];


changepla(pla);
console.log(pla.n);

console.log(pla[0].n);
console.log(pla[1].p);



// javascript built in object
// 1) math object
// 2) Date object
// 3)String object
// 4) Number  object

var sam = Math.random();
console.log(sam);

var sam1 = Math.round();
console.log(sam1);

var  sam2 = Math.random()*45;
console.log(sam2);

var sam3= Math.random()*89;
sam3 = Math.trunc(sam3);
console.log(sam3);

var sam4 = Date();
console.log(sam4);

var sam5 = new Date().toDateString();
console.log(sam5);

var samu = new Date().toTimeString();
console.log(samu);

var sa = new Date().toLocaleDateString();
console.log(sa);

var sa1 = 'hello world';
sa1 = sa1.toLowerCase();
console.log(sa1);

var sa2 = 'hello world';
sa2 = sa2.toUpperCase();
console.log(sa2);