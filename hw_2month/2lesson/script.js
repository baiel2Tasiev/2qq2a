// const array = [1,2,3,4,5,6,7];

// // // console.log(array[3]);
// // // const users = ['ёбтваю' , 'эхееей', 'виуууууууу', 'ахахахахах'];
// // // console.log(users[2]);

// // // const viu = [1, 'str',   null, undefined, true, false]
// // // console.log(viu);

// console.log(array.length)




// for (let i = 0; i <= 100; i++) {
//     if (i % 2 === 0){
//           console.log (i)  
//     }
// }

// const numbers = [ 2, 4, 6, 55, 67, 67, 6]
// console.log(numbers);


// for (let i = 0; i < numbers.length; i++){
//     console.log(numbers[i]* 2)
// }

// let num = 1
// num = num + 3
// console.log(num);


// const num = [1,2,3,4,5,6,7]

// let sum = 0
// for(let i = 0; i < num.length; i++){
//     const element = num [i];
//     sum = sum + element;
//     console.log(sum)
// }

// console.log(Math.round(1.6));
// console.log(Math.floor(1.534));

const array = [1111,1,2,2132133,43432432432,5,6,7]

let maxNumber = array[0]
for (let i=0; i < array.length; i++){
    const element = array[i];
    if (element > maxNumber){
        maxNumber = element
    }
}
console.log(maxNumber);
