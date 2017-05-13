/* Type Casting in TypeScript*/


/* Number */
var myNum : number = 5;
console.log(myNum)

/* String */
var myString : string = "Hello Universe";

/* Anything */
var anythingOne : any = "Hey";
anythingOne = 25;

var anythingTwo = "Hey";
anythingTwo = [1, 2, 3, 4];

var anythingThree = "Hey";
anythingThree = { x: 1, y: 2 };

/* Arrays */
// There are two ways of declaring an array type
var arrayNumbersOne : number[] = [1, 2, 3, 4, 5, 6];
var arrayNumbersTwo : Array<number> = [1, 2, 3, 4, 5, 6];

var myObj : = { x: 5, y: 10 };

// function constructor
var MyNode = (function () {
    function MyNode(val) {
        this.val = 0;
        this.val = val;
    }
    MyNode.prototype.doSomething = function () {
        this._priv = 10;
    };
    return MyNode;
}());

var myNodeInstnace = new MyNode(1);

console.log(myNodeInstnace.val);

// This function will return nothing.
function myFunction() {
    console.log("Hello World");
}
*/
