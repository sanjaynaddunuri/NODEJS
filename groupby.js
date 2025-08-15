employees = [
    { eid: 101, name: "sanjay", sal: 5000, gender: 'male' },
    { eid: 103, name: "srija", sal: 8000, gender: 'female' },
    { eid: 105, name: "chinnulu", sal: 6000, gender: 'female' },
    { eid: 102, name: "chinnu", sal: 9000, gender: 'male' },
    { eid: 1014, name: "sanushree", sal: 8000, gender: 'female' }
];

function groupBy(arr, field) {
    let result = {};
    for (let emp of employees) {
        let value = emp[field]
        if (result[value]) {
            result[value].push(emp)
        }
        else {
            result[value] = []
            result[value].push(emp)
        }
    }
    return result;


}
let res = groupBy(employees, 'gender')
console.log(res)