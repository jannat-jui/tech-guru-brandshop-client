import { FaArrowRight } from "react-icons/fa";

const OurBlogs = () => {
    return (
        <div className="px-[10%] ">
            <div className="flex items-center gap-4 mt-36">
                <div className="w-[1.25rem] h-[2.5rem] bg-[#F45E0C]">


                </div>
                <h1 className="text-[#F45E0C] font-semibold">Blogs</h1>
            </div>

            <div className="flex justify-between"><h1 className=" text-[1.5rem] lg:text-[2.25rem] font-semibold mt-5">Our Recent Blogs</h1>
            <h2 className="text-lg flex gap-3 items-center cursor-pointer font-medium text-[#F45E0C]">See All <FaArrowRight/></h2>
            </div>


            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mt-24">

                <div className="w-[25rem] h-[21rem] rounded-lg bg-white ">
                    <img className="rounded-lg w-[25rem]" src="https://i.ibb.co/q9kKPRX/image.png" alt="" />
                    <div className="flex justify-between items-center mt-2 px-3">
                        <div className="flex items-center gap-2">
                            <img src="https://i.ibb.co/F7M824V/calendar.png" alt="" />
                            <p className="text-xs">August , 8 , 2023</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <img src="https://i.ibb.co/2yWdJHj/timer.png" alt="" />
                            <p className="text-xs">3 min read</p>
                        </div>
                    </div>
                    <h1 className="overflow-hidden px-3 text-xl font-medium mt-2">Meta Platforms plans to release free software that...</h1>
                    <p className="px-3 mt-2">The parent company of Facebook, Meta Platforms, is introducing software to help developers </p>

                </div>

                <div className="pt-16 lg:pt-0">

                    <div className=" lg:h-[10rem] flex flex-col lg:flex-row rounded-lg bg-white flex-1">
                        <img src="https://i.ibb.co/wW8H2J0/blog-image.png" alt="" />
                        <div className="px-4 my-auto">
                            <h1 className="text-[#F45E0C] font-medium">8 Things You Probably Didn’t Know About Headphones</h1>
                            <p className="mt-3 text-sm text-[#717171]">Owning a headphone could mean a different thing for different people. For some, it act as a fashion statement. It’s easy to spot these people, the headphone are almost always just hanging around the neck.</p>
                            <div className="flex mt-4 items-center gap-2">
                                <img src="https://i.ibb.co/F7M824V/calendar.png" alt="" />
                                <p className="text-xs">August , 8 , 2023</p>
                            </div>
                        </div>

                    </div>
                    <div className=" lg:h-[10rem]  mt-2 flex flex-col lg:flex-row rounded-lg bg-white flex-1">
                        <img src="https://i.ibb.co/wW8H2J0/blog-image.png" alt="" />
                        <div className="px-4 my-auto">
                            <h1 className="text-[#F45E0C] font-medium">8 Things You Probably Didn’t Know About Headphones</h1>
                            <p className="mt-3 text-sm text-[#717171]">Owning a headphone could mean a different thing for different people. For some, it act as a fashion statement. It’s easy to spot these people, the headphone are almost always just hanging around the neck.</p>
                            <div className="flex mt-4">
                                <img src="https://i.ibb.co/F7M824V/calendar.png" alt="" />
                                <p className="text-xs">August , 8 , 2023</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurBlogs;