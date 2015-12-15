function palindrome(str) {
    var str = document.getElementById("myString").value;
    var leanString = str.toLowerCase().replace( /[_\W]/g, ''); // Lower case and remove non-alpha characters. Added the underscore to the regex because \W doesn't catch them
    var reverseString = leanString.split('').reverse().join(''); // Turn string into array, reverse, then turn back into string
    if (reverseString === leanString) { // Check to see if it's a palindrome
        return document.getElementById("demo").innerHTML = "This is a palindrome."
    }
        return document.getElementById("demo").innerHTML = "This is not a palindrome.";
}

palindrome("eye");