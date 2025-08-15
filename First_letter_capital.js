let str = "this is javascript class"

let words = str.split(' ')
let res = '';
for (word of words) {
    let changedWord = word[0].toUpperCase() + word.substring(1)
    res = res + changedWord + ' ';
}

console.log(res)
