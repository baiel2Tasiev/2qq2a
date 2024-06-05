let yearOfBirth = prompt("Введите год вашего рождения:");
let Year = Date().getFullYear();
let age = Year - yearOfBirth;

if (age < 0) {
  alert("Вы еще не родились");
} else if (age < 30) {
  alert("Вы молодой человек, младше 30 лет");
} else if (age > 30 && age < 60) {
  alert("Вы старше 30, но младше 60 лет, кризис среднего возраста");
} else {
  alert("Вам старше 60 лет, вам советуется посетить доктора");
}

let userInput = prompt("Введите значение:");
if (!isNaN(userInput)) {
  alert("Вы ввели число");
} else {
  alert("веденно некоректно");
}