const url=require('url')
let urlstr='http://localhost:8080/default.htm?year=2025&month=may'
let urlObj=url.parse(urlstr,true)
console.log(urlObj)

let u= {
  
  protocol: 'https:',
  hostname: 'example.com',
  hostname: 'localhost',
  pathname: '/some/path',
  query:{
    country:'india',
    state:'karnataka'
  }
}

let urlstring=url.format(u)
console.log(urlstring)