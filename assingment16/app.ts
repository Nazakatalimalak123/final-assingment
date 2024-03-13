//16. More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to
//invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you
//found a bigger dinner table.
//• Add one new guest to the beginning of your array.
//• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a
//new set of invitation messages, one for each person in your list.

let guest_list:  string [ ] =["ali", "aslam","naveed","waheed"];
 for(let i=0; i<guest_list.length; i++){
   console.log(`sir ` +guest_list[i] +   " we invite you on dinner");
 }

  let not_present: string = "ali";
  let new_guest: string = "nabeel";
  guest_list[0]=new_guest;
  for(let i=0; i<guest_list.length; i++){
   console.log(`sir ` +guest_list[i] +   " we invite you on dinner");
    }
   console.log(`Mr. ${not_present} will not  coming tomorrow dinner.`);
   guest_list.unshift("farhad","touqer","murslen");
    for(let i=0; i<guest_list.length; i++){
     console.log(`sir ` +guest_list[i] +   " we invite you on dinner");
     }
