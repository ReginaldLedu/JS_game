//задача из урока
let alphabeth = 'abcdef';
alphabeth = alphabeth.split('');
console.log(alphabeth);
for (i = 0; i <= alphabeth.length; i++) {
	if (alphabeth[i] === 'c') {
		console.log('C is here')
	}
}
for (let i = 0; i <= alphabeth.length; i++) {
	if (alphabeth[i] === 'b') {
		console.log(alphabeth.findIndex(i => i == "b"));
	}
}

//Задание 1
const arrayNumbers = [1, 5, 4, 10, 0, 3];
for (i = 0; i < arrayNumbers.length; i++) {
	console.log(arrayNumbers[i]);
	if (arrayNumbers[i] === 10) {
		break;
	}
}
//Задание 2
for (i = 0; i <= arrayNumbers.length; i++) {
	if (arrayNumbers[i] === 4) {
		console.log(arrayNumbers.findIndex(i => i == 4));
	}
}

//Задание 3
const numbersArray = [1, 3, 5, 10, 20];
console.log(numbersArray.join(' '));


//Задание 4
const randomArray = new Array(10);
for (i = 0; i < randomArray.length; i++) {
	randomArray[i] = (Math.round(Math.random() * 10));
}
console.log(randomArray);
const evenOfRandomArray = randomArray.filter(item => item % 2 === 0)
console.log(evenOfRandomArray);

//Задание 5
const multidimension5 = new Array();

for (let i = 0; i < 3; i++) {
	multidimension5[i] = [];
	for (let j = 0; j < 3; j++) {
		multidimension5[i].push(1);
	}
}
console.log(multidimension5);

//Задание 6
const methodPush = [1, 1, 1];
for (i = 0; i < 3; i++) {
	methodPush.push(2);
}
console.log(methodPush);

//Задание 7
let methodSort = [9, 8, 7, 'a', 6, 5];
methodSort = methodSort.sort();
console.log(methodSort);
console.log(methodSort.pop());
console.log(methodSort);

//Задание 8
let sourceArray = [9, 8, 7, 6, 5];
let userNumber = Number(prompt("Please insert number from 1 to 10"));
let search = sourceArray.includes(userNumber);
if (search) {
	alert('Welldone');
} else {
	alert('Try again later');
}

//Задание 9
let reverseMethod = 'abcdef';
let arrayForReverse = reverseMethod.split('');
console.log(arrayForReverse.reverse());

//Задание 10
const array10 = [];
for (let i = 0; i < 6; i++) {
	array10[i] = Math.round(Math.random() * 10);
}
console.log(array10);
console.log(array10.reduce(function (sum, current) { return sum + current; }, 0));
console.log(array10.reduce(function (sum, current) { return sum + current; }, 0) / array10.length);


//Задание 11
let multidimensionNumbers = [[1, 2, 3,], [4, 5, 6]];
multidimensionNumbers = multidimensionNumbers.join();
multidimensionNumbers = multidimensionNumbers.split(',');
console.log(multidimensionNumbers);
for (i = 0; i < 6; i++) {
	multidimensionNumbers[i] = Number(multidimensionNumbers[i]);
}
console.log(multidimensionNumbers);

//Задание 12
let numbersFromOneToTen = [1, 2, 2, 4, 6, 8, 9, 4];
for (i = 0; i < 8; i++) {
	if (numbersFromOneToTen[i + 1] !== undefined) {
		console.log(numbersFromOneToTen[i] + numbersFromOneToTen[i + 1])
	};
}

let fruits = ["Яблоки", "Груша", "Апельсин"];
let shoppingCart = fruits;
shoppingCart.push("Банан");
alert(fruits);
alert(fruits.length);

let styles = ['Jazz', 'Blues',];
styles.push('Rock-n-Roll');
styles[Math.round((styles.length - 1) / 2)] = 'Classic';
console.log(styles);
console.log(styles.shift());
console.log(styles);
console.log(styles.unshift('Rap', 'Reggae'));
console.log(styles);





