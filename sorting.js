var array = [10, 90, 24, 76, 73, 43, 3, 100, 6, 45, 23, 5, 78, 231, 57, 121]
//BUBBLE SORT 
//time complexity O(n^2)

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
// console.log(bubbleSort(array))



//SELECTION SORT
//time complexity O(n^2)


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
// console.log(selectionSort(array))





//INSERTION SORT 
//time complexity O(n^2)

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
// console.log(insertionSort(array));






//MERGE SORT
//splits array into 1 or 0 pieces then reconstructs sorted arrays 
//time complexity O(n log n)
//merge sort array merging helper function for 2 sorted arrays


// function merge(arr1, arr2) {
//     let results = [];
//     let i = 0;
//     let j = 0;
//     while(i < arr1.length && j < arr2.length){
//         if(arr2[j] > arr1[i]){
//             results.push(arr1[i]);
//             i++;
//         } else {
//             results.push(arr2[j]);
//             j++;
//         }
//     }
//     while(i < arr1.length){
//         results.push(arr1[i]);
//         i++
//     }
//     while(j < arr2.length){
//         results.push(arr2[j]);
//         j++;
//     }

//     return results
// }

// function mergeSort(arr) {
//     if(arr.length <= 1) return arr;
//     let mid = Math.floor(arr.length/2);
//     let left = mergeSort(arr.slice(0, mid));
//     let right = mergeSort(arr.slice(mid));
//     return merge(left, right)
// }


// console.log("Merge Sort **********************")
// console.log(mergeSort(array))







//QUICK SORT

//sorts array around a "pivot point" values lower than pivot on left greater values on right
//pivot point should ideally be median value
//should reorder around pivot in place

function pivot(arr, start = 0, end = arr.length+1){
    function swap(array, i, j){
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    let pivot = arr[start];
    var swapIdx = start;

    for(let i = start; i < arr.length; i++){
        if(pivot > arr[i]) {
        swapIdx++
        swap(arr, swapIdx, i)
    }
    }
    swap(arr, start, swapIdx)
    return swapIdx
}

function quickSort(arr, left = 0, right = arr.length - 1){
    if(left < right){
   let pivotIndex = pivot(arr, left, right)
   quickSort(arr, left, pivotIndex - 1);
   quickSort(arr, pivotIndex + 1, right);
}
    return arr
}

console.log("Quick Sort ***************************")
console.log(quickSort(array))
