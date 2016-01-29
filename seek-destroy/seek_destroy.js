function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments, 1);

  return arr.filter(function(val){
    if (args.indexOf(val) !== -1) {
      return false;
    }
    return true;
  });
}

var test1 = destroyer([1, 2, 3, 1, 2, 3], 2, 3) // should return [1, 1].
var test2 = destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) // should return [1, 5, 1].
var test3 = destroyer([3, 5, 1, 2, 2], 2, 3, 5) // should return [1].
var test4 = destroyer([2, 3, 2, 3], 2, 3) // should return [].
var test5 = destroyer(["tree", "hamburger", 53], "tree", 53) // should return ["hamburger"].

var tests = [test1, test2, test3, test4, test5];

for (var i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}
