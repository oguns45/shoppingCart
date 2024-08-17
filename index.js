// //dont use reserve keywords as varriable
// //console.log('Hello, Gbenga')

// //console.log(time);
// //var time = 'morning'; // time is the  virable,  while mornin is what the value the variable holds. the data type is string. = is for assignment
// //console.log(time);
// //let time = 'morning'; // 1LET IS PREfer over var because of signal
// // //const time = 'morning'; // you can not change varriable again
// // let numberOfItems = 7;
// // console.log(numberOfItems);


// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////////////////data type
// let numOfDays = 2
// const isBritish = true
// const isWeekend = false
// let today;
// let yesterday = null
// console.log(typeof(yesterday))

// //////////////////////////////////////
// //////////operators
// /// arithemetic operators
// //+-/*%
// console.log(10%2)
// /// assignment operators
// const number = 10
// const anotherNumber = '20'
// const numbers = 10
// const anotherNumbers = '10'
// /// comparison operator
// // == === > >= < <= != !==
// console.log(number === anotherNumber) // checks the datatype and value
// console.log(number == anotherNumber) // checks the  value
// console.log(numbers === anotherNumbers) // checks the datatype and value
// console.log(numbers == anotherNumbers) // checks the  value
// /// logical operators 
// // && || !
// console.log(5 > 7 && 5 > 6)
// console.log(7 > 5 && 6 > 5)
// console.log(5 <= 7 || 5 == 6)
// console.log((5 <= 7 || 5 == 6) && (17 <= 7 || 5 == '5'))
// /// bitwise operator




// ////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ///////////// conditions
// //if, if-else, else-if

// let day = false
// let theme;
// if (day){
//     theme = 'dark'
// }
// console.log(theme)

// let day1 = true
// let theme1;
// if (day1){
//     theme1 = 'dark'
// }
// console.log(theme1)

// const isWeekend1 = true /// u can interchange between true and faulse
// if(isWeekend1){
//      console.log('go to sleep')
// } else{
//     console.log('go to work')
// }
   
// ////////////////switch statement 
// // convert the above if statement or conditional statement 
// const age = 18;

// switch (true) {
//     case (age <= 18):
//         console.log('Too young to vote'); /// is it treu that age less/equals 18 then declare too young to vote.... what ever is in switch parentess() determins the true or false
//         break;
//     case (age >= 18 && age <= 60):
//         console.log('Eligible to vote');
//         break;
//     default:
//         console.log('You should retire');
// }


// // ///////////////////////////////////////////////////////////////////////
// // /////////////////////loop ==>representative tasks: for, wile , do-while
// // for (let i = 0; i <= 10; i = 1+1){
// //     console.log(i)
// // }
// for (let i = 0; i <= 12; i++){
//         console.log('2*'+1+'='+ i*2)
//     }



// const users = ['Tochukwu', 'Dora', 'Ńinte', 'precious' ]////// array
// for (let i = 0; i < users.length; i++){
//     console.log('goodmorning, '+users[i])
// }



// /////////////////////////////////////////////////
// /////////function // reuseable 
// function greet(){
//     console.log('goodmorning, ')
// }
// greet();
// function greet1(){
//     const users = ['Tochukwu', 'Dora', 'Ńinte', 'precious' ]////// array
// for (let i = 0; i < users.length; i++){
//     console.log('goodmorning, '+users[i])
// }

// }
// greet1();


// function greet2(users){
    
// for (let i = 0; i < users.length; i++){
//     console.log('goodmorning, '+users[i])
// }

// }
// greet2(['Tochukwu', 'Gbenga', 'damola', 'Dora']);


// function greet2(users){
    
//     for (let i = 0; i < users.length; i++){
//         console.log('goodmorning, '+users[i])
//     }
    
//     }
//     greet2(['Tochukwu', 'Gbenga', 'damola', 'Dora']);

    


// function multiplicationTable(number, limit){
    
// for (let i = 0; i <= limit; i++){
//     console.log(`${number} * ${i} = ${number*i}`);
// }

// }
// multiplicationTable(2, 20);


// Define the Items
const items = [
    { name: 'Apple', price: 1.00, quantity: 3 },
    { name: 'Bread', price: 2.50, quantity: 2 },
    { name: 'Milk', price: 3.00, quantity: 1 }
];

// Calculate Subtotal
function calculateSubtotal(items) {
    return items.reduce((subtotal, item) => {
        return subtotal + (item.price * item.quantity);
    }, 0);
}

// Apply Discount
function applyDiscount(subtotal, discountPercentage) {
    return subtotal - (subtotal * (discountPercentage / 100));
}

// Calculate Tax
function calculateTax(discountedTotal, taxRate) {
    return discountedTotal + (discountedTotal * (taxRate / 100));
}

// Calculate Final Total
function calculateTotal(items, discountPercentage, taxRate) {
    const subtotal = calculateSubtotal(items);
    const discountedTotal = applyDiscount(subtotal, discountPercentage);
    const finalTotal = calculateTax(discountedTotal, taxRate);
    return finalTotal;
}

// Test the Functions
const discountPercentage = 10; // 10% discount
const taxRate = 8; // 8% tax

const finalTotal = calculateTotal(items, discountPercentage, taxRate);
console.log(`Final Total: $${finalTotal.toFixed(2)}`);

    