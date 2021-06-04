require('dotenv').config({path:'./config/.env'});
express =require ('express');
const cors=require("cors")
const connect=require("./config/connectDB");
const User=require("./models/User");
//instanciatiation
const app= express();

// middlewware
app.use(express.json())
app.use(cors())

// connect to DB
connect()


//Port 
const port=process.env.PORT;
const host=process.env.HOST;
app.listen (port,host, err=>{
       err? console.log(err): console.log(`🚀server is running on ${host} : ${port}`)
  
})

//crud
//get 
// @ path:  http://localhost:7000/getusers
// get all users
// accés public/private
app.get("/getusers",async(req,res)=>{
       try {
          const users=await User.find()
          res.json({msg:"data fetched",users})
       } catch (err) {
           console.log(err)
       }
})

//add 
// @ path:  http://localhost:7000/addUser
// add new user
// accés public/private
app.post("/addUser",async(req,res)=>{

       try {
           const newUser= new User({
               // name:req.body.name,
               // email:req.body.email
               ...req.body
       
           })
           const user=await newUser.save()
           res.json({msg:"user created",user})
       } catch (err) {
           console.log(err)
       }
})
   
//delete 
// @ path:  http://localhost:7000/deleteUser/:id
// delete User
// accés public/private
app.delete("/deleteUser/:id",async(req,res)=>{
       try {
           const user=await User.findOneAndDelete({_id:req.params.id})
           console.log(user)
            res.json({msg:"user deleted",user}) 
           
       } catch (err) {
           console.log(err)
           
       }
   })   
//edit 
// @ path:  http://localhost:7000/editUser/:id
// edit User
// accés public/private
app.put("/editUser/:id",async(req,res)=>{
       // req.body={name:"",tel:11111} ==> ...req.body
   try {
       
       const user=await  User.findOneAndUpdate({_id:req.params.id},{$set:{...req.body}})
       res.json({msg:"user edited",user})
   } catch (err) {
       console.log(err)
   }
})
