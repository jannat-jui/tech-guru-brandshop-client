
import Advertise from "../Advertise/Advertise";
import CustomerService from "../Advertise/CustomerService";
import TopBrands from "../Advertise/TopBrands";
import OurBlogs from "../Blog/OurBlogs";
import CategoriesList from "../Categorie/CategoriesList";
import Cover from "../Cover/Cover";


import NewProducts from "../NewProducts/NewProducts";





const Home = () => {



    return (
        <div >
            
            
            <Cover></Cover>
            <CategoriesList></CategoriesList>
            <NewProducts></NewProducts>
            <Advertise></Advertise>
            <CustomerService></CustomerService>
            <TopBrands></TopBrands>
            <OurBlogs></OurBlogs>

        </div>
    );
};

export default Home;