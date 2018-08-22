// Question 1: Clean the room function: given an input of
// [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual
// array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2],
// 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number
// types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

let arr = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
function arraySort(arr){
	arr = arr.sort((a, b) => a-b);
	let flag = 0;
	arr.forEach((curValue, index) => {
		if(curValue === arr[index+1]){
			flag++;
		} else if (curValue !== arr[index+1] && curValue === arr[index-1]){
			arr[index - flag] = arr.slice(index - flag, index+1);
			flag = 0;
		} 
	});
	arr.forEach((curValue, index) => {
		while(arr[index][0] && arr[index][0] === arr[index+1]){
			arr.splice(index+1, 1);
		}
	});
}

let array = [1,3,'2',6,'3',5,'7','9',1,'1',4,3,'5'];
function arraySort2(array){
	array = array.sort((a, b) => a - b);
	let arrString = array.filter(value => typeof value === 'string');
	let arrNumber= array.filter(value => typeof value === 'number');
	let ans=[];
	ans.push(arrNumber);
	ans.push(arrString);
	return ans;
}
