const accountId = 144553
let accountEmail = "nags@gmail.com"
var accountPassword = "12345"
accountCity = "Karnataka"
let accountState;



// accountId = 2  this will not changed

accountEmail = "high@gmail.com"

accountPassword = "23113423"

accountCity = "Goa"

console.log(accountId);

// /* 
// Prefer not to use var because if
//  issue in block scope and functional scope 
// /*

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])