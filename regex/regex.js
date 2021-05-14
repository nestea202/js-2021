
const phone = /\+?4?0\d{9}/

let text = `
Hello,my phone is 0736289130.
`

let phones = text.match(phone)
let masked = text.replace(phone, '*****')

console.log(masked)
console.log(phones)