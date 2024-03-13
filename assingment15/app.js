//15. Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a
//new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the
//guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//
var guest_list = ["ali", "aslam", "naveed", "waheed"];
for (var i = 0; i < guest_list.length; i++) {
    console.log("sir " + guest_list[i] + " we invite you on dinner");
}
var not_present = "ali";
var new_guest = "nabeel";
guest_list[0] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log("sir " + guest_list[i] + " we invite you on dinner");
}
console.log("Mr. ".concat(not_present, " will not  coming tomorrow dinner."));
