function reverseString() {
    var str = document.getElementById("myString").value;
    document.getElementById("demo").innerHTML = 
    str.split('').reverse().join('');
}


