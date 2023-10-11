import express from 'express'
import cors from 'cors'
import jsonwebtoken from 'jsonwebtoken';

const app = express()
app.use(cors())
app.use(express.json())
const port = 3000

app.get('/ping', (req, res) => {
  res.send('pong')
})

// base de prueba en memoria
const users = [
  {email:'admin@test.com',password:'1234','rol':'admin'},
  {email:'user@test.com',password:'1234','rol':'user'},
]

app.post('/login',(req,res) =>{
  //console.log(req.body);
  if(req.body) {
    const user = req.body;
    //console.log(user);
    const userDb = users.find(u=>u.email==user.email&&u.password==user.password)
    //console.log(userId);
    if(userDb) {
      const token =
        jsonwebtoken.sign({email:user.email,rol:'adm'},'clave_secreta')
        res.json({token:token})
    } else {
      res.status(401).json({message:'error'})
    }
  } else {
    res.status(400).json({message:'error'})
  }
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
    // console.log(req.params.id);
    // lista = lista.filter(e=>e.id!=req.params.id)
    const index = lista.findIndex(e=>e.id==req.params.id);
    lista.pop(index)
    res.status(200).json({message:'ok'})
})
app.put('/lista/:id', (req,res) =>{
    //console.log(req.body);
    //console.log(req.params.id);
    const index = lista.findIndex(e=>e.id==req.params.id);
    lista[index]=req.body
    res.status(200).json({message:'ok'})
    // falta manejo de errores
    // res.status(404).json({message:'error'})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})