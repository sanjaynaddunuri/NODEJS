let user={"first name":"sanjay",age:35,add:"warangal"}
let a ="add"
console.log(user['first name'])
console.log(user.a)
console.log(user[a])

for (let key in user)
{
    console.log(key+"====="+user[key])
}