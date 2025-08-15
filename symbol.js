let id=Symbol('id')
let user={
    'name':'sanjay',
    'age':22,
    [id]:101
}

console.log(user)
console.log(user[id])

for (key in user)
{
    console.log(key+"..."+user[key])
}
console.log(Object.keys(user))
console.log(Object.getOwnPropertySymbols(user))