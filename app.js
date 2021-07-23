/* chapters 31 to 34 */


// task no 1

var date = new Date();

console.log(date);


// task 2


var monthsArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var date = new Date();
var month = date.getMonth();
alert(monthsArr[month]);


// task no 3

var date = new Date();
var thatDay = date.toString().slice(0, 3);
//console.log(typeof thatDay);
alert("Today is " + thatDay);


// task no 4

var newDates = new Date();
var todayday = newDates.getDay();
if (todayday == 6 || todayday == 0) {
    alert("Today is Fun Day");
};

// task no 5

var currMonths = new Date();
var newCurr = currMonths.getDate();
if (newCurr >= '1' && newCurr <= '15') {

    alert("it's first fifteen day of month");
}
else {
    alert("it's Last fifteen day of months");
}

// task no 6 

document.write("<br/><br/><br/><br/>");
var today = new Date();
var otherDay = new Date("January 1, 1970");
var msToday = today.getTime();
var msOtherDay = otherDay.getTime();
var msDiff = msToday - msOtherDay;
var mDiff = msDiff / (3600000);
document.write("Current Date: " + today + "<br>");
document.write("Elapsed milliseconds since January 1, 1970: " + msDiff + "<br>");
document.write("Elapsed minutes since January 1, 1970: " + mDiff)


// task no 7

var curr_hour = new Date();
var hourNow = curr_hour.getHours();
if (hourNow <= "12") {
    alert("It's Am")
} else {
    alert("It's Pm")
};

// task no 8
var laterDate = new Date("Thu December 31, 2021");
document.write("Later date: " + laterDate);

// task no 9

var firstRamadan = new Date("June 18, 2015");
var todaysDay = new Date();
var days1 = (todaysDay.getTime() - firstRamadan.getTime()) / (1000 * 60 * 60 * 24);
days1 = Math.floor(days1);
document.write(days1 + " days have passed since 1st Ramadan,2015 ");

// task no 10
document.write("<br/><br/><br/><br/>");
var ref = new Date("Dec 05, 2015 22:50:16");
var date = new Date("Jan 01, 2015");
var sec = (ref.getTime() - date.getTime()) / (1000 * 60);
sec = Math.ceil(sec);
document.write("On reference date " + ref + "<br>");
document.write(sec + " seconds had passed since beginning of 2015 ");

// task no 11
document.write("<br/><br/><br/><br/>");
var cur = new Date();
document.write("Current date : " + cur);
var agotime = new Date();
agotime.setHours(agotime.getHours() - 1);
document.write("<br>1 hour ago, it was " + agotime);

// task no 12
document.write("<br/><br/><br/><br/>");
var curDate = new Date();
var lstDate = new Date();
lstDate.setFullYear(lstDate.getFullYear() - 100);
document.write("Current date: " + curDate + ",<br>100 years back, it was " + lstDate);

//task no 13
var age = prompt("Enter your age");
var currentDate = new Date();
var curYear = currentDate.getFullYear();
brtYear = curYear - age;
document.write("Your age is " + age + "<br>Your birth year is " + brtYear);

// task no 14
document.write("<br/><br/><br/><br/>");
document.write("<h1>K-ELECTRIC BILL<h1/>");
var nowDate = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Deember"];
var curMonth = months[nowDate.getMonth()];
var customerName = "Sameer Faisal";
var units = 411.55894723;
var amountPerUnit = 16;
var lateSurcharge = 350;
var amountDue = parseFloat((units * amountPerUnit).toFixed(2));
var amountAftDue = parseFloat((amountDue + lateSurcharge).toFixed(2));;
document.write("<h3>Customer name: <b>" + customerName + "</b><br>Month: <b>" + curMonth + "</b><br>Number of units: <b>" + units + "</b><br>Charges per unit: <b>" + amountPerUnit + "</b><br><br>Net amount payable(within due date): <b>" + amountDue + "</b><br>Late payment surcharge: <b>" + lateSurcharge + "</b><br>Gross amount payable after due date: <b>" + amountAftDue + "</b></h3>");


// // chapters no 35 to 37

// Task no 1

var fun_Time = new Date();
function time() {
    document.write(fun_Time);
};
time();


// task no 2

var user_Name = prompt("Enter Your Name");
var user_Last_Name = prompt("Enter Your Last");

function user_Greetings() {

    document.write("<br> " + "<br> " + "Assalam o Alaikum " + user_Name + user_Last_Name);

};

user_Greetings();


// task no 3

var user_First_Number = +prompt("Enter Your First Number");
var user_Last_Number = +prompt("Enter Your Last Number ");
function sum_Of_Number() {
    document.write("<br> " + "<br> " + user_First_Number + user_Last_Number);
}
sum_Of_Number();


// Task no 4

var ist_Num = prompt("Enter First Number");
var last_Num = prompt("Enter Last Num");
var user_Ope = prompt("Enter Your Operator");

function calculator(ist_Num, last_Num, user_Ope) {
    if (user_Ope === "+") {
        return (parseFloat(ist_Num) + parseFloat(last_Num))
    } else if (user_Ope === "-") {
        return (parseFloat(ist_Num) - parseFloat(last_Num))
    } else if (user_Ope === "*") {
        return (parseFloat(ist_Num) * parseFloat(last_Num))
    }

    else if (user_Ope === "/") {
        return (parseFloat(ist_Num) / parseFloat(last_Num))
    }
    else if (user_Ope === "%") {
        return (parseFloat(ist_Num) % parseFloat(last_Num))
    }
    else{
        alert("Write the Correct operater")
    }
}

document.write("The desire result of " + ist_Num + " and   " + last_Num + " is " + calculator(ist_Num, last_Num, user_Ope) + "<br>" );

//  task no 5

var sqr_pro = prompt("Enter Number for squaring");
function square (sqr_pro){
    return(parseFloat(sqr_pro) * parseFloat(sqr_pro))
}
document.write("The Square of " + sqr_pro + " is " + square(sqr_pro) + "<br>"  );


// // task no 6 

var start_count = prompt("Enter number from start counting");
var last_count = prompt("Enter ending number of counting");

function count(start_count, last_count) {
    for (var i = start_count; i <= last_count; i++) {
        document.write(i + "<br>");
    }
}
count(start_count, last_count);

// // task no 9

function total_Area(width, height) {
    return width * height;
}
// Passing values
document.write("area is " + total_Area(65, 60) + "<br>");
var width = 30;
var height = 70;

// Passing variables
document.write("another area is " + total_Area(width, height));



// // task no 10


document.write("<br/><br/><br/><br/>");

function palindromeCheck(string) {
    var string2 = "";
    for (i = string.length - 1; i >= 0; i--) {
        string2 += string[i];
    }
    if (string2 == string) {
        document.write(string + " is a palindrome word");
    } else {

    }
}
var word = prompt("Enter a word");
palindromeCheck(word);

// // task 11

function convFirst(string) {
    var letter = " ";
    for (j = 0; j < string.length; j++) {
        if (letter === " ") {
            letter = string[j];
            document.write(letter.toUpperCase());
        } else {
            letter = string[j];
            document.write(letter);
        }
    }
}
convFirst(prompt("Enter a string"));

// // task no 12
document.write("<br/><br/>");

var longestSTR = prompt("Enter a string to extract longest word");
document.write("Longest Word: " + longestWord(longestSTR));

function longestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = 0;
    var word = "";
    for (var i = 0; i < strSplit.length; i++) {
        if (strSplit[i].length > longestWord) {
            longestWord = strSplit[i].length;
            word = strSplit[i];
        }
    }
    return word;
}

//task no 13
document.write("<br/><br/>");

function charCounter(string, char) {
    var count = 0;
    for (i = 0; i < string.length; i++) {
        if (string[i] === char) {
            count++;
        }
    }
    return count;
}
var count = charCounter("JSResources.com", "o");
document.write("'o' occured " + count + " times in JSResources.com");

// // task no 14
document.write("<h3>The Geometrizer<h3/>");

function calcCircumference(r) {
    var c = 2 * 3.142 * r;
    return c;
}

function calcArea(r) {
    var a = 3.142 * r * r;
    return a;
}
var radius = prompt("Enter radius of circle");
document.write("The circumference is " + calcCircumference(radius) + "<br>");
document.write("The area is " + calcArea(radius));










