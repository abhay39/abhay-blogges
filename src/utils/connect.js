import mongoose from 'mongoose';

const connectMONGO=async()=>{
  try{
    await mongoose.connect(process.env.MONGO);
  }catch(e){
    console.log(e);
  }
}
export default connectMONGO;