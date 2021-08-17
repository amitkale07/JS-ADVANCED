// using fun as var value

function interest(principal){
    var interest = 0.20;
    return principal * interest;

}

var principal =5000;
var interest = interest(principal);
console.log('Interest -->'+interest)
var finalamount = principal + interest;
console.log('Final amount is -- >'+finalamount);