function generateArray(size, min = 0, max = 100) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}

function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[arr.length - 1];
    const left = [], right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right) {
    let result = [], i = 0, j = 0;
    while (i < left.length && j < right.length) {
        result.push(left[i] < right[j] ? left[i++] : right[j++]);
    }
    return result.concat(left.slice(i), right.slice(j));
}

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

function findMax(arr) {
    return Math.max(...arr);
}

function findMin(arr) {
    return Math.min(...arr);
}

function calculateAverage(arr) {
    return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}

function reverseArray(arr) {
    return arr.slice().reverse();
}

function removeDuplicates(arr) {
    return [...new Set(arr)];
}

function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function mergeSortedArrays(arr1, arr2) {
    return merge(quickSort(arr1), quickSort(arr2));
}

function rotateLeft(arr, times) {
    for (let i = 0; i < times; i++) {
        arr.push(arr.shift());
    }
    return arr;
}

function rotateRight(arr, times) {
    for (let i = 0; i < times; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
}

function measureTime(fn, arr, ...args) {
    const start = performance.now();
    const result = fn(arr, ...args);
    const end = performance.now();
    return { result, time: end - start };
}

function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) return false;
    }
    return true;
}

function partitionEvenOdd(arr) {
    return {
        even: arr.filter(num => num % 2 === 0),
        odd: arr.filter(num => num % 2 !== 0)
    };
}

function findMedian(arr) {
    const sorted = quickSort([...arr]);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}

function findMode(arr) {
    const freq = {};
    let maxCount = 0, mode;
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
        if (freq[num] > maxCount) {
            maxCount = freq[num];
            mode = num;
        }
    }
    return mode;
}

function generateFibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function generatePrimes(limit) {
    let primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) primes.push(i);
    }
    return primes;
}

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

function productArray(arr) {
    return arr.reduce((prod, num) => prod * num, 1);
}

function filterEven(arr) {
    return arr.filter(num => num % 2 === 0);
}

function filterOdd(arr) {
    return arr.filter(num => num % 2 !== 0);
}

function findSecondLargest(arr) {
    const uniqueSorted = [...new Set(arr)].sort((a, b) => b - a);
    return uniqueSorted.length > 1 ? uniqueSorted[1] : null;
}

function findSecondSmallest(arr) {
    const uniqueSorted = [...new Set(arr)].sort((a, b) => a - b);
    return uniqueSorted.length > 1 ? uniqueSorted[1] : null;
}

function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1);
}

function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
    return Math.abs(a * b) / gcd(a, b);
}

function power(base, exp) {
    return Math.pow(base, exp);
}

function countOccurrences(arr, target) {
    return arr.filter(num => num === target).length;
}

function removeElement(arr, target) {
    return arr.filter(num => num !== target);
}

function replaceElement(arr, oldVal, newVal) {
    return arr.map(num => (num === oldVal ? newVal : num));
}

function main() {
    const size = 50;
    const max = 100;
    const array = generateArray(size, 0, max);

    console.log("Original Array:", array);
    console.log("Sorted:", quickSort([...array]));
    console.log("Max:", findMax(array));
    console.log("Min:", findMin(array));
    console.log("Average:", calculateAverage(array).toFixed(2));
    console.log("Median:", findMedian(array));
    console.log("Mode:", findMode(array));
    console.log("Reversed:", reverseArray(array));
    console.log("Unique:", removeDuplicates(array));
    console.log("Shuffled:", shuffleArray([...array]));

    const { even, odd } = partitionEvenOdd(array);
    console.log("Even:", even);
    console.log("Odd:", odd);

    console.log("Rotated Left:", rotateLeft([...array], 3));
    console.log("Rotated Right:", rotateRight([...array], 3));
    console.log("Fibonacci:", generateFibonacci(10));
    console.log("Primes up to 50:", generatePrimes(50));

    console.log("Sorted Check:", isSorted(array));
    console.log("Sum:", sumArray(array));
    console.log("Product:", productArray(array));
    console.log("Second Largest:", findSecondLargest(array));
    console.log("Second Smallest:", findSecondSmallest(array));

    console.log("Factorial of 5:", factorial(5));
    console.log("GCD of 12 and 18:", gcd(12, 18));
    console.log("LCM of 12 and 18:", lcm(12, 18));
}

main();