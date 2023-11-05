let game = () => {
	let monthNumber = Number(prompt("Введите число от 1 до 12"));
	if (monthNumber >= 1 && monthNumber < 3) {
		console.log('Зима');
	}
	else if (monthNumber >= 3 && monthNumber < 6) {
		console.log('Весна');
	}
	else if (monthNumber >= 6 && monthNumber < 9) {
		console.log('Лето');
	}
	else if (monthNumber >= 9 && monthNumber < 12) {
		console.log('Осень');
	}
	else if (monthNumber === 12) {
		console.log('Зима');
	}
	else {
		alert('Вы ввели неверное значение');
	}
}

let rememberGame = () => {
	let rememberArray = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
	rememberArray = rememberArray.sort(() => Math.random() - 0.5);
	alert(rememberArray);
	let userAnswer1 = String(prompt('Чему равнялся первый элемент массива?'));
	let userAnswer2 = String(prompt('Чему равнялся последний элемент массива?'));
	if (userAnswer1.toLowerCase() === rememberArray[0].toLowerCase() && userAnswer2.toLowerCase() === rememberArray[6].toLowerCase()) {
		alert('Поздравляем, Вы угадали оба элемента');
	} else if (userAnswer1.toLowerCase() !== rememberArray[0].toLowerCase() && userAnswer2.toLowerCase() === rememberArray[6].toLowerCase()) {
		alert('Вы были близки к победе');
	} else if (userAnswer1.toLowerCase() === rememberArray[0].toLowerCase() && userAnswer2.toLowerCase() !== rememberArray[6].toLowerCase()) { alert('Вы были близки к победе'); }
	else if (userAnswer1.toLowerCase() !== rememberArray[0].toLowerCase() && userAnswer2.toLowerCase() !== rememberArray[6].toLowerCase()) { alert('Ответ неверный'); }
}


const userAnswer0 = '';
const riddles = [
	'Висит груша, нельзя скушать.',
	'этот маленький предмет дарит вечером нам свет.',
	'начинается на "л" и кончается на "а", в восемь букв всего она.',]
let riddle1 = (userAnswer0, riddles) => {
	for (let i = 0; i < riddles.length; i++) {
		userAnswer0 = prompt(riddles[i]);
		if (userAnswer0 === 'лампочка') {
			alert('Вы угадали');
			break;
		} else { alert('Вы не угадали'); }
	}
}
