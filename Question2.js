//Question 2: Write a javascript function that takes an array of numbers and a target number. 
//The function should find two different numbers in the array that, when added together, give the target number. 
//For example: answer([1,2,3], 4)should return [1,3]


let array = [1, 2, 3];
let ans = [];
function findNumber(array, target){
	array.forEach((num, ind) => {
		for(let j=1; j<array.length; j++){
			if(array[ind] + array[ind + j] === target){
				ans = [array[ind], array[ind + j]];
				return ans;
			}
		}
	});
}
