import Category from "../../models/Category";

export const DELETE = async (req, res) => {
   await connectMONGO();
    const id=res.params.id;
    const isDeleted=await Category.findByIdAndDelete(id);
    if(isDeleted){
       return NextResponse.json({
          "message": "Category deleted successfully!!"
       },{status:200});
    }else{
      return NextResponse.json({
         "message": "Error deleting item"
      },{status:500});
    }
}