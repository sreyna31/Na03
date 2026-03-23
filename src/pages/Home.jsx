import Header from "../components/Header"
import Footer from "../components/Footer"
import Card from "../components/Card"
import { useEffect, useState } from "react"


function Home(){

    let [products, setProducts] = useState([])
    const getData = async () => {
        let response = await fetch("https://fakestoreapi.com/products")
        let data = await response.json()
        setProducts(data)

        console.log(data)
    }

    useEffect(()=>{
       getData()
       
    },[])

    
    return (
        <>
        
            <Header></Header>

            <section className="bg-[#f6e6cf] h-screen flex flex-col justify-center items-center space-y-4">
                 <h3 className="font-semibold text-2xl">New Collectioins</h3>
                 <h1 className="font-bold text-6xl">Luxury Without Labels</h1>
                 <p className="text-lg">Explore new-in product and best sellers</p>
                 <button className="bg-slate-950 text-white px-10 py-2 rounded-lg">View Collectioins</button>
            </section>

            <section className="my-10 w-[90%] lg:w-250 mx-auto ">
                    <h1 className="text-center text-2xl font-medium">Best Seller</h1>
                    <p className="text-center text-gray-600">Explore our best seller products</p>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
                        
                        {
                        products.map(function(item){
                            return(
                                  <Card key={item.id} data={item}/>
                            )
                        })
                    }
                    </div>

                    <div className="flex items-center justify-center mt-8">
                        <button className="border rounded-lg px-10 py-2 hover:bg-slate-950 hover:text-white transition-all">
                            Explore More
                        </button>
                    </div>
            </section>
            <Footer></Footer>
        </>
    )
}

export default Home