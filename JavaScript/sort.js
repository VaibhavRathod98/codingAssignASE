// Following both are the Examples of sorting of an Array in Descending Order
const numbers1 = [4, 2, 9, 5, 1, 8, 6, 3, 7];

// Sort the array in descending order
numbers1.sort(function(a, b) {
    return b - a;
});

console.log(numbers1);

function descendingSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] < arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
}

// Example usage:
const numbers = [4, 2, 9, 5, 1, 8, 6, 3, 7];
descendingSort(numbers);

console.log(numbers); // Sorted in descending order
