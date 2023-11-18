

const Cover = () => {
    return (
        <div className="flex flex-col-reverse lg:flex-row lg:h-[80vh] justify-between items-center px-[10%] mt-6 lg:mt-0">

            <div>
                <h1 className="playfont  text-[2rem] md:text-[2.5rem] lg:text-[4rem] lg:leading-[4.5rem] lg:w-[40rem]">Tech Guru Explore the Future of Electronics</h1>
                <p className="mt-6 text-xl lg:w-[45rem]">Your One-Stop Destination for the Latest Gadgets, Gizmos, and Cutting-Edge Technology. Discover Innovation, Shop Excellence.</p>

                <button className="capitalize w-[18rem] h-14 btn-secondary bg-[#F45E0C] border-none rounded-lg text-white mt-8 text-xl">Explore Now</button>
            </div>

            <div className="w-[100vw] lg:w-[33rem] flex justify-center items-center lg:h-[33rem] rounded-[33rem] bg-gray-100">
                <img className="" src="https://i.ibb.co/2WpDv83/Frame-26086938.png" alt="" />
            </div>
            
        </div>
    );
};

export default Cover;