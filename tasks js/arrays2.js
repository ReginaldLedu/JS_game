const array = ['let', 1, 5, 'string', 'number', 6, 10, 9];
const check = array.filter(item => item > 5);
console.log(check);
const nums = [3, 4, 6, 12, 11, 32, 5, 91, 66];
const even = nums.filter(item => item % 2 === 0);
console.log(even);
const lets = even.map(item => item * 2);
console.log(lets);

const salary = [45000, 39000, 105000, 76000, 77000];
const tax = salary.map(item => item * 0.87);
console.log(tax);

const powTwo = (n) => n ** 2;
const divide = (n) => n / 2;
const arr = [1, 2, 3, 4];
const result = arr.reduce((intermediate, value) => intermediate - value);
console.log(result);
function arrPowTwo(arrParam, instruction) {
	const resultArr = [];
	for (let i = 0; i < arrParam.length; i++) {
		resultArr.push(instruction(arrParam[i]));
	}
	return resultArr;
}
console.log(arrPowTwo(arr, powTwo));
console.log(arrPowTwo(arr, divide));



const user = {
	name: 'Mark',
	age: 4,
	weight: 18,
	nick: 'Kosha'
}
console.log(user);