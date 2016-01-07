function titleCase(str) {
    var str = document.getElementById("myString").value;
    str = str.split(" "); // Create an array.

    for (var i = 0; i < str.length; i++) { // With each iteration,
        var firstLetter = str[i].charAt(0).toUpperCase(); // capitalize the first letter
        var restOfWord = str[i].substr(1).toLowerCase(); // then lower case the rest of the word.
        str[i] = firstLetter + restOfWord; // Concatenate the first letter and the rest of rest of the word.
    }
    return document.getElementById("demo").innerHTML = str.join(' '); // Put the words from the array back into a string.
}
