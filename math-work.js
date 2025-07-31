
const num1 = 4.789;
const num2 = 12.345;
const num3 = -8.5;

console.log("1.1 Rounded num1:", Math.round(num1));     
console.log("1.2 Floored num2:", Math.floor(num2));        
console.log("1.3 Ceiled num3:", Math.ceil(num3));          

const numberSet = [14, 2, -5, 101, 35, 8];

console.log("2.1 Max value:", Math.max(...numberSet));   
console.log("2.2 Min value:", Math.min(...numberSet));     


const base = 5;
const exponent = 3;
const numberForSqrt = 64;

console.log("3.1 5 to the power of 3:", Math.pow(base, exponent)); 
console.log("3.2 Square root of 64:", Math.sqrt(numberForSqrt));  


console.log("4.1 Random decimal (0 to 1):", Math.random());

const randomInt = Math.floor(Math.random() * 10) + 1;
console.log("4.2 Random integer (1 to 10):", randomInt);


const radius = 7;
const area = Math.PI * Math.pow(radius, 2);
const roundedArea = area.toFixed(2);

console.log("5.1 Circle area:", area);            
console.log("5.2 Rounded area:", roundedArea);    
