import { useContext } from "react";
import { FaShoppingBag, FaSignInAlt, FaCarSide, FaCartPlus } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Provider/AuthProvider";

const ProductDetails = () => {
    const loadedproduct = useLoaderData()
    const {user} = useContext(AuthContext);
    const email = user.email;
    

    const {name, photo, brand, producttype, price, description, rating} = loadedproduct;

    const productInfo = {email, name, photo, brand, producttype, price, description, rating}

    const handleaddToCart = ()=>{
        fetch('https://brand-shop-server-1ihppeltp-jannat-ara-haque-juis-projects.vercel.app/product',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
        .then(res => res.json())
            .then(data => {
                console.log(data);
                
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added cart Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                }
            })

    }

    
    return (
        <div className="mt-20">
            <div className="flex flex-col lg:flex-row lg:justify-evenly lg:items-center px-[7%] lg:px-0">
                <img className="w-[250px] lg:w-[40vw]" src={loadedproduct.photo} alt="" />

                <div className="lg:w-[30vw]">
                    <h1 className="text-xl font-medium ">{loadedproduct.name}</h1>
                    <div className="w-[5rem] mt-4 h-[2rem] bg-[#063A88] text-white rounded  flex justify-center items-center">⭐{loadedproduct.rating}</div>

                    <p className="text-2xl mt-3">${loadedproduct.price}</p>

                    <div className="flex justify-between items-center my-6">
                        <div className="flex gap-2 lg:text-xl items-center">
                            <FaShoppingBag />
                            In Stock
                        </div>
                        <div className="flex gap-2 lg:text-xl items-center">
                            <FaSignInAlt />
                            Guaranteed
                        </div>
                        <div className="flex gap-2 lg:text-xl items-center">
                            <FaCarSide />
                            Free Delivery
                        </div>
                    </div>

                    <p>{loadedproduct.description}</p>

                    <ul className="space-y-3 mt-3">
                        <li className="list-disc text-xl font-medium">Brand <span className="ml-20">{loadedproduct.brand}</span></li>
                        <li className="list-disc text-xl font-medium ">Type <span className="ml-20">{loadedproduct.producttype}</span></li>
                    </ul>

                    <div className="flex gap-6">
                        <button onClick={handleaddToCart} className=" h-[3rem] hover:bg-orange-400 hover:text-white hover:border-none border-[#0C68F4] border-2 rounded-lg   text-lg font-medium flex justify-center items-center gap-2 mt-6 w-full"><FaCartPlus /> Add to cart </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ProductDetails;