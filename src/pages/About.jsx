import Footer from "../components/Footer"
import Header from "../components/Header"

function About(){
    return (
       <>
            <Header></Header>
            <div className="h-[1080px] bg-violet-100 grid grid-cols-2 gap-8 mt-4">
            <div className="items-center justify-center">
                <h1 className="font-bold text-3xl">About us</h1>
                <br />
                <h3 className=" font-semibold text-inherit">This website recognized as a tool in shoppoing more convenient and faster for the customers.</h3>
                <p>The Online Door is found as a method to join client's daily life by Ms. Sreyna KH. Where it helps clients saving time and trust with our service. </p>
            </div>

            <div className="">
               <img src="https://nilepost.co.ug/nm-intranet-login/wp-content/uploads/2024/08/online.gif" alt="" />
            </div>
            </div>
            <Footer></Footer>
       </>
    )
}

export default About