
document.write("<hr>");
document.write("<b>" + "JavaScript Assignment 6" + "</b>" + "<br>");
document.write("<hr>");



//========= String Method
document.write("<hr>");
document.write("<b>" + "String Method" + "</b>" + "<br>");

document.write("<b>" + "Chapter 21 to 25" + "</b>" + "<br><br>");
document.write("<hr>");



document.write("<hr>");
//======Q1 Start

document.write("<b>" + "1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name." + "</b>" + "<br><br>");

// var firstName = prompt("Enter your first name: ");
// var lastName = prompt("Enter your last name: ");
// var fullName = firstName + lastName;

// alert("Welcome " + fullName);

//======Q1 end




document.write("<hr>");
//======Q2 Start

document.write("<b>" + "2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of userinput in your browser" + "</b>" + "<br><br>");

//input from user
// var favModel = prompt("Enter your favorite mobile phone model:");

//checking  number of strings
// var userInputLength = favModel.length;

// document.write("My favorite phone is: "+favModel+"<br>"+"length of string: " + userInputLength);


//======Q2 end




document.write("<hr>");
//======Q3 Start

document.write("<b>" + "3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser." + "</b>" + "<br><br>");

//declare variable
var word = "Pakistan";

//finding index
var findindex = word.indexOf("n");

// show in browser
document.write("String: " + word + "<br>" + "Index of 'n' is: " + findindex);



//======Q3 end




document.write("<hr>");
//======Q4 Start

document.write("<b>" + "4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser." + "</b>" + "<br><br>");

//declare variable
var word1 = "Hello World";

//finding index
var findLastIndex = word1.lastIndexOf("l");

// show in browser
document.write("String: " + word1 + "<br>" + "Last index of 'l' is: " + findLastIndex);



//======Q4 end




document.write("<hr>");
//======Q5 Start

document.write("<b>" + "5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser." + "</b>" + "<br><br>");

//declare variable
var word2 = "Pakistani";

//find the char at 3rd index
var findChar = word2.charAt(3);

//show in browser
document.write("String: " + word2 + "<br>" + "Characher at index 3: " + findChar);


//======Q5 end




document.write("<hr>");
//======Q6 Start

document.write("<b>" + "6. Repeat Q1 using string concat() method." + "</b>" + "<br><br>");

// var firstName = prompt("Enter your first name: ");
// var lastName = prompt("Enter your last name: ");
// var fullName = firstName.concat(lastName); 

// document.write("Welcome " + fullName);


//======Q6 end




document.write("<hr>");
//======Q7 Start

document.write("<b>" + "7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser." + "</b>" + "<br><br>");

//declare variable
var text = "Hyderabad";

//replacing Hyder to Islam
var newText = text.replace("Hyder", "Islam");

//show on browser
document.write("City: " + text + "<br>" + "After replaacement: " + newText);


//======Q7 end




document.write("<hr>");
//======Q8 Start

document.write("<b>" + "8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser." + "</b>" + "<br><br>");

//declare variable
var message = "Ali  and  Sami are best friends. They play cricket  and  football together.";

//replacing Hyder to Islam
var newMessage = message.replace(/ and /g, "&");

//show on browser
document.write("Message: " + message + " " + "<br>" + "After replaacement: " + newMessage);



//======Q8 end




document.write("<hr>");
//======Q9 Start

document.write("<b>" + "9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser." + "</b>" + "<br><br>");

var str = "472";
var num = 472;

// converting string to number
var strToNum = Number(str);

//checking data type 
var strType = typeof (str);

//conveting number to string
var numToStr = num.toString()

//checking data type 
var numType = typeof (num);


//show in browser
document.write("Value: " + strToNum + "<br>" + "Type: " + strType + "<br>" + "Value " + numToStr + "<br>" + "Type: " + numType);





//======Q9 end




document.write("<hr>");
//======Q10 Start

document.write("<b>" + "10. Write a program that takes user input. Convert and show the input in capital letters.." + "</b>" + "<br><br>");

//taking input from user
// var inputForCapLetter =  prompt("Enter char to covert it into capital letters:");

//convertng input to capital letters
// var capLetter = inputForCapLetter.toUpperCase();

//show in browser
// document.write("User input: "+inputForCapLetter+"<br>"+"Upper Case: "+capLetter);


//======Q10 end




document.write("<hr>");
//======Q11 Start

document.write("<b>" + "11. Write a program that takes user input. Convert and show the input in title case." + "</b>" + "<br><br>");

//taking input from user
// var inputTitleCase =  prompt("Enter char to covert it into title case: ");

//selecting first char by slice mwthod
// var firstChar = inputTitleCase.slice(0,1);

// converting first char to uppercase
// firstChar = firstChar.toUpperCase();

//converting other char to lower case rather than 1
// var otherChar = inputTitleCase.slice(1);

//converting other into lowercase
//  otherChar = otherChar.toLowerCase();

//concating firstchar and otherChar
// var titleCase1 = firstChar + otherChar;

//show in browser
// document.write("User input: " + inputTitleCase + "<br>"+"Title Case: " + titleCase1);



//======Q11 end




document.write("<hr>");
//======Q12 Start

document.write("<b>" + "12. Write a program that converts the variable num to string. Remove the dot to display “3536” display in your browser." + "</b>" + "<br><br>");

//Declare variable
var num = 35.36;

//Converting number to string
var num1ToStr = num.toString()

//find the char at 2rd index
var findChar = num1ToStr.charAt(2);

//Removing the dot
var rem = findChar.replace(".", "3536");

//result in browser
document.write("Number: " + num + "<br>" + "Result: " + rem);

//======Q12 end




document.write("<hr>");
//======Q13 Start

document.write("<b>" + "13. Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ ." + "</b>" + "<br><br>");

// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

// var userName = prompt("Enter your surname: ");

//finding first char
// var firstChar = userName.charAt(0);

// //finding last char
// var lastChar = userName.charAt(userName.length - 1);

// var text = firstChar + lastChar;
// //finding all
// for (var i = 0; i <  text.length; i++) {
//     if ( text.charAt(i)==   text.charAt(33);) {

//         alert("Please enter a valid username. ");

//     }
// }



//======Q13 end




document.write("<hr>");
//======Q14 Start

document.write("<b>" + " 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not. Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability. Example:." + "</b>" + "<br><br>");

var arr = ['cake', 'apple pie', 'cookie', 'chips', 'patties'];

//input from user
// var items = prompt("Search Items: ");

//find index
// var find = arr.indexOf(items);

//coverting user input to lowercase
// var char = items.toUpperCase();


// for (var i = 0; i < arr.length; i++) {
//     if (items == arr[i]) {
//         document.write(arr[i] + " is " + "<b>" + "available " + "</b>" + "at index " + find + "in our bakery.");
//     } else if (items !== arr[i]) {
//         document.write(" We are sorry." + items + "<b>" + "is not available " + "</b>"  + "in our bakery.");
//         break;
//     } else if (arr[i] == char) {
//         alert("Please enter in lowercase.");
//     }
// }



//======Q14 end




document.write("<hr>");
//======Q15 Start

document.write("<b>" + " 15. Write a program to take password as an input from user. The password must qualify these requirements:" + "</b>" + "<br><br>");

// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.

//taking input from user
// var pass = prompt("Enter your password.");


// for(var i = 0; i < pass.length; i++){
// if((pass.charAt(i)) > 127 && (pass.charAt(i) ) ){
//     alert("enter in valid");
// }
// }



//======Q15 end




document.write("<hr>");
//======Q16 Start

document.write("<b>" + " 16. Write a program to convert the following string to an array using string split method." + "</b>" + "<br><br>");

// var university = “University of Karachi”;
// Display the elements of array in your browser.


var university = 'University of Karachi';

university.split([]);

for (var i = 0; i < university.length; i++) {
    document.write(university[i] + "<br>");

}


//======Q16 end




document.write("<hr>");
//======Q17 Start

document.write("<b>" + " 17. Write a program to display the last character of a user input." + "</b>" + "<br><br>");

// var userInput = prompt("Enter your country name");

//finding last index
// var findLastChar = userInput.slice(-1);

// document.write("User input: "+ userInput + "<br>"+"Last character of input: "+findLastChar);


//======Q17 end




document.write("<hr>");
//======Q18 Start

document.write("<b>" + " 18. You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string." + "</b>" + "<br><br>");

var str = 'The quick brown fox jumps over the lazy dog';

// for (var i = 0; i < str.length ; i++){


// }




//========= 
document.write("<hr>");
document.write("<b>" + "End of Chapter 21 to 25 " + "</b>" + "<br>");
document.write("<hr>");




//========= Math Method Start
document.write("<hr>");
document.write("<b>" + "Start Math  Method" + "</b>" + "<br>");

document.write("<b>" + "Start Chapter 26 to 30" + "</b>" + "<br><br>");
document.write("<hr>");






document.write("<hr>");
//======Q1 Start

document.write("<b>" + " 1. Write a program that takes a positive integer from user & display the following in your browser." + "</b>" + "<br><br>");

// input from user
// var user = Number(prompt("Enter number"));

// converting into int
// var int = parseInt(user);

// // a. number
// var num = Number(int);

// // b. round off value of the number
// var roundoff = Math.round(int);

// // c. floor value of the number
// var floorval = Math.floor(int);

// // d. ceil value of the number
// var ceilVal = Math.ceil(int);

// //show on browser
// document.write("number: "+num+"<br>"+"round of value: "+roundoff+"<br>"+"floor value: "+floorval+"<br>"+"ceil value: "+ceilVal);



//======Q1 End

document.write("<hr>");
//======Q2 Start

document.write("<b>" + "2. Write a program that takes a negative floating point number from user & display the following in your browser." + "</b>" + "<br><br>");

// // input from user
// var user = Number(-prompt("Enter number"));

// var float = parseFloat(user);
// // a. number
// var num = Number(float);

// // b. round off value of the number
// var roundoff = Math.round(float);

// // c. floor value of the number
// var floorval = Math.floor(float);

// // d. ceil value of the number
// var ceilVal = Math.ceil(float);

// //show on browser
// document.write("number: "+num+"<br>"+"round of value: "+roundoff+"<br>"+"floor value: "+floorval+"<br>"+"ceil value: "+ceilVal);





//======Q2 End

document.write("<hr>");
//======Q3 Start

document.write("<b>" + "3. Write a program that displays the absolute value of a number." + "</b>" + "<br><br>");

// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var Val = -4;

// //finding absolute 
// var abVal = Math.abs(Val);

//  document.write("The absolute value of -4 is: "+abVal);




//======Q3 End

document.write("<hr>");
//======Q4 Start

document.write("<b>" + "4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.:." + "</b>" + "<br><br>");


var dicVal = Math.floor(Math.random() * 4);
var dicVal2 = Math.floor(Math.random() * 6);

document.write("random disc value: " + dicVal + "<br>" + " random disc value: " + dicVal2);



//======Q4 End

document.write("<hr>");
//======Q5 Start

document.write("<b>" + "5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser." + "</b>" + "<br><br>");


var heads = 1;
var tails = 0;

/* Random number 0 or 1  */
var toss = Math.floor(Math.random() * 2);
/* If statement */
if (toss === 0) {

    document.write((heads += 1) + " <br>" + " ramdom coin value: " + "Head");

} else {

    document.write((tails += 1) + " <br>" + " ramdom coin value: " + "Tails ");
}


//======Q5 End

document.write("<hr>");
//======Q6 Start

document.write("<b>" + " 6. Write a program that shows a random number between 1 and 100 in your browser." + "</b>" + "<br><br>");

//Generating random number from 1 to 100
var rdnum = Math.floor(Math.random() * 100);

document.write("ramdom number between 1 to 100: " + rdnum);


//======Q6 End

document.write("<hr>");
//======Q7 Start

document.write("<b>" + "7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:" + "</b>" + "<br><br>");


// a. 50
// b. 50kgs
// c. 50.2kgs
// // d. 50.2kilograms

// var user = Number(prompt("Enter your wright"));

// var parse =parseFloat(user);

// document.write("The weight of user is: "+   parse );
// document.write("The weight of user is: "+   parse +" kgs");
// document.write("The weight of user is: "+   parse +" kgs");
// document.write("The weight of user is: "+   parse +" kilograms");


//======Q7 End

document.write("<hr>");
//======Q8 Start

document.write("<b>" + "8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user." + "</b>" + "<br><br>");


// var UserInput = Number(prompt("Enter Secrete number"));

// //Generating random number from 1 to 10
// var rdnum = Math.floor(Math.random() *10);

// //match with user number
// if (UserInput == rdnum){
//     alert("Congratulation, you are the winner!");

// }else{
//     alert("Try again.");
// }




//========= 
document.write("<hr>");
document.write("<b>" + "End of Chapter 26 to 30 " + "</b>" + "<br>");
document.write("<hr>");



//========= Date Method Start

document.write("<hr>");
document.write("<b>" + "Start Date Method " + "</b>" + "<br>");
document.write("<b>" + "Start Chapter 31 to 34" + "</b>" + "<br>");
document.write("<hr>");






document.write("<hr>");
//======Q1 Start

document.write("<b>" + "1. Write a program that displays current date and time in your browser" + "</b>" + "<br><br>");

var date = new Date();

document.write(date);





//======Q1 End


document.write("<hr>");
//======Q2 Start

document.write("<b>" + "2. Write a program that alerts the current month in words. For example December" + "</b>" + "<br><br>");


var current = new Date();

var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var ForMonth = month[current.getMonth()];

document.write("Current Month: " + ForMonth);


//======Q2 End


document.write("<hr>");
//======Q3 Start

document.write("<b>" + "2. Write a program that alerts the current month in words. For example December" + "</b>" + "<br><br>");

var current = new Date();

var day = new Array();

day[0] = "Sunday";
day[1] = "Monday";
day[2] = "Tuesday";
day[3] = "Wednesday";
day[4] = "Thursday";
day[5] = "Friday";
day[6] = "Saturday";

var ForDay = day[current.getDay()];

document.write("Today is: " + ForDay);



//======Q3 End


document.write("<hr>");
//======Q4 Start

document.write("<b>" + "4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today." + "</b>" + "<br><br>");



var current = new Date();

var day = new Array();

day[0] = "Sunday";
day[1] = "Monday";
day[2] = "Tuesday";
day[3] = "Wednesday";
day[4] = "Thursday";
day[5] = "Friday";
day[6] = "Saturday";

var ForDay = day[current.getDay()];


if ((ForDay == 'Sunday') || (ForDay == 'Saturday')) {
    document.write("It's fun day.");
} else {
    document.write("It's not fun day.Do your job with heart");
}





//======Q4 End


document.write("<hr>");
//======Q5 Start

document.write("<b>" + "5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”." + "</b>" + "<br><br>");

var current = new Date();

var date = current.getDate();


if (date < 16) {
    document.write("First fifteen days of the month.");
} else {
    document.write("Last days of the month");
}


//======Q5 End


document.write("<hr>");
//======Q6 Start

document.write("<b>" + "6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.." + "</b>" + "<br><br>");


var date = new Date();

//millisecond since midnight, jan 1 1970
var time = date.getTime();

//millisecond since midnight, jan 1 1970

var minutes = (time * 60 * 60);

document.write("Current Date: " + date + "<br>");
document.write("Elapsed miliseconds since January 1, 1970: " + time + "<br>");
document.write("Elapsed minutes since January 1, 1970: " + minutes);









//======Q6 End


document.write("<hr>");
//======Q7 Start

document.write("<b>" + "7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”" + "</b>" + "<br><br>");


var timeForCheck = new Date();

var gettime = timeForCheck.getHours();


if (gettime < 12 && gettime > 1) {
    document.write("it's AM");
} else {
    document.write("it's PM");
}





//======Q7 End


document.write("<hr>");
//======Q8 Start

document.write("<b>" + "8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate." + "</b>" + "<br><br>");


// var cuurent = new Date();
// var lasterDate = (current - ('Thur Dec 31 2020 00:00:00'))
// document.write(lasterDate);








//======Q8 End


document.write("<hr>");
//======Q9 Start

document.write("<b>" + " 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015" + "</b>" + "<br><br>");


// var date = new Date(Jun, 18, 2015);

// var today = new Date();

// var diff = today - date;

// document.write(diff);




//======Q9 End


document.write("<hr>");
//======Q10 Start

document.write("<b>" + " 10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015." + "</b>" + "<br><br>");


var date = new Date();
var second = date.getSeconds();

//total second from beginning of 2020
var totalSec = (((60 * 60 * 24 * 30) * (5)) + ((60 * 60 * 24) * (21)) + second); //first 1 month * 5 and then 1 day * 21 days.

document.write("on reference date " + date + "<br><br>");
document.write(totalSec + " seconds had passed since biginning of 2020");



//======Q10 End


document.write("<hr>");
//======Q11 Start

document.write("<b>" + "11. Create a Date object for the current date and time Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.." + "</b>" + "<br><br>");



var date = new Date();


document.write("Currnet date: " + date + "<br><br>");

date.setHours(1);
document.write("1 hour ago it was: " + date + "<br><br>");





//======Q11 End


document.write("<hr>");
//======Q12 Start

document.write("<b>" + "12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?." + "</b>" + "<br><br>");



var date = new Date();

//current
document.write("Currnet date: " + date + "<br><br>");

date.setFullYear(date.getFullYear() - 100);
//100 year back

document.write("100 years back, it was: " + date + "<br><br>");



//======Q12 End


document.write("<hr>");
//======Q13 Start

document.write("<b>" + "13. Write a program to ask the user about his age. Calculate and show his birth year in your browser." + "</b>" + "<br><br>");


// var dob =  Number(prompt("Enter your age: ","23"));


// // get user year 

// // current year
// var current = new Date();
//  var  year = current.getFullYear(); 


// //geting year of user birth
//  var dobYear =   year - dob; 

// document.write("Yout age is "+dob+"<br><br>");
// document.write("Yout birth year  is  "+dobYear);




//======Q13 End


document.write("<hr>");
//======Q14 Start

document.write("<b>" + "14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:." + "</b>" + "<br><br>");


// a. Customer Name
// b. Current Month 
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date) Where,


// a. Customer Name
var myName = 'Jeo'

// c. Number of units
var numOfUnit = 410;

// d. Charges per unit
var chargePerUnit = 16


// e. Net Amount Payable (within Due Date)
var netAmount = numOfUnit * chargePerUnit;

// f. Late Payment Surcharge
var LatePay = 300;


// g. Gross Amount Payable (after Due Date) Where,
var grossAmount =  netAmount + LatePay;



// b. Current Month 
var current = new Date();

var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var ForMonth = month[current.getMonth()];




document.write("<b>"+"K-ELECTRICITY BILL"+"</b>"+"<br><br>");

document.write("Customer name: "+myName+"<br>");
document.write("Month: "+ForMonth+"<br>");
document.write("Number of Units: "+numOfUnit+"<br>");
document.write("Charges per Unit: "+chargePerUnit+"<br>");
document.write("Net Amount Payable (Within Due Date): "+netAmount+"<br>");
document.write("Late payment charges: "+LatePay+"<br>");
document.write("Gross Amount Payable (After Due Date): "+grossAmount+"<br>");







//========= 
document.write("<hr>");
document.write("<br><br><br><b>" + "End of Chapter 31 to 34 " + "</b>" + "<br>");
document.write("<hr>");



//========= Function Start

document.write("<hr>");
document.write("<b>" + "Start Function " + "</b>" + "<br>");
document.write("<b>" + "Start Chapter 35 to 38" + "</b>" + "<br>");
document.write("<hr>");






document.write("<hr>");
//======Q1 Start

document.write("<b>" + "1. Write a function that displays current date & time in your browser." + "</b>" + "<br><br>");



function Time() {
    var now = new Date() ;
   
    document.write("Current time: "+now) ;
   }

Time();





//==============End Q1


document.write("<hr>");
//======Q2 Start

document.write("<b>" + "2. Write a function that takes first & last name and then it greets the user using his full name." + "</b>" + "<br><br>");

// function greet() {
//     Fname = ' Rai '
//     Lname = ' Geo '
   
//     alert("Welcome "+Fname+Lname) ;
//    }

// greet();



//==============End Q2


document.write("<hr>");
//======Q3 Start

document.write("<b>" + "3. Write a function that adds two numbers (input by user) and returns the sum of two numbers." + "</b>" + "<br><br>");

// var num1 = Number(prompt("Enter First number"));
// var num2 = Number(prompt("Enter Second number"));


// function sum(num1,num2) {

//     document.write(num1+num2) ;
//    }

// sum(num1,num2);





//==============End Q3


document.write("<hr>");
//======Q4 Start

document.write("<b>" + "4. Calculator: Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser" + "</b>" + "<br><br>");


// var num1 = Number(prompt("Enter First number","5"));
// var op = prompt("Enter operator","*");
// var num2 = Number(prompt("Enter Second number","3"));


// function Calculator(num1,num2) {

//     if(op === '+'){
//         document.write(num1+num2);
//     }else if(op === '-'){
//         document.write(num1-num2);
//     }
//     else if(op === '/'){
//         document.write(num1/num2);
//     }
//     else if(op === '*'){
//         document.write(num1*num2);
//     }
    
//    }

//    Calculator(num1,num2);






//==============End Q4


document.write("<hr>");
//======Q5 Start

document.write("<b>" + "5. Write a function that squares its argument" + "</b>" + "<br><br>");



function Square(num) {
    var num = 9;
    document.write(num*num) ;
   }

   Square(num);



//==============End Q5


document.write("<hr>");
//======Q6 Start

document.write("<b>" + "6. Write a function that computes factorial of a number." + "</b>" + "<br><br>");


function factorial(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorial(num - 1));
    }
  }

  var f= factorial(5);

  document.write("The factorial 5 is: "+f);



//==============End Q6


document.write("<hr>");
//======Q7 Start

document.write("<b>" + "7. Write a function that take start and end number as inputs & display counting in your browser." + "</b>" + "<br><br>");


// var  CountingStrt = prompt("Enter starting number of counting :")
// var  CountingEnd = prompt("Enter ending number of counting :")


// function Counting() {
//     for(i = CountingStrt; i <= CountingEnd ; i++ ){
//         document.write([i]+" ");
//     }
    
// }

// Counting();



//==============End Q6


document.write("<hr>");
//======Q7 Start

document.write("<b>" + "8. Write a nested function that computes hypotenuse of a right angle triangle." + "</b>" + "<br><br>");

// Hypotenuse2 = Base2 + Perpendicular2

// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()


// function alculateHypotenuse() {
    
    
//     function calculateSquare() {
        
    
//     }
    
// }









//==============End Q7


document.write("<hr>");
//======Q8 Start

document.write("<b>" + "9. Write a function that calculates the area of a rectangle." + "</b>" + "<br><br>");

// A = width * height
//  Pass width and height in following manner:
// i. Arguments as value
// ii. Arguments as variables


// function AreaOfRectangle() {
//     var widthValue = 58;
//     var heightValue = 44;

//     var Area = widthValue*heightValue;
//     document.write("Area of rectangle is: "+Area);
    
// }

// AreaOfRectangle();













//==============End Q8


document.write("<hr>");
//======Q9 Start

document.write("<b>" + "10. Write a JavaScript function that checks whether a passed string is palindrome or not?" + "</b>" + "<br><br>");










//==============End Q10


document.write("<hr>");
//======Q11 Start

document.write("<b>" + "11. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case " + "</b>" + "<br><br>");
// var strNew = 'the quick brown fox';

// function UppercaseOnly() {
   
//     //to uppercase
//     var capital = strNew.toUpperCase("The Quick Brown Fox");

//     document.write(capital);

        
// }

// document.write("EXAMPLE STRING: "+strNew +"<br><br>");

// UppercaseOnly();










//==============End Q11


document.write("<hr>");
//======Q12 Start

document.write("<b>" + "12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. " + "</b>" + "<br><br>");

// function findLongestWord(str) {
//     var strSplit = str.split(' ');
//     var longestWord = "";
//     for(var i = 0; i < strSplit.length; i++){
//       if(strSplit[i].length > longestWord){
//       longestWord = strSplit[i].length;
//        }
//     }
//     return longestWord;
//   }

// var l=   findLongestWord("The quick brown fox jumped over the lazy dog");
// document.write(l);














//==============End Q12


document.write("<hr>");
//======Q13 Start

document.write("<b>" + "13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. Sample arguments : 'JSResourceS.com', 'o' " + "</b>" + "<br><br>");











//==============End Q13


document.write("<hr>");
//======Q14 Start

document.write("<b>" + "4. The Geometrizer Create 2 functions that calculate properties of a circle, using the definitions here" + "</b>" + "<br><br>");



// Create a function called calcCircumference:
// • Pass the radius to the function.
// • Calculate the circumference based on the radius, and output
// "The circumference is NN".
// Create a function called calcArea:
// • Pass the radius to the function.
// • Calculate the area based on the radius, and output "The area
// is NN".
// Circumference of circle = 2 πr
// Area of circle  = πr2


//Circumference of circle

// function calcCircumference(r) {
    // var r = 34;
//     var π = 3.14523;

//     return (2*r*π);
    
// }

//  var f= calcCircumference(22);
// document.body.innerHTML="Circumference of circle Is L  "+f;



// function Areaofcircle(r) {
    
//     var π = 3.14523;

//     return (2*(r*r)*π);
    
// }

//  var output = Areaofcircle(44);
// document.body.innerHTML="Area of circle is :  "+output;