function myReplace(str, before, after) {

    var newStr = str.split(' ');

    before = before.split('');
    after = after.split('');

    if (before[0] === before[0].toUpperCase()) {
        after[0] = after[0].toUpperCase();
    } else {
        after[0] = after[0].toLowerCase();
    }

    before = before.join('');
    after = after.join('');

    for (var i = 0; i < newStr.length; i++) {
        if (newStr[i] === before) {
            newStr[i] = after;
        }
    }
    return newStr.join(' ');
}

output.innerHTML = myReplace("Let us go to the store", "store", "mall");
output2.innerHTML = myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
output3.innerHTML = myReplace("This has a spellngi error", "spellngi", "spelling");
output4.innerHTML = myReplace("His name is Tom", "Tom", "john");
output5.innerHTML = myReplace("Let us get back to more Coding", "Coding", "algorithms");