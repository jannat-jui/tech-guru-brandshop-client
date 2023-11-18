import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {

    const [error, setError] = useState('');
    const {signIn, googleSignIn} = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLoginSubmit =(e)=>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
       
        signIn(email, password)
        .then(result=>{
            toast.success('User logged in successfully');
            
            navigate(location?.state ? location.state: '/')
            
        })
        .catch(error=>{
            
            if (error.code === 'auth/invalid-login-credentials') {
                setError('Invalid email or password. Please try again.');
              } else if (error.code === 'auth/user-not-found') {
                setError('User not found. Please check your email.');
              } 
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
        <div className="flex justify-between items-center mt-28">
            <img className="w-[50vw] hidden lg:block h-[80vh]" src="https://i.ibb.co/JnJgtDx/dl-beatsnoop-1.png" alt="" />
            <div className="lg:w-[40vw] mt-16 mx-auto p-8 lg:p-16 rounded-lg bg-white ">
                <h1 className="text-[1.5rem] font-medium">Create an account</h1>
                <p className="mt-3 text-[#717171] ">Enter your details below</p>
                <ToastContainer/>
                <form onSubmit={handleLoginSubmit}>
                    

                    <p className="text-xl mt-6 mb-3">Your Email</p>
                    <input required className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-500 rounded focus:outline-none bg-gray-100" type="email" name="email" placeholder="Enter Your Email" />


                    <p className="text-xl mt-6 mb-3">Password</p>
                    <input required className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-500 rounded focus:outline-none bg-gray-100" type="password" name="password" placeholder="Set a Password" />

                    {
                        error && <p className="pl-6 pt-4 font-medium text-lg text-red-600">{error}</p>
                    }
                   


                    <p className="text-lg font-medium my-5">Do not have a account? <span className="font-extrabold text-orange-700 cursor-pointer"><Link to="/signup">Signup</Link></span></p>

                    <input className="w-full h-[3.5rem] text-white text-lg cursor-pointer mt-6 p-2  rounded  bg-[#F45E0C]" type="submit" value="Sign in"  />

                    <div onClick={handleGoogleLogin} className="relative lg:w-[400px] mx-auto">
                    <input className="w-full h-[3.5rem] mt-4 text-black text-lg cursor-pointer p-2  rounded border-2  border-[#F45E0C]" type="submit" value="Sign in With Google"  />
                    <img className="absolute top-[2rem] left-4 lg:left-[4rem]" src="https://i.ibb.co/nsRRQDW/Icon-Google.png" alt="" />
                    </div>

                    
                </form>
            </div>
            
        </div>
    );
};

export default Login;