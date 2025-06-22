// 1. Declare customerName in global scope using var
var customerName = 'bob';

// 2. Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Function to set bestCustomer in global scope
function setBestCustomer() {
  bestCustomer = 'not bob'; // implicitly becomes global (bad practice, but intentional for this lab)
}

// 4. Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 5. Declare leastFavoriteCustomer as a constant in global scope
const leastFavoriteCustomer = 'someone';

// 6. Attempt to change leastFavoriteCustomer (will throw error when called)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'someone else'; // This will throw a TypeError
}
