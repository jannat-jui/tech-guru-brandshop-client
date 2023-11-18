import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const ErrorElement = () => {
    const error = useRouteError();
    const navigate = useNavigate()

    const handlebackhome = ()=>{
        navigate('/')
    }
    return (
        <div>
            <Navbar></Navbar>
           <div className="my-[30vh]">
           <p className="text-2xl font-medium text-center">{error.statusText || error.message}</p>

           <p className="text-2xl font-medium text-center">
            {
                error.status === 404 && <div>
                    <h3 className='text-[2rem] mt-8 lg:text-[4rem] font-medium'>404 Not Found</h3>
                    <span className="loading mt-8 loading-infinity loading-lg"></span> <br />
                    <button onClick={handlebackhome} className='btn btn-secondary border-none text-white w-[16rem] bg-[#F45E0C] mt-14- h-12'>Back to Home Page</button>
                </div>
            }
           </p>
           </div>

            <Footer></Footer>
            
        </div>
    );
};

export default ErrorElement;


{/* <h1 onClick={handlebackhome} className="text-[#374151] mt-20 ml-[10%] text-center cursor-pointer rancho text-[1.87rem] drop-shadow-lg flex items-center gap-3"> <FaLongArrowAltLeft/> Back to home</h1> */}