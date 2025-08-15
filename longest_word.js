let str = "this is javascript class"

let words = str.split(' ')
let longest_word='';
for (word of words)
{
    if(word.length>longest_word.length)
    {
        longest_word=word
    }

}
console.log(longest_word)
