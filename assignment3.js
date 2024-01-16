// Exercise 1
/**
 * ? Diberikan sebuah function yang menerima satu parameter berupa array yang terdiri dari angka. 
 * ? Function tersebutakan mengembalikan true jika array dari parameter tersebut merupakan deret aritmatika dan false jika sebaliknya.
 * ? Deret aritmatika adalah sebuah deret dimana perbedaan setiap angka di deret tersebut konsisten. Contoh,2, 4,6, 8
 * ? adalah deret aritmatika dengan pertambahan nilai sebesar 2, dan 2, 4, 6, 9
 * ? bukanlah deret aritmatika karena tidak perbedaan selisih antar angka yang tidak konsisten
 */
function isArithmeticProgression (number){
    let calculating = 0;
    for (let index = 0; index < number.length-1; index++) {
        calculating = number[index + 1] - number[index];
        if (number[index] + calculating !== number[index+1]) {
            console.log("The Input Number is not a Arithmetic Progression");
        } else {
            console.log("The Input Number is a Arithmetic Progression");
            break;
        }
    }
}

// console.log(isArithmeticProgression([1, 2, 3, 4, 5, 6]));
// console.log(isArithmeticProgression([2, 4, 6, 12, 24]));
// console.log(isArithmeticProgression([2, 4, 6, 8]));
// console.log(isArithmeticProgression([2, 6, 18, 54]));
// console.log(isArithmeticProgression([1, 2, 3, 4, 7, 9]));

// Exercise 2
/**
 * ? Diberikan sebuah function yang menerima satu parameter berupa string. 
 * ? Function tersebut mengembalikan nilaitrue jika di dalam string tersebut terdapat karakter a dan b yang memiliki jarak 3 karakter 
 * ? lain minimal satu kali.Jika tidak ditemukan sama sekali, kembalikan nilai false
 */
function threeStepText(text) {
    let splitting = text.split("");

    for (let index = 0; index <= splitting.length; index++) {
        let idxFirstEl = 0;

        if (splitting[index] === "a" || splitting[index] === "b"){
            idxFirstEl = index;
            firstEl = splitting[index]

            if (firstEl === "a" && splitting[idxFirstEl+4] === "b") {
                return true
            } else if (firstEl === "b" && splitting[idxFirstEl+4] === "a"){
                return true
            } else {
                return false
            }
        }
    }
}

// console.log(threeStepText("Lane borrowed"));
// console.log(threeStepText("i am sick"));
// console.log(threeStepText("you are borring"));
// console.log(threeStepText("barbarian"));
// console.log(threeStepText("bacon and meat"));

// Exercise 3
/**
 * ? Diberikan function yang menerima 2 parameter, yaitu array of integer (unsorted) dan integer. 
 * ? Function tersebut akan mengembalikan sebuah array di mana di dalam array tersebut mengandung array yang terdiri dari 2 
 * ? angka yang jika dijumlahkan sama dengan integer
 */
function sumArray(arr, int){
    let arrayResult = [];
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] !== undefined) {
            for (let idx = index+1; idx < arr.length; idx++) {
                if (arr[idx] !== undefined) {
                    if (arr[index] + arr[idx] === int) {
                        arrayResult.push([arr[index], arr[idx]]);
                        arr[index] = undefined;
                        arr[idx] = undefined;
                    }   
                }
            }
        }
    }
    return arrayResult;
}

// console.log(sumArray([2, 1, 4, 3], 5));
// console.log(sumArray([1, 8, 10, 3], 11));

// Exercise 4
/**
 * 
 */
function arrSum(arr){
    let sumMax = -Infinity;
    let sumArray = [];
    for (let index = 0; index < arr.length; index++) {
        // const element = array[index];
        for (let idx = index; idx < arr.length; idx++) {
            // const element = array[index];
            let total = 0;
            const array2 = arr.slice(index, idx+1);
            let sum = array2.reduce((total, el) => total + el);
            if (sumMax < sum) {
                sumArray = array2;
                sumMax = sum;
            }
        }
    }
    let arrayResult = []
    arrayResult.push(sumArray, sumMax);
    return arrayResult;
}

console.log(arrSum([-2, -3, 4, -1, -2, 1, 5, -3]))