const connection = require('../models/db');
const  jwt= require('jsonwebtoken')
module.exports.login = (req,res)=>{
/* recbir los dats del front y que me lo imprima por consola y que luego manipular esos datops  */
const {username,password} = req.body ; 
/* console.log(usrname)
console.log(password) */

const  consult = 'SELECT * FROM login WHERE username = ? and password = ? '

try {
    connection.query(consult,[username,password] , (err,result)=>{
        if(err){
            res.send(err); 

        }
        if(result.length > 0  ){
            const  token = jwt.sign({username},"stack" ,{
                expiresIn:'2m' //expiracion dias buscar en star overflow validacion de token en minutos
            })
            //console.log(result)
            res.send({token})
        }else{
            console.log('usuario no exit')
            res.send({message: 'usuario no exitddd' })
        }
    })
}catch(e){

}
}

