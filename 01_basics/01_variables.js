const accountId = 734020;
let accountEmail = "khan@google.com";
var accountPassword = "sk.1234"
accountCity = "Mumbai"; // Not prefered, So avoid it! : if you are declaring a variable without using any let, const keywords. Eventhough this is possible beacuse it implicitly converts that into global variable 

let accountState;

// accountId = 2; // --> Not allowed

accountEmail = "kn@yh.com";
accountPassword = "212432";
accountCity = "Bengaluru";

console.log(accountId);

/* 
Use let and const keyword for variable declartaion and don't prefer var keyword for variable declaration because of issue in block scope and function block
*/

console.table([accountId, accountEmail, accountPassword, accountCity,accountState]);
