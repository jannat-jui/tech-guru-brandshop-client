

const CustomerService = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center mt-24 gap-20">
            <div className="w-[16rem] flex justify-center flex-col items-center">
                <div className="w-[4rem] h-[4rem] bg-black rounded-[50%] flex justify-center items-center">
                    <img src="https://i.ibb.co/98gVhs2/icon-delivery.png" alt="" />
                </div>

                <h1 className="text-xl font-semibold mt-6">FREE AND FAST DELIVERY</h1>
                <p className="mt-2 text-sm">Free delivery for all orders over $140</p>
                
            </div>
            <div className="w-[16rem] flex justify-center flex-col items-center">
                <div className="w-[4rem] h-[4rem] bg-black rounded-[50%] flex justify-center items-center">
                    <img src="https://i.ibb.co/qB58GMP/Icon-Customer-service.png" alt="" />
                </div>

                <h1 className="text-xl font-semibold mt-6">24/7 CUSTOMER SERVICE</h1>
                <p className="mt-2 text-sm">Friendly 24/7 customer support</p>
                
            </div>
            <div className="w-[16rem] flex justify-center flex-col items-center">
                <div className="w-[4rem] h-[4rem] bg-black rounded-[50%] flex justify-center items-center">
                    <img src="https://i.ibb.co/xzLjz5W/shield-tick.png" alt="" />
                </div>

                <h1 className="text-xl font-semibold mt-6">MONEY BACK GUARANTEE</h1>
                <p className="mt-2 text-sm">We reurn money within 30 days</p>
                
            </div>
            
        </div>
    );
};

export default CustomerService;