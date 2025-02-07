//let,var,const

//var :-
//var is the keyword that is use from the starting of javascript
//we can redeclare and update the var variable.
//var keyword support hoisting


//let :-
//let is the keyword that comes in ES6 to resolve issue of var
//we can update but cann't redeclare let variable.

//const :-
//it also comes in ES6.
//we cann't update and redeclare

const author = "Amish"
let a=10;
var b="heyy"
{
    let a="hello"
    var b="20"
    console.log(a)   //hello
    console.log(b)   //20
}
console.log(a)      // 10 
console.log(b)      //20
