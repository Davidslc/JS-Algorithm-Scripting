
function factorialize(num) {
    var num = document.getElementById("myNumber").value;
    if (num < 0) { // Return "-1" if the number is less than zero.
        return document.getElementById("demo").innerHTML = "The factorial of " + num + " is " + -1 + ".";
        
    } 
    else if (num == 0) {  // Return "1" if the number is zero.
        return document.getElementById("demo").innerHTML = "The factorial of " + num + " is " + 1 + ".";
    }
    
    var originalNum = num;
    var temp = num;
    while (num-- > 2) {
        temp *= num; // Multiply from the number entered down to "2" to get the factorial.
    }
    document.getElementById("demo").innerHTML = "The factorial of " + originalNum + " is " + temp + ".";
}