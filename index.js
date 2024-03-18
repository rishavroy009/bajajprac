
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post('/bfhl', (req, res) => {
const arr = req.body.data;
console.log(arr);




const evens = input.filter(num => isNumber(num)&& num % 2 === 0);
const odds = input.filter(num =>isNumber(num) && num % 2 !== 0);
const alphabets = input.filter(char => /[a-zA-Z]/.test(char)).map(char => char.toUpperCase());

const user_id = "rishav_roy_20082003";
const user_email=  "rishav1165.be21@chitkara.edu.in";
const rollnum="2110991165"

const resp = {
    is_success: true,
    user_id: user_id,email:user_email,
    roll_number:rollnum,
 
    even_numbers: evens,
    odd_numbers: odds,
    alphabets_uppercase: alphabets
};

res.json(resp);
});

app.listen(port, () => {
console.log(`Server running on port ${port}`);
});