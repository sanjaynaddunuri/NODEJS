employess = [
    { eid: 101, name: "sanjay", sal: 5000, gender: 'male' },
    { eid: 103, name: "srija", sal: 8000, gender: 'female' },
    { eid: 105, name: "chinnulu", sal: 6000, gender: 'female' },
    { eid: 102, name: "chinnu", sal: 9000, gender: 'male' },
    { eid: 1014, name: "sanushree", sal: 8000, gender: 'female' }
];
//find all the employees whose sal is 8000
let res3 = employess.filter((ele) => ele.sal == 8000)
console.log(res3)
