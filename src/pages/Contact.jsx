import Footer from "../components/Footer"
import Header from "../components/Header"

function Contact(){
    return (
        <>
            <Header></Header>

        <div className="h-screen"> 

            <form className=" border border-amber-600 w-[500px] mx-auto mt-7 p-4" action="">

            <h1 className="text-center font-bold font text-2xl">Contact Form</h1>

            <div className="mb-2">
                <label className="alert:Fill your name">Name: <span className="text-red-500">*</span></label>
                <input 
                className="ring ring-amber-600 w-full p-2 focus:outline-0" 
                type="text"
                placeholder="Enter your name"/>
                <label className="block">Email:</label>
                <input className="ring ring-amber-600 w-full p-2 focus:outline-0" 
                type="text" 
                placeholder="Enter your email"/>
            </div>

            <div>
                <label className="block">Comments:</label>
                <textarea className="ring ring-amber-600 w-full p-2 focus:outline-0" id="text" placeholder="Please insert your remarks:"></textarea>
            </div>

            <div className="flex-justify-end"> 
                <button className=" bg-blue-400  text-white rounded-4xl m-2 w-[90px] p-2 ring ring-amber-600" >Submit</button>
            </div>
    
            </form>

        </div>

            <Footer></Footer>
        </>
    )
}

export default Contact