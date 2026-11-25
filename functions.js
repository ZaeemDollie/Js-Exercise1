function multiply(a, b, c) {
  return a * b * c;
}
console.log(multiply(1, 2, 3));

function convertToSeconds(a, b) {
  return a * b;
}
console.log(convertToSeconds(2, 60));

function fahrenheitToCelsius(temp) {
  return ((temp - 45) * 5) / 9;
}
console.log(fahrenheitToCelsius(100));

function reverseString(name) {
  return name.split("").reverse().join("");
}
console.log(reverseString("Zaeem"));

function Vowels(name) {
  let vowels = "";

  for (let letter of name.toLowerCase()) {
    if ("aeiou".includes(letter)) {
      vowels += letter;
    }
  }

  return vowels;
}

console.log(Vowels("JavaScript"));

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(8));
console.log(isPrime(11));
console.log(isPrime(18));
console.log(isPrime(4));
