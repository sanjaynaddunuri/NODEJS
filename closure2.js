let account={accNo:12345,accBal:5000};//npt encapsulated
console.log(account.accNo,account.accBal)//read
account.accBal=-50000//write
console.log(account.accNo,account.accBal)//read


function openaccount(initialbal)
{
    console.log(`Your Account is Opened with ${initialbal}`)
    let accNo=12345
    let accBal=initialbal;

    return {
        displayinfo:function()
        {
            console.log(accNo,accBal)
        },
        deposit:function(amt)
        {
            if (amt<0)
            {
                console.log("cant add")
            }
            else{
            accBal=accBal+amt
            console.log(`you deposited ${amt} , your current balance is ${accBal}`)
            }
        }
    }
}
let encapsulatedaccount = openaccount(3000)
console.log(encapsulatedaccount.accBal,encapsulatedaccount.accNo)
encapsulatedaccount.displayinfo()
encapsulatedaccount.deposit(4000)
encapsulatedaccount.displayinfo()