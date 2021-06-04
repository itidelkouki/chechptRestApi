const mongoose=require("mongoose")


const connectDB=async ()=>{
    try {
        
        await mongoose.connect('mongodb://localhost:27017/contactt-list',{ useUnifiedTopology: true,useNewUrlParser: true, useCreateIndex: true })
        console.log("mongoose connected")
    } catch (error) {
        console.log(error)
    }

}
module.exports=connectDB
