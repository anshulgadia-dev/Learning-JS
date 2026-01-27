console.log("Hello World")


//Number
let a = 10
console.log(a)
console.log(typeof(a))


// String
let b = "anshul"
console.log(b)
console.log(typeof(b))


//Boolean
let c = false
console.log(c);
console.log(typeof(c));


//undefined
let d;
console.log(d);
console.log(typeof(d));


//null
let e = null;
console.log(e);
console.log(typeof(e));



// objects
let course = {
    title : "Javascript",
    desc : "Learn Javascript from zero",
    duration : 5
}
console.log(course)
console.log(typeof(course))
console.log(course.desc)
console.log(course['title'])



// Arrays
let courses = ["HLD","LLD","DSA",6,true,null];
console.log(courses);
console.log(courses[0])
console.log(courses[3])
console.log(courses[5])
console.log(typeof(courses))


let students = [
    {
        name : "anshul",
        age : 21
    },
    {
        name : "Ramesh",
        age : 23
    },
    {
        name : "Keshav",
        age : 22
    }
]
console.log(students);
console.log(students[2]);



// Functions
function addTwoNumbers(a1, a2){
    return a1 + a2;
}

console.log(addTwoNumbers(4,5));



const diffTwoNumbers = (b1 , b2) => {
    if(b1 > b2) return b1 - b2;
    return b2 - b1;
}

console.log(diffTwoNumbers(10,5));



function operation(ope , a1, a2)
{
    return ope(a1 , a2);
}

console.log(operation(addTwoNumbers,10,20));
console.log(operation(diffTwoNumbers,10,20));



function Hello(){
    return function(){
        console.log("Hello World");
    }
}

let h = Hello();
console.log(h)
console.log(h())



// DOM Manipulation
const resultDiv = document.getElementsByClassName('result-div')[0];
const click_me_btn = document.getElementById('click-me-btn')
click_me_btn.addEventListener('click',function(){
    const h1 = document.createElement('h1');
    h1.innerText = Date.now();
    resultDiv.appendChild(h1)
})

