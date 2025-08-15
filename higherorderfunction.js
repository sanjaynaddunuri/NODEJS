function f1()
{
    function f2()
    {
        console.log("iam f2")
    }
    return f2
}

//f1- higher order because it is returning another function

let arr=[10,20,30]
function myfun(ele)
{
    console.log(ele)

}
arr.forEach(myfun)
//forEach is a higher order , it takes myfunc() as a argument
//myfunc- callback function

//forEach(),map(),filter(),reduce()=> higher order function which will take function as a argument