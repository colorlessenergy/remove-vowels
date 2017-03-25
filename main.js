function disemvowel(str) {
  var strC = str.split("").filter(function (e) {
    return e.toLowerCase() !== "a" && e.toLowerCase() !== "e" && e.toLowerCase() !== "i" && e.toLowerCase() !== "o" && e.toLowerCase() !== "u";
  });
  console.log(strC.join(""));
  return strC.join("");
}

disemvowel("hello");
