
const num1 = 4.789;
const num2 = 12.345;
const num3 = -8.5;

console.log("Rounded num1:", Math.round(num1));     
console.log("Floored num2:", Math.floor(num2));        
console.log("Ceiled num3:", Math.ceil(num3));          

const numberSet = [14, 2, -5, 101, 35, 8];

console.log("Max value:", Math.max(...numberSet));   
console.log("Min value:", Math.min(...numberSet));     


const base = 5;
const exponent = 3;
const numberForSqrt = 64;

console.log("5 to the power of 3:", Math.pow(base, exponent)); 
console.log("Square root of 64:", Math.sqrt(numberForSqrt));  


console.log("Random decimal (0 to 1):", Math.random());

const randomInt = Math.floor(Math.random() * 10) + 1;
console.log("Random integer (1 to 10):", randomInt);


const radius = 7;
const area = Math.PI * Math.pow(radius, 2);
const roundedArea = area.toFixed(2);

console.log("Circle area:", area);            
console.log("Rounded area:", roundedArea);    
