const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const notFound = require('./middlewares/not-found');
dotenv.config();
const app = express();
const geminiRoute = require('./routes/ai-gemini-route');
app.use(cors());
app.use(express.json());

app.use('/ask/gemini/',geminiRoute );

app.get('/', (req, res)=>{
    res.send('Hello World');
})

app.use(notFound);
const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
