for (let i=0; i<10; i++) {
    printWithDelay(i);
 }
   
 function printWithDelay(i) {
   setTimeout(function() {
       console.log(i);
   }, 2000 * i);
 }

// function pause(time) {
//     return new Promise(resolve => {
//         setTimeout(resolve, time);
//     })
// }

// var arr = ['a', 'b', 'c'];

// function printWithDelay(arr, delay) {
//     for (var i = 0; i < arr.length; i++){
//         console.log((i + 1) + '. ' + arr[i]);
//     }
// }

// printWithDelay(arr);
