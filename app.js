/*********************************************Chapter 21-25***************************************************** */
//Task 1
var fname = prompt("Enter your first name");
var lname = prompt("Enter your last name");
var fullName = fname+" " +lname;
alert("Hello "+fullName+ " Have a nice day");
//Task 2
var phone = prompt("Enter your favorite mobile phone model");
document.write("<br>My favorite mobile is: " +phone+"<br> Length of string: "+phone.length);
//Task 3
document.write("<br>String: Paksitani <br> Index of 'n' is "+"Pakistan".indexOf('n'));
//Task 4
document.write("<br> String: Hello World <br> Last Index of 'l' is " +"Hello World".lastIndexOf('l'));
//Task 5
document.write("<br> String: Pakistani <br> Character at Index 3 is  " +"Pakistani".charAt(3));
//Task 6
var fname = prompt("Enter your first name");
var lname = prompt("Enter your last name");
var fullName = fname.concat(" " + lname);
alert("Hello "+fullName+ " Have a nice day");
//Task 7
document.write("<br> City: Hyderabad <br> After Replacement: " + "Hyderabad".replace("Hyder","Islam"));
//Task 8
var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write("<br> " +message.replace(/and/g, "&"));
//Task 9
var mystr = "472";
var no = Number(mystr);
document.write("<br> Value: "+mystr+ "<br> Type: "+typeof(mystr)+"<br> Value: "+num+ "<br> Type: "+typeof(no));
//Task 10
var input = prompt("Write peanuts in lowercase","peanuts");
document.write("<br>User input: "+input+ " <br> Upper Case: "+input.toUpperCase());
//Task 11
var input2 = prompt("Write javascript","javascript");
document.write("<br>User input: "+input2+ " <br> Title Case: "+input2[0].toUpperCase()+input2.slice(1));
//Task 12
var num = 35.36;
var str = String(num);
document.write("<br>Number: "+num+"<br> Result: "+str.replace(".",""));
//Task 13
var username  = prompt("Write Username","Cm@d");
for(var i = 0; i<username.length; i++){
    if(username[i]=='!'||username[i]=='@'||username[i]=='.'||username[i]==','){
        alert("Please enter a valid username");
        break;
    }
}
//Task 13
var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var choice = prompt("Wellcome to ABC Bakery. What do you want to order sir/ma'am","cookie").toLowerCase();
for(i = 0; i<A.length; i++){
    if(choice ===A[i]){
        break;
    }
}
if(i===A.length){
        alert(" We are sorry! "+choice+ " is not available in our bakery.");
}
else{
    alert(choice + " is present at index "+i);
}
//Task 14
var password = prompt("Enter password");
var count = 0;
var count2 = 0;
var check = 0;
document.write("<br>Entered Password: "+password);
for(var i = 0; i<password.length; i++){
    if((password[i]>='A'&&password[i]<='Z')||(password[i]>='a'&&password[i]<='z')){
        count++;
    }
    if(password[i]>='0'&&password[i]<='9'){
        count2++;
    }
}
if(password.length<6){
    document.write("<br> Length of password cannot be less than 6");
    check++;
}
if((password[0]>='0'&&password[0]<='9')){
    document.write("<br> Password cannot begin with a number");
    check++;
}
if(count===0){
    document.write("<br> Password must contain alphabet");
    check++;
}
if(count2===0){
    document.write("<br> Password must contain number");
    check++;
}
if(check!=0){
    document.write("<br> Please Enter a valid Password")
}
//Task 15
var university = "University of Karachi"; 
var newuniversity = university.split(' ');
for(var i = 0; i<newuniversity.length; i++){
    for(var j = 0; j<newuniversity[i].length;j++){
    document.write("<br>"+newuniversity[i][j]);}
    document.write("<br>");
}
//Task 16
var userInput = prompt("Enter any word");
document.write("<br> User Input: "+userInput+"<br> Last character of input: "+userInput[userInput.length-1]);
//Task 17
var text = "The quick brown fox jumps over the lazy dog"
var count = 0;
for(var i = 0; i<text.length; i++){
    if((text[i]=='t'||text[i]=='T')&&(text[i+1]=='h'||text[i+1]=='H')&&(text[i+2]=='e'||text[i+2]=='E')){
        count++;
    }
}
document.write("<br> Text: "+text+"<br> There are "+count+" occurence(s) of word 'the'");
/****************************************Chapter 26-30************************************************* */
//Task 1
var num1 = prompt("Enter a positive integer: ",3.45214);
if(num1>0){
document.write("<br> Number: "+num1 + "<br> round off value: " + Math.round(num1) + "<br> Floor Value: "+Math.floor(num1)+"<br> Ceil Value: "+Math.ceil(num1));
}
else{
    alert("Please enter a positive integer");
}
//Task 2
var num2 = prompt("Enter a negative integer: ",-2.673);
if(num1>0){
document.write("<br> Number: "+num2 + "<br> round off value: " + Math.round(num2) + "<br> Floor Value: "+Math.floor(num2)+"<br> Ceil Value: "+Math.ceil(num2));
}
else{
    alert("Please enter a negative integer");
}
//Task 3
var num3 = prompt("Enter a number to get its absolute value",-4);
document.write("<br>The absolute value of "+num3 +" is "+Math.abs(num3));
//Task 4
document.write("<br> random dice value: "+ Math.round(Math.random(1,6)*6));
//Task 5
var x = Math.round(Math.random(1,2)*10);
document.write("<br>"+x);
if(x==2){
    document.write("<br> Random coin value: Heads");
}
else if(x==1){
    document.write("<br> Random coin value: Tail");
}
//Task 6
var y = Math.random(1,100);
document.write("<br> Random between 1 and 100 is "+Math.round(y*100));
//Task 7
var weight = prompt("Enter your weight in kilograms", 50);
weight = parseFloat(weight);
document.write("<br> The weight of the user is "+ weight + " kilograms");
//Task 8
var secretnum =Math.round(Math.random(1,10)*10);
var z = prompt("Guess the number between 1 and 10");
if(secretnum ==z){
    alert("Congratulations! You got the number right");
}
else{
    alert("Try Again");
}
/**********************************************Chapter 31-34********************************************** */
//Task 1
var today = new Date();
document.write("<br> "+today);
//Task 2
var today = new Date();
var monthlist = ["January","February","March","April","May","June","July","August","September","October","November","December"] 
document.write("<br> Current Month: "+monthlist[today.getMonth()]);
//Task 3
var today = new Date();
var daylist = ["Sun","Mon","Tue","Wed ","Thu","Fri","Sat"];
document.write("<br> Today is "+daylist[today.getDay()]);
//Task 4
var today = new Date();
var daylist = ["Sun","Mon","Tue","Wed ","Thu","Fri","Sat"];
if(daylist[today.getDay()]==0||daylist[today.getDay()]==6){
    document.write("<br> It's Fun day");
}
//Task 5
var today = new Date();
var date = today.getDate();
if(date<=15){
    document.write("<br> First fifteen days of the month");
}
else{
    document.write("<br> Last fifteen days of the month");
}
//Task 6
var today = new Date();
var timeSince1970 = today.getTime();
document.write("<br> Current Date" +today+"<br> Elapsed milliseconds since January 1, 1970: "+timeSince1970+"<br> Elapsed minutes since January 1, 1970: "+Math.floor((timeSince1970/(1000*60))));

//Task 7
var today = new Date();
var hour = today.getHours();
if(hour <=12){
    document.write("<br> It's AM");
}
else{
    document.write("<br> It's PM");   
}
//Task 8
var lastDate = new Date("Dec 31 2020");
document.write("<br> Later Date: "+lastDate);
//Task 9 
var today = new Date();
var RamadanDate = new Date("Jun 18 2015");
var todayDate = today.getTime();
var RamadanDate = RamadanDate.getTime();
var days = Math.floor((todayDate-RamadanDate)/(1000*60*60*24));
alert(days+" days have passed since 1st Ramadan, 2015");
//Task 10
var obj = new Date("Jan 1 2015");
var Reference = new Date("Dec 5 2015 22:15:16");
var objDate = obj.getTime();
var ReferenceDate = Reference.getTime();
var seconds = Math.floor((ReferenceDate-objDate)/1000);
alert("On reference Date : "+Reference+"\n "+seconds+" seconds had passed since beginning of 2015");

//Task 11
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
time2 = (today.getHours()-1) + ":" + today.getMinutes() + ":" + today.getSeconds();
var day =today.getDay();
var daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
var monthlist = ["Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
document.write("<br> Current time"+daylist[day]+" "+monthlist[today.getMonth()]+" "+time+"<br> 1 hour ago"+daylist[day]+" "+monthlist[today.getMonth()]+" "+time2);
//Task 12
var today = new Date();
var back = new Date();
back.setFullYear(today.getFullYear()-100);

alert("Current Date: "+today+"\n 100 years back It was "+back);
//Task 13
var age = +prompt("Enter your age");
document.write("<br> Your birth year is "+(today.getFullYear()-age));
//Task 14
var today = new Date();
var monthlist = ["January","February","March","April","May","June","July","August","September","October","November","December"] 
document.write("<br> <h1>K Electric Bill</h1><br> Customer Name: ABC customer <br> Bill Month: "+monthlist[today.getMonth()]+"<br> Number of Units: 410 <br> Charges per unit: 16 <br> Net Amount Payable(within due date): "+(410*16)+"<br> Late payment surcharge: 350 <br> Gross Amount Payable(after due date): "+(410*16+350));
/*************************************************Chapter 35-38*************************************************** */
//Task 1
function showCurrentTime(){
    var today = new Date();
    document.write("<br> "+today);
}
showCurrentTime();
//Task 2
function greet(fname,lname){
    alert("Hello, "+fname+" " +lname+" Have a nice day");
}
var firstName = "Asif";
var lastName = "Raza";
greet(firstName,lastName);
//Task 3
function add(a=2,b=2){
    return (a+b)
}
var a = +prompt("Enter first number",2);
var b = +prompt("Enter second number",2);
c = add(a,b);
document.write("<br> Sum of "+a+" and "+b+" is "+c);
//Task 4
function calculator(num1,op,num2){
    switch (op){
        case "+":
            return num1+num2;
            break;
        case "-":
            return num1-num2;
            break;
        case "*":
            return num1*num2;
            break;
        case "+":
            return num1/num2;
            break;
        default:
            alert("Wrong input Try Again");
    }
}
var num1 = +prompt("Enter first number",2);
var num2 = +prompt("Enter second number",2);
var op = prompt("Enter operation to be performed +,-,*,/");
calculator(num1,op,num2);
//Task 5
function calcsquare(x){
    return Math.pow(x,2)
}
var square = calcsquare(3);
document.write("<br> Square of 3 is " +square);
//Task 6
function fact(x){
    var f = 1;
    for(;x>=1;x-- ){
        f = f*x;
    }
    return f;
}
document.write("<br> Factorial of 5 is "+fact(5));
// Task 7
function counting(start, end){
    document.write("<br> Starting number: "+start+"<br> Ending number: "+end);
    for(var i = start; i<=end ; i++){
        document.write("<br> "+i);
    }
}
var start = +prompt("Enter start number of counting",1);
var end = +prompt("Enter last number of counting",10);
counting(start,end);
// Task 8
function calculateSquare(x){
    return Math.pow(x,2);
}
function calculateHypotaneuse(base, perpendicular){
    return (calculateSquare(base)+calculateSquare(perpendicular));
}
var a = +prompt("Enter base of right angle triangle",5);
var b = +prompt("Enter perpendicular of right angle triangle",4);
var hypotaneuse = Math.sqrt(calculateHypotaneuse(a,b));
alert("Hypotaneuse of triangle is calculated to be "+Math.round(hypotaneuse));
//Task 9
function calcArea(a,b){
    return a*b;
}
var area = calcArea(2,3);
document.write("<br> Width = 2 units , Height = 3 units Area is calculated to be "+area);
//task 10
function checkPalindrome(x){
    var y = "";
    for(var i =x.length-1; i>=0; i--){
        y = y+x[i]
    }
    if(y === x){
        alert(x + " is palindrome string");
    }
    else{
        alert(x+ " is not palindrome string");
    }
}
stringtocheck = prompt("Enter a string to check it is palindrome or not").toLowerCase();
checkPalindrome(stringtocheck);
//Task 11
function convertFirstLetterToCapital(str)
{
 Nstr = str.split(" ");
 str = "";
 
 for(var i =0; i<Nstr.length-1; i++){
    Nstr[i] = Nstr[i][0].toUpperCase()+Nstr[i].slice(1);
    str = str + Nstr[i]+" ";
 }
 return str;
}
var stringToBeConverted = prompt("Enter string to convert its first letter off all words into capital","the quick brown fox ");
var newstr = (convertFirstLetterToCapital(stringToBeConverted));
alert("Given String: "+stringToBeConverted+"\nAfter Conversion: "+newstr);
//Task 12
var max = 0;
var longestword;
function findLongestWord(x){
    var longestword;
    var y= x.split(" ");
   for(var i = 0; i<y.length; i++){
        if((y[i].length)>max){
            max = y[i].length;
            longestword = y[i];
        }
   }
   return longestword;

}
var str = prompt("Enter a string to find itd longest word","Web Development Tutorial");
alert("Longest word of the string is " +(findLongestWord(str)));
//Task 13
function checkOccurences(str,ch){
    var count = 0;
    for(var i = 0; i<str.length; i++){
        if(str[i]===ch){
            count++;
        }
    }
    return count;
}
alert("Letter 'o' occurs " +checkOccurences('JSResourceS.com', 'o')+" times in 'JSResourceS.com'");
//Task 14
function calcCircumferenc(r){
    return (2*Math.PI*r)
}
function calcArea(r){
    return (Math.PI*Math.pow(r,2));
}
var radius = 5 ;
alert("Radius of circle is "+radius+" units\n Area of Circle = "+Math.round(calcArea(radius))+" sq units\n Circumference of circle = "+Math.round(calcCircumferenc(radius))+" units");