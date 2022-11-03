// My age - change this to change the dog years calculation at the end.
const myAge = 27;

// Early years of a dog's life
let earlyYears = 2;
earlyYears *= 10.5;
console.log(earlyYears);

// Later years of a dog's life
let laterYears = myAge - 2;
console.log(laterYears);

// Later years in dog years
laterYears *= 4;
console.log(laterYears);

// Adding early and later years to calculate my age in dog years
const myAgeInDogYears = earlyYears + laterYears;
console.log(myAgeInDogYears);

// myName variable lowercase
const myName = "Anton Vlasenko".toLowerCase();
console.log(myName);

// My name and age in dog years using string interpolation
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`);