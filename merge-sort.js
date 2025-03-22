function mergeSort(array) {
    if (array.length <= 1) return array;

    const left = array.slice(0, array.length / 2);
    const right = array.slice(array.length / 2);

    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);

    return merge(leftSorted, rightSorted);

}


function merge(left, right) {
    let result = [];

    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Append remaining elements from left (if any)
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    // Append remaining elements from right (if any)
    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;

}




//console.log(mergeSort([1, 5, 12, 0, 40, 55, 22, 9, 4, 130]));