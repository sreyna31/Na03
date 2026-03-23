import Footer from "../components/Footer"
import Header from "../components/Header"
import Card from "../components/Card"
import {useState, useEffect} from "react"

function Products(){

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
            
            <div className="my-10 w-[90%] lg:w-250 mx-auto">
                <h1 className="text-center text-2xl">All Products</h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">

                {
                        products.map(function(item){
                            return(
                                  <Card key={item.id} data={item}/>
                            )
                        })
                    }
                                
                </div>

            </div>
            <Footer></Footer>
       </>
    )
}

export default Products