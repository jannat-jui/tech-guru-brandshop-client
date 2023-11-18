import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {
    const [error, setError] = useState(null);
    const {googleSignIn, createUser, handleUpdateProfile} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const handleRegisterSubmit = (e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        
        if(password<6){
            setError("Your password should be long 6 character")
            toast.error("You need to use 6 character long password")
        }
        else if (!/[A-Z]/.test(password)){
            setError("You need to use capital letter");
            toast.error("Use a storng password")
            return;
        }
        
        else if(!/[!@#$%^&*()_+[\]{}|;:'",.<>?]/.test(password)){
            setError("You need to use special character");
            toast.error("Use a storng password")
            return;
        }
        
        createUser(email, password) 
        .then(result=>{
            handleUpdateProfile(name, photo)
            
            toast.success('User logged in successfully');
            navigate(location?.state ? location.state: '/')
        })
        .catch(error=>{
            toast.error(error.message)
            setError("Your password should be more than 6 character")
        })


    }
    const handleGoogleLogin = ()=>{
        googleSignIn()
        .then(result =>{
            toast.success('User logged in successfully');
            navigate(location?.state ? location.state: '/')
        })
        .catch(error=>{
            toast.error(error.message)
        })
    }
    return (
        <div className="flex justify-between items-center">
            <img className="w-[50vw] h-[80vh] hidden lg:block" src="https://i.ibb.co/JnJgtDx/dl-beatsnoop-1.png" alt="" />
            <div className="lg:w-[40vw] mt-16 mx-auto p-8 lg:p-16 rounded-lg bg-white ">
                <h1 className="text-[1.5rem] font-medium">Create an account</h1>
                <p className="mt-3 text-[#717171] ">Enter your details below</p>
                <ToastContainer />
                <form onSubmit={handleRegisterSubmit}>
                    <p className="text-xl mt-6 mb-3">Your Name</p>
                    <input className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-500 rounded focus:outline-none bg-gray-100" type="text" name="name" placeholder="Enter Your Name" />

                    <p className="text-xl mt-6 mb-3">Your Email</p>
                    <input required className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-500 rounded focus:outline-none bg-gray-100" type="email" name="email" placeholder="Enter Your Email" />


                    <p className="text-xl mt-6 mb-3">Password</p>
                    <input required className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-500 rounded focus:outline-none bg-gray-100" type="password" name="password" placeholder="Set a Password" />


                    <p className="text-xl mt-6 mb-3">Photo (optional)</p>
                    <input className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-500 rounded focus:outline-none bg-gray-100" type="text" name="photo" placeholder="Enter your photo URL" />

                    {
                        error && <p className="pl-6 pt-4 font-medium text-red-600 text-lg">{error}</p>
                    }


                    <p className="text-lg font-medium my-5">Already have a account? <span className="font-extrabold text-orange-700 cursor-pointer"><Link to="/login">Login</Link></span></p>

                    <input className="w-full h-[3.5rem] text-white text-lg cursor-pointer mt-6 p-2  rounded  bg-[#F45E0C]" type="submit" value="Create Account"  />

                    <div onClick={handleGoogleLogin} className="relative lg:w-[400px] mx-auto">
                    <input className="w-full h-[3.5rem] mt-4 text-black text-lg cursor-pointer p-2  rounded border-2  border-[#F45E0C]" type="submit" value="Sign up With Google"  />
                    <img className="absolute top-[2rem] left-4 lg:left-[4rem]" src="https://i.ibb.co/nsRRQDW/Icon-Google.png" alt="" />
                    </div>



                    
                </form>
            </div>
            
        </div>
    );
};

export default Signup;