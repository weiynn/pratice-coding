console.log('H');

/*Class 44. http://blog.devslopes.com/p/92d3a293-ad00-4201-8e0e-6cc960be5746/*/

/*for(var x = 0; x <= 15; x++){
    if(x % 2 == 0){
    console.log(x +" is even.");
    } else{
        console.log(x +" is odd.");
    }};*/

/*var s = '';
for (var a = 0; a < 5; a++){
    s += '*';
    console.log(s);
};*/

/*
for (var i = 1; i <= 100; i++){
    if (i % 3 === 0 && i % 5 === 0){
       console.log('CodeMonkey'); 
    } else if(i % 5 == 0){
        console.log('Monkey');
    } else if(i % 3 === 0){
        console.log('Code');
    } else{
        console.log(i);
    }
}
*/

/*function area(wid,len){
    return wid * len;
}

var rectangels = [];
rectangels.push(area(10,15));
rectangels.push(area(50,2));
rectangels.push(area(7,18));

console.log(rectangels);*/

/*var cashInBank = 20000;

function purchase(price){
   if(cashInBank >= price){ 
       cashInBank -= price;
       console.log('Purchase successful !');
   } else {
       console.log('Ohoh, no way~, insufficient funds.');
   }
};

purchase(9000);
console.log(cashInBank);

purchase(898);
console.log(cashInBank);

purchase(2004);
console.log(cashInBank);

purchase(9000);
console.log(cashInBank);*/ //沒有var的function不能用在Array.

/*var cashInBank = 20000;

var purchase = function(price){
    if(cashInBank >= price){ 
       cashInBank -= price;
       console.log('Purchase successful !');
   } else {
       console.log('Ohoh, no way~, insufficient funds.');
   }
};
var printName = function(first,last){
    console.log('First Name: ' + first + ', Last Name : ' + last);
};
var applyCreditCard = function(CreditSroce,soul){
    // somthing
};

var bankOperation = [];
bankOperation.push(purchase);
bankOperation.push(printName);
bankOperation.push(applyCreditCard);

printName('Weiyn','He');*/

/*
var mySalary = 20000;

var costEveryMonth = {
    rent : 9000,
    phone : 898,
    insurance : 2004,
    trans : 1000
};


var count = function(){
    for (var i = 0, i < costEveryMonth.length, i++){
        var cost = costEveryMonth[i].value
        if(cashInBank >= cost){ 
        mySalary -= cost;
        
    }
}


console.log(costEveryMonth);
*/


// class 46
/*var shapeArea = function(name,x,y){
if(name === 'triangle'){
return x * y * 0.5;
} else if(name === 'circle'){
return Math.PI * x * x;
} else if(name === 'rectangle'){
return x * y;
}
}

var count = [];

count.push(shapeArea('triangle',30,20));
count.push(shapeArea('circle',5));
count.push(shapeArea('rectangle',20,20));

console.log(count);*/

/*var s1 = {
name : 'Weiyn',
age : 26,
height : 156
};

var s2 = {
    name : 'Bobo',
    age : 28,
    height : 168
};

var s3 = {
    name : 'Joy',
    age : 23,
    height : 170
};

var student = [
    s1,s2,s3
];

var callAge = function(){
    for(var i = 0; i < student.length; i++){
        console.log(student[i].age);
    };
};

callAge();*/ // for(;;)!!! is ;


// class 47
/*
function Student(first,last,age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.greeting = function(){
        return "Hi, I'm " + this.firstName + this.lastName + ", and I'm " + this.age + " years olds :)";
    };
}

studentsList = [];

studentsList.push(new Student('Amy','Wang',30));
studentsList.push(new Student('John','Lin',29));

console.log(studentsList);

for(var i = 0; i < studentsList.length; i++){
    var stu = studentsList[i];
    console.log(stu.greeting());
}
*/

/*var SS = studentsList[0];

for (var key in SS){
    console.log(SS[key]);
}*/ // for in

/*var s1 = new Student('Weiyn','He',26);

console.log(s1);
console.log(s1.greeting());*/

// class 48

/*
if there is a 'this' in a function which you want to use,
you have to correct what is the 'this',
the function is your need.
*/ // .bind(this)

/*
this.car = 'HONDA';
    
var Wei = {
    car : 'KIWI',
    getCar : function(){
        return this.car;
    }};
    
console.log(Wei.getCar()); //KIWI

var getCar2 = Wei.getCar;

console.log(getCar2()); //HONDA

var getCarReal = Wei.getCar.bind(Wei);

console.log(getCarReal); //ƒ (){ return this.car; }

console.log(getCarReal()); // KIWI
*/





