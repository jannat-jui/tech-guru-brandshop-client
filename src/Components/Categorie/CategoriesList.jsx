import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const CategoriesList = () => {
    const [brand, setBrands] = useState([]);

    useEffect(()=>{
        fetch("/categorie.json")
        .then(res=>res.json())
        .then(data=>setBrands(data))
    }, [])

    

    


    return (
        <div className="mt-8 px-[10%]">

            <div className="flex items-center gap-4">
                <div className="w-[1.25rem] h-[2.5rem] bg-[#F45E0C]">


                </div>
                <h1 className="text-[#F45E0C] font-semibold">Categories</h1>
            </div>

            <h1 className=" text-[2rem] lg:text-[2.25rem] font-semibold mt-5">Browse By Category</h1>



           <div className="flex cat-container justify-center lg:justify-between items-center flex-wrap">
            {
                brand.map(brands=> <Link to={`/details/${brands.name}`} key={brands.id}><div style={{boxShadow: "-2px 2px 15px -1px rgba(113, 113, 113, 0.12)"}} className="w-[11.5rem] mt-[3.5rem] h-[12.5rem] cat-item px-2 py-[1.125rem] rounded-lg flex flex-col justify-center items-center cursor-pointer hover:bg-[#f45d0cd1] hover:text-white bg-white">
                <img className="w-[9rem] h-[9rem]" src={brands.image} alt="" />
                <h1 className="font-medium text-xl text-center">{brands.name}</h1>
            </div></Link>)
            }
           </div>
            
        </div>
    );
};

export default CategoriesList;