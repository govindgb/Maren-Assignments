const app = require('./app');
require('dotenv').config();



const PORT = process.env.PORT || 3002; 
// Database Connection
const connectDB = require('./config/dbConfig');
connectDB();

app.listen(PORT, ()=>{
    console.log('Server is running on port 3002');
});