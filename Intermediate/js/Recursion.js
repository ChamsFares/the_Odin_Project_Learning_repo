function fibs(n) {
    array = [];
    array.push(0);
    array.push(1);
    for (let i = 2; i < n; i++){
        array.push((array[i - 1] + array[i - 2]))
    }
    return array;
}
console.log(fibs(10));
function fibsRec(n) {
    console.log("This was printed recursively");
    if (n <= 2) {
        return [0, 1].slice(0, n + 1);
    }
    const Array = fibsRec(n - 1);
    Array.push(Array[Array.length - 1] + Array[Array.length - 2]);
    return Array;
}

console.log(fibsRec(10));

function mergeSort(arr) {
    console.log("This was printed recursively");
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    let result = [];
    let i = j = 0;
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
}
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));

console.log(mergeSort([105, 79, 100, 110]));
