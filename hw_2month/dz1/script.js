
let age = +prompt('Введите ваш возраст:');
let year = 2024;
let num = year - age;

if (isNaN(age)) {
  alert('Вы ввели некорректное значение, введите ваш год рождения.');
} else if (num === 0) {
  alert('Вы ещё не родились.');
} else if (num <= 30) {
  alert('Вы ещё молодой.');
} else if (num >= 30 && num < 60) {
  alert('Кризис среднего возраста?');
} else if (num >= 60) {
  alert('Вам советуется посетить доктора.');
}
