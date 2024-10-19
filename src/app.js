//Important

//This server using http

// Importing required modules using ES module syntax
import express from 'express';

// Running express and saving in app
const app = express();
//Port 3000
const port = 3000;

//Routes and what you see in the application.
//Asnwer to customer
app.get('/',(req,res)=>{
    res.send("Hello world!")
})

// Starting the server
app.listen(port,() => {
    console.log(`Server is running on http://localhost:${port}`);
});
  

