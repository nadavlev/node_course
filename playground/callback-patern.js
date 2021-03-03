
const add = function(a, b, callBack) {
    setTimeout(() => {
        callBack(a + b);
    }, 2000);
}

add(5, 50, (sum) => {
    console.log(sum);
})
