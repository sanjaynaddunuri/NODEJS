let c=0
function fibonacci(n) {
    
    if (n <= 1) {
        return 1;
    }
   
    return fibonacci(n - 1) + fibonacci(n - 2)
    
}
let res = fibonacci(9)
console.log(res)