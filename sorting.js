//BUBBLE SORT 


// function bubbleSort(arr){
// for(var i = arr.length; i > 0; i--) {
//     for(var j = 0; j < i - 1; j++){
//         if(arr[j] > arr[j + 1]){
//             var temp = arr[j];
//             arr[j] = arr[j + 1];
//             arr[j + 1] = temp;
//         }
//     }
// }
//     return arr;
// }

// console.log("Bubble Sort **********************")
// console.log(bubbleSort([21,6,18,4,2,45,78]))



//SELECTION SORT

// function selectionSort(arr){
//     for(let i = 0; i < arr.length; i++){
//         var lowest = i;
//         for(var j = i + 1; j < arr.length; j++){
//            if(arr[j] < arr[lowest]){
//                lowest = j;
//            }
//         }
//         var temp = arr[i];
//         arr[i] = arr[lowest];
//         arr[lowest] = temp;
//     }

//     return arr;
// }

// console.log("Selection Sort **********************")
// console.log(selectionSort([32, 25, 67, 2, 13, 78, 45, 3, 5, 89, 342, 4]))


//INSERTION SORT 

// function insertionSort(arr){
//     for(var i = 1; i < arr.length; i++){
//         var currentVal = arr[i];
//         for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
//            arr[j + 1] = arr[j]
//         }
//       arr[j + 1] = currentVal;
//     }
//     return arr;
// }

// console.log("Insertion Sort **********************")
// console.log(insertionSort([2, 45, 9, 76, 14, 432, 67, 32, 1]));


//MERGE SORT

//merge sort array merging helper function for 2 sorted arrays
function merge(arr1, arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while(i < arr1.length && j < arr2.length){
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        } else {
            results.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){
        results.push(arr1[i]);
        i++
    }
    while(j < arr2.length){
        results.push(arr2[j]);
        j++;
    }

    return results
}


function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right)
}

let array = [10, 90, 24, 76, 73, 43, 3, 100, 6]
console.log(mergeSort(array))
