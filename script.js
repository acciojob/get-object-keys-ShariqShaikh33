//your JS code here. If required.
var student = {
	name: "Shariq",
}

Object.prototype.getKeys = function() {
  return Object.keys(this);
};
console.log(student.getKeys()); 