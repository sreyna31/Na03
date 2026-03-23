import Header from "../components/Header"
import Footer from "../components/Footer"
import {useParams} from "react-router"
import {useEffect, useState} from "react"

function ProductDetail(){
  const route = useParams()
  const [product, setProduct] = useState({})
  const getSingleProduct = async () =>{
    const response = await fetch(`https://fakestoreapi.com/products/${route.id}`)
    const data = await response.json()
    console.log(data)
    setProduct(data)

  }
  useEffect(()=>{
   getSingleProduct()
  },[])
 
    return(


    <>
    <Header></Header> 

    <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-2 gap-10">
  
    <div className="flex justify-center">
      <img src={product.image} 
           alt="Fjallraven Backpack" 
           className="rounded-lg shadow-md"/>
    </div>

    <div>
      <h2 className="text-sm text-gray-500 uppercase">{product.category}</h2>
      <h1 className="text-2xl font-bold text-gray-900 mt-2">
        {product.title}
      </h1>

       <div className="flex items-center gap-2 mb-4">
            <span className="text-xl font-semibold mt-4 text-blue-600">{product.price}</span>
            <span className="text-sm text-stone-400 line-through">$60.00</span>
            <span className="text-xs font-semibold text-red-500 bg-red-50 px-1.5 py-0.5 rounded">
              25% off
            </span>
          </div>

      <p className="text-gray-700 mt-4">
        {product.description}
      </p>

     
      <div className="flex items-center mt-6 space-x-4">
        <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">-</button>
        <span className="px-4 py-1 border rounded">1</span>
        <button className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
      </div>
     
      <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg shadow hover:bg-blue-700">
        Add to card
      </button>

    </div>
  </div>

    <Footer></Footer>
    
    </>
    )
}
export default ProductDetail 