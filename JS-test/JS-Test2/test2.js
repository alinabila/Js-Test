// Expected result : [7, 3, 1, 2, 5, 6, 9, 10, 4, 8]
// Direction : Mutate arr1 to return combined array with arr2. The conditions are :
// 1. odd number at beginning 
// 2. even number at the end of array 
// 3. Original arr1 at the middle

const arr1 = [1, 2, 5, 6, 9, 10];
const arr2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function result(arr1, arr2) {
    const diff = arr2.filter(v => !arr1.includes(v));
    const oddNumbers = diff.filter((number) => number % 2 !== 0).sort().reverse();;
    const evenNumbers = diff.filter((number) => number % 2 !== 1);
    const arr3 = [...oddNumbers, ...arr1, ...evenNumbers];
    return arr3
}

console.log(result(arr1, arr2));