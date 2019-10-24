//write first method
function sleep_in(weekday,vacation) {
    if(vacation == true){
        return vacation;
    }else{
        return !weekday
    }
 }

//write second method
function monkey_trouble(param1, param2) {
    var trouble = (param1&&param2 == true || ((!param1)&&!param2))
        monkey_trouble == true
        return trouble
}

function string_times(string, num){
    var x = string
    var y = ""
    for(var i = num; i > 0; i--){
        y = x + y
    }
    return(y)
}
function front_times(string, num){
    var sub = string.substring(0,3);
    var y = ""
    for(var i = num; i > 0; i--){
        y = sub + y
    }
    return y
}

function string_bits(str){
    var bit = ""
    for(var i = 0; i < str.length; i =  i+2){
       if(i%2 == 0){
           bit += str.substring(i, i+1)
       }
    }
    return bit
}

function caughtSpeeding(speed,birthday)
{
    var ticket = ""
    if (birthday == true) {
        speed -= 5;
    }
    if (speed <= 60) {
        ticket = 0
    } else if (speed >= 61 && speed <= 80) {
        ticket = 1
    } else if (speed > 80) {
        ticket = 2
    }
    return (ticket);
}

function fizz_buzz(num){
    var name = ""
    if (num%5==0 && num%3 == 0){
        name = "FizzBuzz";
    }else if(num%3==0) {
        name = "Fizz"
    } else if (num%5==0) {
        name = "Buzz"
    } else {
        name =num + "!"
    }
    return (name);
}

function teaParty(tea,candy){
    var rating = ""
    if (tea < 5 || candy < 5){
        rating = "0";
    }else if(candy >= tea*2 || tea >= candy*2) {
        rating = "2"
    } else if (tea >= 5 && candy >= 5 ) {
        rating = "1"
    }
    return (rating);
}


function blackjack(int1,int2){
    var win = ""
    if (int1 > 21){
        int1 = 0;
    }
    if(int2 > 21) {
        int2 = 0;
    }
    if (int1 > int2) {
        win = int1
    }
    if (int2 > int1) {
        win = int2
    }
    return (win);
}

function loneSum(a,b,c){
    var aa = a
    var bb = b
    var cc = c
    if (a == b || a==c){
        aa = 0;
    }
    if(b==a || b==c) {
        bb = 0;
    }
    if (c==a || c==b) {
        cc = 0
    }
 var sum = aa + bb + cc
    return (sum);
}


//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += string_times(Hello, 4);
    document.getElementById("output").innerHTML += front_times(Hello, 3);
    document.getElementById("output").innerHTML += string_bits(Hello);
    document.getElementById("output").innerHTML += caughtSpeeding(60,false);
    document.getElementById("output").innerHTML += fizz_buzz(7);
    document.getElementById("output").innerHTML += teaParty(8,16);
    document.getElementById("output").innerHTML += blackjack(19,7);
    document.getElementById("output").innerHTML += loneSum(5,7,2);

}


