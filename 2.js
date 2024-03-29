function bubbleSort(arr) {
    const n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
}

// Example usage:
const arr = [64, 34, 25, 12, 22, 11, 90];
console.log("Array before sorting:", arr);
bubbleSort(arr);
console.log("Array after sorting:", arr);