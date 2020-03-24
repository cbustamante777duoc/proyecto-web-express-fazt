
const express = require('express');

const app = express();

app.use(express.json());

//ruta inicial
app.get('/user',(req,res)=>{
    //metodo json permite enviar un objeto
    res.json({
        nombre:'lalisa',
        apellido:'manoban'

    });

});

//ruta que tiene un id de usuario
app.post('/user/:id',(req,res)=>{
    console.log(req.body);
    console.log(req.params)
    res.send('peticion post');

});

//ruta about
app.put('/user/:id',(req,res)=>{
    console.log(req.body);
    res.send(`usuario ${req.params.id} updated`);

});

//ruta test
app.delete('/user/:userId',(req,res)=>{
    res.send(`user ${req.params.userId} deleted`);

});

app.listen(3000,()=>{
    console.log('servidor funcionado en puerto 3000');

});





