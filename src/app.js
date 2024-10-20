
//Express is to make the server
import express from 'express';
//Morgan is used to follow the request
import morgan  from 'morgan';
import authRoutes from './routes/auth.routes.js'


// Running express and saving in app
const app = express();
//Use morgan to the request 
app.use(morgan('dev'));
app.use(express.json());
//Execute the routes (Comment and delete)
app.use("/api",authRoutes);
  

export default app;

