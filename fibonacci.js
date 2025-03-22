

function fibonacci(num) {

    if (num === 0) return [];
    if (num === 1) return [0];

    let result = [0, 1];

    for (let i = 2; i < num; i++) {
        result.push(result[i - 2] + result[i - 1]);
    }
    return result;
}



function recursiveFibonacci(n) {
    console.log("This was printed recursively");

    if (n === 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];


    let result = recursiveFibonacci(n - 1);

    result.push((result[result.length - 1] + result[result.length - 2]));
    return result;
}


// console.log(fibonacci(8));

//console.log(recursiveFibonacci(8));