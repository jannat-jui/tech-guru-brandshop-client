
import Swal from "sweetalert2";


const AddProduct = () => {

    const handleAddProduct = (e) =>{
        e.preventDefault()
        const form = e.target;
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const brand = e.target.category.value;
        const producttype = e.target.producttype.value;
        const price = e.target.price.value;
        const description = e.target.description.value;
        const rating = e.target.rating.value;

        const productInfo = {name, photo, brand, producttype, price, description, rating}

        console.log(productInfo)

        fetch('https://brand-shop-server-1ihppeltp-jannat-ara-haque-juis-projects.vercel.app/brand',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
        .then(res => res.json())
            .then(data => {
                console.log(data);
                form.reset();
                if(data.insertedId){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                      })
                }
            })
        
    }
    return (
        <div>
            <div style={{ boxShadow: "-2px 2px 15px -1px rgba(113, 113, 113, 0.12)" }} className="lg:w-[60vw] mt-16 mx-auto p-8 lg:p-16 rounded-lg bg-white ">
                <h1 className="text-[1.5rem] font-medium">Add New Product</h1>
                <p className="mt-3 text-[#717171] ">Enter Product Details</p>

                <form onSubmit={handleAddProduct}>
                    <p className="text-xl mt-6 mb-3">Product Name</p>
                    <input className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-500 rounded focus:outline-none bg-gray-100" type="text" name="name" placeholder="Enter Product Name" />

                    <p className="text-xl mt-6 mb-3">Product Image</p>
                    <input className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-500 rounded focus:outline-none bg-gray-100" type="text" name="photo" placeholder="Enter Product Image Url" />


                    <p className="text-xl mt-6 mb-3">Brand Name</p>
                    <div className="mb-4 relative">

                        <select name="category" className="w-full p-2 bg-gray-100 rounded border-0 border-b-2 border-blue-500 focus:outline-none">
                            
                            <option value="apple">Apple</option>
                            <option value="samsung">Samsung</option>
                            <option value="sony">Sony</option>
                            <option value="google">Google</option>
                            <option value="intel">Intel</option>
                            <option value="microsoft">Microsoft</option>
                        </select>
                    </div>

                    <p className="text-xl mt-6 mb-3">Type pf Products</p>
                    <div className="mb-4 relative">

                        <select name="producttype" className="w-full p-2 bg-gray-100 rounded border-0 border-b-2 border-blue-500 focus:outline-none">
                            <option value="Smartphones">Smartphones</option>
                            <option value="Laptops & Notebooks">Laptops & Notebooks</option>
                            <option value="Headphones & Earbuds">Headphones & Earbuds</option>
                            <option value="Tablets & e-Readers">Tablets & e-Readers</option>
                            <option value="Home Appliances & Smart Gadgets">Home Appliances & Smart Gadgets</option>
                            <option value="Gaming Consoles & Accessories">Gaming Consoles & Accessories</option>
                        </select>
                    </div>

                    <p className="text-xl mt-6 mb-3">Price</p>
                    <input className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-500 rounded focus:outline-none bg-gray-100" type="text" name="price" placeholder="Enter product price" />

                    <p className="text-xl mt-6 mb-3">Short Description</p>
                    <input className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-500 rounded focus:outline-none bg-gray-100" type="text" name="description" placeholder="Enter Short description of this product" />


                    <p className="text-xl mt-6 mb-3">Rating Number</p>
                    <input className="w-full p-2 border-b-2 border-gray-300 focus:border-blue-500 rounded focus:outline-none bg-gray-100" type="text" name="rating" placeholder="Enter Rating in number out of 5" />

                    <input className="w-full h-[3.5rem] text-white text-lg cursor-pointer mt-6 p-2  rounded  bg-[#F45E0C]" type="submit" value="Add Product"  />

                    
                </form>
            </div>

        </div>
    );
};

export default AddProduct;