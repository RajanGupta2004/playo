import express from 'express';
import dotenv from 'dotenv';
import connetDB from './config/connectDB.js';

dotenv.config(); // Load environment variables

const app = express();
const port = process.env.PORT || 8000;

const DB_URl = "mongodb://127.0.0.1:27017/playo"

// DB connection
connetDB(DB_URl);

app.use(express.json());


app.get('/', (req, res) => {
  res.send('Server is running...');
});





// Start Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
