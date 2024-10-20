import app from './app.js';
//Import the fuction to connect the database
import {connectionDB} from './db.js';

//Port 3000
const port = 3000;
connectionDB();

//Routes and what you see in the application.
//Asnwer to customer
app.get('/',(req,res)=>{
    res.send("Hello world!")
})

// Starting the server
app.listen(port,() => {
    console.log(`Server is running on http://localhost:${port}`);
});