import { Heart, Menu, ShoppingCart, Underline, User, X} from "lucide-react"
import { useState } from "react"
import { NavLink } from "react-router"

function Header(){

let[isShowNavbar, setIsShowNavbar] = useState(false)


function activeClass({isActive}){
    return isActive ? "underline decoration-amber-500" : ""
}

function activeClassMobile({isActive}){
    return isActive ? `w-full p-2 bg-gray-50/10 rounded-lg` : "w-full p-2 hover:bg-gray-50/10 rounded-lg"
}

function openNavbar(){
        setIsShowNavbar(true)
    }

function closeNavbar(){
        setIsShowNavbar(false)
    }

    return (
       <>
            <div className="bg-slate-950 text-white text-center p-2 text-sm">
                🚚 Free shipping on orders over 50$ 🌟
            </div>

            <header className=" flex justify-between h-15 items-center px-4 lg:px-40">
                <button onClick={openNavbar} className="lg:hidden">
                     <Menu />
                </button>   
                <div className="font-bold text-lg">KH</div>
                <nav className="hidden lg:flex gap-4">
                    <NavLink className={activeClass} to="/">Home</NavLink>
                    <NavLink className={activeClass} to="/products">Products</NavLink>
                    <NavLink className={activeClass} to="/contact">Contact</NavLink>
                    <NavLink className={activeClass} to="/about">About</NavLink>
                </nav>

                <div className="flex items-center gap-2">
                    <a href="">
                        <Heart />
                    </a>
                    <a href="">
                        <User />
                    </a>
                    <a href="">
                        <ShoppingCart />
                    </a>
                </div>
            </header>

            <>
            
            {/*Mobile Navbar*/}

            <div className={`${isShowNavbar? "left-0" : "-left-full"} absolute  top-0 bg-slate-700 text-white h-screen w-52 lg:hidden p-4 z-99`}>
                <div className="flex justify-end">
                    <button onClick={closeNavbar} className="w-8 h-8 flex items-center justify-center rounded-full border 
                                       border-dashed border-white cursor-pointer hover:bg-gray-50/10">
                        <X className="text-red-400"/>
                    </button>
                </div>
                <nav className="flex flex-col">
                    <NavLink onClick={closeNavbar} className={activeClassMobile}  to="/">Home</NavLink>
                    <NavLink onClick={closeNavbar} className={activeClassMobile}  to="/products">Products</NavLink>
                    <NavLink onClick={closeNavbar} className={activeClassMobile}  to="/contact">Contact</NavLink>
                    <NavLink onClick={closeNavbar} className={activeClassMobile}  to="/about">About</NavLink>
                </nav>
            </div>
            </>

       </>
    )
}

export default Header