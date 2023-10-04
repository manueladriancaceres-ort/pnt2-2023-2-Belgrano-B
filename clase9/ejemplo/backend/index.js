import express from 'express'
import cors from 'cors'
const app = express()
app.use(cors())
app.use(express.json())
const port = 3000
app.get('/ping', (req, res) => {
  res.send('pong')
})
const lista = [{id:100,name:'Charly'},{id:200,name:'Jhon'}]
app.get('/lista', (req, res) => {
    res.json(lista)
})
app.post('/lista', (req,res) =>{
    //console.log(req.body);
    lista.push(req.body)
    res.status(200).json({message:'ok'})
})
app.delete('/lista/:id', (req,res) =>{
    console.log(req.params.id);
    console.log(lista.indexOf(e=>e.id==req.params.id));
    res.status(200).json({message:'ok'})
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})