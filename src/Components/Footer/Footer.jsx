import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="text-white mt-28 flex-wrap bg-black lg:h-[30rem] flex justify-between items-center px-[10%]">
            <div className="h-[18rem]">
                <h1 className="text-2xl font-bold text-white">Exclusive</h1>
                <p className="mt-6 text-xl font-medium text-white">Subscribe</p>
                <p className="mt-6 text-xl  text-white">Get 10% off your first order</p>
                <div className="relative w-[17rem] mt-5">
                    <input type="text" placeholder="Enter you email" className="input input-bordered w-[13.5rem] bg-black border-2 border-white pr-16" />
                    <button className="btn border-r-2 border-t-2 border-b-2 border-white btn-primary bg-[#F45E0C] absolute top-0 right-0 rounded-l-none">Subscribe</button>
                </div>
            </div>

            <div className="h-[18rem]">
            <p className="mt-6 text-xl font-medium text-white">Support</p>
            <p className="w-[11rem] mt-6">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
            <p className="my-4">exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
            </div>


            <div className="h-[18rem]">
            <p className="mt-6 text-xl font-medium text-white">Account</p>
            <p className="w-[11rem] mt-6">My Account</p>
            <p className="my-4">Login / Register</p>
            <p>Cart</p>
            <p className="mt-4">Wishlist</p>
            <p className="mt-4">Shop</p>
            </div>


            <div className="h-[18rem]">
            <p className="mt-6 text-xl font-medium text-white">Quick Link</p>
            <p className="w-[11rem] mt-6">Privacy Policy</p>
            <p className="my-4">Terms Of Use</p>
            <p className="mb-4">FAQ</p>
            <p>Contact</p>
            
            </div>


            <div className="h-[18rem]">
            <p className="mt-6 text-xl font-medium text-white">Download App</p>
            <p className="w-[11rem] mt-6">Save $3 for new user</p>
            <div className="flex gap-3 mt-3">
                <img src="https://i.ibb.co/Sc5xxNb/Qrcode-1.png" alt="" />
                <div className="flex flex-col gap-3">
                    <img src="https://i.ibb.co/xjctTHQ/appple.png" alt="" />
                    <img src="https://i.ibb.co/0rLTZqY/goooogle.png" alt="" />
                </div>
            </div>

            <div className="flex mt-6 gap-6">
                <FaFacebookF/>
                <FaInstagram/>
                <FaTwitter/>
                <FaLinkedinIn/>

            </div>
            
            </div>

        </div>
    );
};

export default Footer;