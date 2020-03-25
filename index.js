
const express = require('express');
//middleware
const morgan = require('morgan');
const app = express();
/*
/**
 * req.protocol igual protocolo de http
 * req.get('host') = 'localhost'
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
/*
function looger(req,res,next){
    console.log(`protocolo: ${req.protocol}||
     ${req.get('host')}||
    ruta:${req.originalUrl}`);
    next();
}
*/
app.use(express.json());
//app.use(looger);

//uso de middleware
app.use(morgan('dev'));

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

app.use(express.static('public'))

app.listen(3000,()=>{
    console.log('servidor funcionado en puerto 3000');

});

//npx nodemon index.js




