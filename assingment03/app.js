//3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
//and titlecase.
var personname = "ali";
console.log("lowercase:", personname.toLowerCase());
//uppercase
console.log("uppercase:", personname.toUpperCase());
//titlecase
console.log("titlecase:", personname.replace(/\b/g, function (c) { return c.toUpperCase(); }));
