// Expected Result : [false, true]
// Direction :
// The first value : If all of arr2 has bigger value than the biggest value of arr1;
// The second value : If some of arr2 has smaller value than the smallest value of arr1;
const arr1 = [4, 6, 2, 3, 5];
const arr2 = [1, 3, 4, 7, 9, 10];

function result(arr1, arr2) {
  // Your Code Here
    const biggestArr1 = Math.max(...arr1);
    const smallestArr1 = Math.min(...arr1);
    const arr1Value = [];
    const arr2Value = [];
    arr2.map(v => {
        if (v > biggestArr1) {
            arr1Value.push(true);
        } else {
            arr1Value.push(false);
        }
    });
    const finalvalue1 = arr1Value.includes(false) ? false : true;

    arr2.map(v => {
        if (v < smallestArr1) {
            arr2Value.push(true);
        } else {
            arr2Value.push(false);
        }
    });
    const finalvalue2 = arr2Value.includes(true) ? true : false;

    const res = [];

    res.push(finalvalue1);
    res.push(finalvalue2);
    return res;
}

console.log(result(arr1, arr2));