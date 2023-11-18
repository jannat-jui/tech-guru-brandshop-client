import { FaArrowRight } from "react-icons/fa";
import { Link, useLoaderData, useParams } from "react-router-dom";
import NewProducts from "../NewProducts/NewProducts";


const CategorieDetails = () => {
    const loadedproducts = useLoaderData();

    const {clickedName} = useParams();
    

    const filteredData = loadedproducts.filter((item) => item.brand === clickedName);
    
    return (
        <div className="lg:px-[10%]">

            <div>
                <div className="carousel w-[424px] lg:w-[80vw] rounded-2xl mt-20">
                    <div id="slide1" className="carousel-item relative lg:w-[80vw] h-[12rem] lg:h-[22rem]">

                        <div className="lg:w-[80vw] pt-8 lg:pt-0 bg-black">
                            <div className="flex justify-evenly items-center">
                                <div className="px-20 lg:px-0">
                                    <div className="flex items-center lg:gap-6 text-white">
                                        <img className="w-[1rem] lg:w-auto" src="https://i.ibb.co/N3yPXg8/1200px-Apple-gray-logo-1.png" alt="" />
                                        <h1>iPhones</h1>
                                    </div>

                                    <h1 className="lg:w-[20rem] mt-5 text-white text-[0.5rem] lg:text-[3rem] lg:leading-[4rem] font-semibold">Up to 10% off Voucher</h1>
                                    <p className="text-white lg:text-xl flex items-center gap-2 underline mt-5">Shop Now <FaArrowRight /></p>
                                </div>

                                <img className="w-[20vh] pr-10 lg:w-auto" src="https://i.ibb.co/Jrv4GtW/hero-endframe-cvklg0xk3w6e-large-2.png" alt="" />
                            </div>

                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    
                    
                    <div id="slide2" className="carousel-item relative lg:w-[80vw] h-[12rem] lg:h-[22rem]">
                    <div className="lg:w-[80vw] pt-8 lg:pt-0 bg-black">
                            <div className="flex justify-evenly items-center">
                                <div className="px-16 lg:px-0">
                                    <div className="flex items-center lg:gap-6 text-white">
                                        
                                        <h1>Music System</h1>
                                    </div>

                                    <h1 className="lg:w-[30rem] mt-5 text-white text-[0.5rem] lg:text-[3rem] font-semibold">Enhance Your Music Experience</h1>
                                    <p className="text-white lg:text-xl flex items-center gap-2 underline mt-5">Shop Now <FaArrowRight /></p>
                                </div>

                                <img className="w-[20vh] pr-10 lg:w-auto" src="https://i.ibb.co/Xjqz8pv/JBL-BOOMBOX-2-HERO-020-x1-1-1.png" alt="" />
                            </div>

                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>

                    <div id="slide3" className="carousel-item relative lg:w-[80vw] h-[12rem] lg:h-[22rem]">
                    <div className="lg:w-[80vw] pt-8 lg:pt-0 bg-gray-200">
                            <div className="flex justify-evenly items-center">
                                <div className="px-16 lg:px-0">
                                    <div className="flex items-center lg:gap-6 text-white">
                                        
                                        
                                    </div>

                                    <h1 className="lg:w-[30rem] mt-5 text-red-800 text-[0.5rem] lg:text-[3rem] font-bold">SMART WATCH & WEARABLE</h1>
                                    <p className=" lg:text-xl flex items-center gap-2 underline mt-5">Shop Now <FaArrowRight /></p>
                                </div>

                                <img className="w-[22vh] pr-10 lg:w-[31rem] lg:h-[21rem]" src="https://i.ibb.co/98qLcSK/watches-1.png" alt="" />
                            </div>

                        </div>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>




                    
                    
                    
                </div>
            </div>

            {
                (filteredData.length === 0) ? <div className=" mt-14 flex flex-col justify-center items-center">
                    <p className="text-4xl font-bold">Product will be adding soon <span className="loading loading-ball loading-lg"></span></p>

                    <p className="mt-6 text-lg">Thank you for stay with us</p>

                    <h1 className="text-xl font-bold mt-8">You can browse more product</h1>

                    <NewProducts></NewProducts>
                </div> : 
               
               <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8">

                {
                    filteredData.map(item=><div key={item._id} className="flex flex-col lg:flex-row border-2 p-4 items-center gap-12">
                    <img className="w-[40vw] lg:w-[20vw]" src={item.photo} alt="" />

                    <div>
                        <h1 className="text-xl font-medium ">{item.name}</h1>
                        <div className="w-[5rem] mt-4 h-[2rem] bg-[#063A88] rounded text-white flex justify-center items-center">⭐ {item.rating}</div>

                        <p className="text-2xl mt-3">${item.price}</p>

                        <ul className="space-y-3 mt-3">
                            <li className="list-disc text-xl font-medium ">Brand<span className="">: {item.brand}</span></li>
                            <li className="list-disc text-xl font-medium ">Type: <span className="">{item.producttype}</span></li>
                        </ul>

                        <div className="flex gap-6">
                        <Link to={`/productdetails/${item._id}`}><button className="btn btn-secondary mt-4 bg-[#FF6951] border-none w-[7rem] capitalize text-white text-lg">Details</button></Link>
                        <Link to={`/update/${item._id}`}><button className="btn btn-secondary mt-4 bg-[#FF6951] border-none w-[7rem] capitalize text-white text-lg">Update</button></Link>
                        </div>
                    </div>
                </div>)
                }
                
                
            </div>
            }

        </div>
    );
};

export default CategorieDetails;