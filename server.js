
express =require ('express');
const app= express();

require('dotenv').config();
const port=process.env.PORT;
const host=process.env.HOST;

app.listen (port,host, err=>{
       err? console.log(err): console.log(`🚀server is running on ${host} : ${port}`)
  
})
console.log(port);




