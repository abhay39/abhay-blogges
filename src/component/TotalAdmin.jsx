
"use client";
import React, { useLayoutEffect, useState } from "react";
import toast from "react-hot-toast";

const TotalAdmin = () => {
    
    const [totalUsers, setTotalUsers] = useState([]);

    const getTotalUsers = async () => {
        let res = await fetch("/api/users");
        res = await res.json();
        setTotalUsers(res);
      };
    
      useLayoutEffect(() => {
        getTotalUsers();
      }, [totalUsers]);

      const deleteItem=async(item)=>{
        let res= await fetch(`/api/users/${item._id}`,{
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
            <h1 className=" font-bold text-2xl">Users List</h1>
                <table>
                <tr>
                    <th>S. No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Actions</th>
                </tr>
                {totalUsers?.length > 0
                    ? (
                        totalUsers?.map((item,index)=>{
                            return(
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{item.name}</td>
                                    <td>{item.email}</td>
                                    <td>{item.role}</td>
                                    <td onClick={()=>deleteItem(item)} className=" bg-red-600 p-2 rounded-md cursor-pointer text-white text-center font-semibold">
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

export default TotalAdmin