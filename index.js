
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
app.put('/contact',(req,res)=>{
    res.send('peticion put');

});

//ruta test
app.delete('/test',(req,res)=>{
    res.send('peticion delete');

});

app.listen(3000,()=>{
    console.log('servidor funcionado en puerto 3000');

});





