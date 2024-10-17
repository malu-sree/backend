const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Sample data for /home route
app.get("/home", (req, res) => {
    let array = [
        { fruitName: 'Apple', rate: '145', quality: 'A' },
        { fruitName: 'Orange', rate: '45', quality: 'B' },
        { fruitName: 'Banana', rate: '100', quality: 'C' },
        { fruitName: 'Grapes', rate: '145', quality: 'A' },
    ];
    res.send(array);
});


app.post("/add", (req, res) => {
    const { num1, num2 } = req.body; 
    const sum = num1 + num2; 

    
    console.log(`Received numbers: ${num1}, ${num2}. Sum: ${sum}`);

   
    res.send({ sum });   
});


app.post("/userpost", (req, res) => { 
    const { username, email, mobile, message } = req.body; 
    console.log(req.body);
    res.send("Successfully posted user data.");
});


app.get("/", (req, res) => {
    res.send("Home page");
});


app.listen(9000, () => {
    console.log("Server running at http://localhost:9000");
});
