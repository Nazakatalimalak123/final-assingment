//24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more
//comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings
//• Tests using the lower case function
//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or
//equal to
//• Tests using "and" and "or" operators
//• Test whether an item is in a array
//• Test whether an item is not in a array

let name_1: string = "nazakat"
 let name_2: string = "nazakat ali"
 let name_3: string = "mr nazakat ali"

 if(name_1 ==name_3){
   console.log("names are equal")
 }else{
   console.log("names are not equal")
 }
 if(name_1 ==name_2){

 }else{
   console.log("names are  equal")
 }
//in lowercase
 if(name_1 ==name_2){

}else{
  console.log("names are  equal")
 }
//numeric
 let age_1 : number = 30
 let age_2 : number = 34

 if (age_1 == 30)
 console.log("eligable for vote")

 if (age_1 !== 34)
 console.log("eligable for vote in older category")
 //lessthen
 if(age_1 <= age_2){
   console.log("younger")
 }
 //greaterthen
 if(age_2 >= age_1){
   console.log("older")}

if( age_1 == 18 && age_2 == 34){
  console.log("person are eligble for vote")}
 
 if(age_1 == 30 && age_2 != 34){
console.log("person is eligble for vote")}
