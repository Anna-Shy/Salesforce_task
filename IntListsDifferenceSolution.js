const first = [1, 3, 3, 4, 6, 5, 4];
const second = [6, 3, 5, 2, 2];


const arr_different = (arr_1, arr_2) => arr_1.concat(arr_2).filter(e => !(arr_1.includes(e) && arr_2.includes(e)));
const arr_result_simple = (arr_1, arr_2) => arr_different(arr_1, arr_2).filter((i, e) => arr_different(arr_1, arr_2).indexOf(i) == e).sort();

console.log(arr_result_simple(first, second));