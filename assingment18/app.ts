
//18. Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

 let placesTovisit: string []= ["iran","Italy","pakistan","uk","dubai"];
 //print arry original order
 console.log("original order:",placesTovisit);
//print arry alphabatic order without modify
 console.log("alphabatical order:",[...placesTovisit].sort());
 //show that erry is still in original order
 console.log("original order after sorting:",placesTovisit);
 //print erry reverse alphabatic order withtout chang orginal list
 console.log("Reverse alphabatic order:",[...placesTovisit].sort().reverse());
 //show erry in orignal order
 console.log("orignal order after reverse sorting:",placesTovisit);
//reverse the  order of list 
 console.log("reverse order:",placesTovisit);
 //reverse the order of list again to get back orignal order
console.log("back to orignal order:",placesTovisit);
//sort erry alphabatic order places to visit.sort();
 console.log("sorted in reverse alphabatic order",placesTovisit);
//sort erry in reverse alphabatic order
//placesTovisit.sort( a, b) => b.localeCompare(a));
 console.log("sort in reverse alphabatic order:",placesTovisit);
