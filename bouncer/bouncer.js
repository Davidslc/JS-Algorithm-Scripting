function bouncer(arr) {
    return arr.filter(function(val){
        return Boolean(val);
  });
}

console.log(bouncer([7, "ate", "", false, 9])); // should return [7, "ate", 9].
console.log(bouncer(["a", "b", "c"])); // should return ["a", "b", "c"].
console.log(bouncer([false, null, 0, NaN, undefined, ""])); // should return [].
