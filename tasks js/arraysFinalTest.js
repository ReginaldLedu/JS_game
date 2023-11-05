//Задание 1

const numbers = {
	keyin1: 1,
	keyin2: 2,
	keyin3: 3,
	keyin4: 4,
	keyin5: 5,
	keyin6: 6,
	keyin7: 7,

}

for (const key in numbers) {
	if (numbers[key] >= 3) {
		console.log(numbers[key]);
	}
}

//Задание 2
let date = new Date;
console.log(date);

//Задание 3
const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];
const weekTranslate = [];
for (let i = 0; i < en.length; i++) {
	weekTranslate[i] = [];
	weekTranslate[i].push(en[i], ru[i]);
}

console.log(weekTranslate);
const weekTrans = Object.fromEntries(weekTranslate);
console.log(weekTrans);

//Задание 4

const week = {
	mon: 'Понедельник',
	tue: 'Вторник',
	wed: 'Среда',
	thu: 'Четверг',
	fri: 'Пятница',
	sat: 'Суббота',
	sun: 'Воскресенье',
}
const arrayWeek = [];
for (let key in week) {
	arrayWeek.push(week[key].toLowerCase());
}

const userAnswer = prompt('Введите день недели или число от 1 до 7').toLowerCase();
if (arrayWeek.includes(userAnswer)) {
	let result = arrayWeek.find(item => item === userAnswer);

	switch (result) {
		case arrayWeek[0]: alert('Будний день');
			break;
		case arrayWeek[1]: alert('Будний день');
			break;
		case arrayWeek[2]: alert('Будний день');
		case arrayWeek[3]: alert('Будний день');
		case arrayWeek[4]: alert('Будний день');
			break;
		case arrayWeek[5]: alert('Выходной день');
			break;
		case arrayWeek[6]: alert('Выходной день');
			break;
	}
} else {
	switch (userAnswer) {
		case '1': alert(arrayWeek[0]);
			break;
		case '2': alert(arrayWeek[1]);
			break;
		case '3': alert(arrayWeek[2]);
			break;
		case '4': alert(arrayWeek[3]);
			break;
		case '5': alert(arrayWeek[4]);
			break;
		case '6': alert(arrayWeek[5]);
			break;
		case '7': alert(arrayWeek[6]);
			break;
		default:
			alert("Я не знаю, что это за день недели");
	}
}

//Задание 5
const numbersTaskFive = {
	key1: {
		keyin1: 1,
		keyin2: 2,
		keyin3: 3,
	},
	key2: {
		keyin1: 4,
		keyin2: 5,
		keyin3: 6,
	},
}
const numbersTaskFiveArray = [];
for (key in numbersTaskFive) {
	numbersTaskFiveArray.push(numbersTaskFive[key]);
}
const arr = [];
for (i = 0; i < numbersTaskFiveArray.length; i++) {
	arr.push(numbersTaskFiveArray[i]);
}
for (key in arr[0]) {
	arr.push(arr[0][key]);
}
for (key in arr[1]) {
	arr.push(arr[1][key]);
}
let firstRemove = arr.shift();
let secondRemove = arr.shift();
let result = arr.reduce((sum, current) => sum + current, 0);
console.log(result);

//Задание 6
const year = {
	ru: ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь',],
	en: ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december',]
}
let language = prompt('Введите ru или en');
let month = prompt('Введите номер месяца, который вы хотите вывести');

const arrayForEn = [];
for (key in year) {
	arrayForEn.push(year[key]);
}
console.log(arrayForEn);
const arrayForRu = arrayForEn.shift();
console.log(arrayForRu);

if (language === 'ru'){
	arrayForRu.includes()
}

