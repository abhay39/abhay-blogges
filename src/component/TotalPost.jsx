
"use client";
import React, { useLayoutEffect, useState } from "react";
import toast from "react-hot-toast";

const TotalPost = () => {
    
    const [totalUsers, setTotalUsers] = useState([]);

    const getTotalUsers = async () => {
        let res = await fetch("/api/posts");
        res = await res.json();
        setTotalUsers(res);
      };
    
      useLayoutEffect(() => {
        getTotalUsers();
      }, [totalUsers]);

      const deleteItem=async(item)=>{
        let res= await fetch(`/api/posts/${item._id}`,{
          method:"DELETE",
          headers:{
            "Content-Type":"application/json"
          }
        });
        const status=res.status;
        console.log(status)
        res = await res.json();
        if(status==200){
          toast.success(res.message)
        }else{
          toast.error(res.message)
        }
      }

  return (
    <div className=" w-full">
          <div>
            <h1 className=" font-bold text-2xl">Posts List</h1>
                <table>
                <tr>
                    <th>S. No.</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Date Posted</th>
                    <th>Action</th>
                </tr>
                {totalUsers?.length > 0
                    ? (
                        totalUsers?.map((item,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.title}</td>
                                    <td>{item.author}</td>
                                    <td>{item.createdAt.slice(0,10)}</td>
                                    <td onClick={()=>{
                                      deleteItem(item)
                                    }} className=" bg-red-600 p-2 rounded-md cursor-pointer text-white text-center font-semibold">
                                      Delete
                                    </td>
                                </tr>
                            )
                        })
                    )
                    : <h1>No users...</h1>}
                </table>
          </div>
        </div>
  )
}

export default TotalPost