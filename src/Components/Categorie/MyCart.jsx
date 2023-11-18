
import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";



const MyCart = () => {
    const cartloaderData = useLoaderData();
    const [products, setProducts] = useState(cartloaderData);
    const {user} = useContext(AuthContext);
    const email = user.email;
    const filteredCart = products.filter((item) => item.email === email);

    const handleDelete = (id)=>{

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://brand-shop-server-1ihppeltp-jannat-ara-haque-juis-projects.vercel.app/product/${id}`, {
                    method: 'DELETE'
                    
                })
                .then(res=>res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your Coffee has been deleted.',
                            'success'
                        )
                        const remaining = products.filter(prod => prod._id !== id);
                        setProducts(remaining);
                    }
                })
              
            }
          })
    }



    
    return (
        <div className="px-[10%]">

            <div className="mt-32 grid grid-cols-1 lg:grid-cols-2 gap-6">

                {
                    filteredCart.map(item=><div key={item._id} style={{ boxShadow: "-2px 2px 15px -1px rgba(113, 113, 113, 0.12)" }} className="w-full flex  flex-col lg:flex-row justify-center lg:justify-start items-center gap-8 lg:h-[13.25rem] p-4">
                    <img className="w-[11rem]  h-[12rem]" src={item.photo} alt="" />
                    <div>
                        <h1 className="text-2xl font-medium">{item.name}</h1>
                        <p className="font-medium mt-2 ">${item.price}</p>
                        <p className="text-lg"><span className="font-medium">Brand:</span> {item.brand}</p>

                        <button onClick={() => handleDelete(item._id)} className="btn btn-secondary mt-3 bg-[#FF6951] border-none w-[7rem] capitalize text-white text-lg">Delete</button>
                    </div>
                </div>)
                }
                
            </div>

        </div>
    );
};

export default MyCart;