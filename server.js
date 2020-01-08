const express = require('express');
const app = express();
const { check, validationResult } = require("express-validator")
app.use(express.urlencoded())

app.get('/register', (req, res) => {
    const strForm = ` 
    <form action="/register" method="POST">
    <h1>Register</h1>
     <label for="title"> Email</label>
    <input type="text" name="email">
     <label for="title">Password</label>
    <input type="text" name="password">
   <button type="submit">Submit</button>
        
   `
    res.send(strForm);
});
app.post("/register",
       check("email").isEmail(),
       check("password").isLength({min:4,max:10}),
(req, res) => {
    const errors = validationResult(req)
    console.log(req.body)
    if(errors.isEmpty()){
        return res.send(req.body)
    }
    res.send(errors)
})
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
