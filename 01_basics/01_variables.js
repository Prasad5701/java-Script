const accountID=12345;
let accountName="prasad";
var accountCity="jaipur";

accountState = "maharashtra" //  this can be valid but dont used this type of memory allocation 

accountName="Aditya";
accountCity="mumbai";

accountState="kerala"

/*
   prefer not to use var because of issue in block scope and function scope;
*/ 

console.table([accountCity, accountID ,accountName, accountState]);