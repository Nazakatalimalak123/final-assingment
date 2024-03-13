//3. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
//and titlecase.
 let personname: string = "ali";
 console.log("lowercase:", personname.toLowerCase());
 //uppercase
 console.log("uppercase:",personname.toUpperCase());
 //titlecase
 console.log("titlecase:",personname.replace(/\b/g,c=>c.toUpperCase()));