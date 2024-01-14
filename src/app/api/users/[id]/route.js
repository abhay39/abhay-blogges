
import connectMONGO from "@/utils/connect";
import User from "../../models/user";

export const DELETE = async (req, res) => {
    const id=res.params.id;
    await connectMONGO();
    const isDeleted=await User.findByIdAndDelete(id);
    if(isDeleted){
       return NextResponse.json({
          "message": "User deleted successfully!!"
       },{status:200});
    }else{
      return NextResponse.json({
         "message": "Error deleting item"
      },{status:500});
    }
}