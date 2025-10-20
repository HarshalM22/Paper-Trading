import express from 'express';
import cors from 'cors'
const app = express();
const PORT = 3000 ;

app.use(express.json());
app.use(cors())
app.post('/api/signin',(req,res)=>{
    res.json({
        msg: "signed in" 
    })
})
app.post('/api/signup',(req,res)=>{
    res.send('signup route')
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})

