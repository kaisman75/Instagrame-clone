import mongoose from 'mongoose';



const instance=mongoose.Schema({
   caption:String,
   user:String,
   Image:String,
   comment:[]
})

export default mongoose.model("posts",instance)