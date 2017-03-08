var test = function(a) {
  var args = Array.prototype.slice(arguments, 1);
  return Math.max.apply(Math, args) + a;
}
test(10, 2, 4, 6) //16
