import { FaRegUser } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { IoCartOutline, IoClose } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";
import { useCart } from "../hooks/useCart";

export default function Navbar(){

    const [open, setOpen] = useState(false);

    const [openCategoria, setOpenCategoria] = useState(false);

    const [openMenu, setOpenMenu] = useState(false);
    
    const Menus = ["Notebook", "Monitores", "Pc's de Escritorio"];

    const Categorias = [
                        {name: "Laptops", link: "/laptops"},
                        {name: "Celulares", link: "/celulares"},
                        {name: "TV", link: "/tvs"},
                        {name: "Audio", link: "/audio"},
                        {name: "Gaming", link: "/gaming"}
                    ];
    const [cart,setCart] = useCart();

    const quantity = cart.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0)
    return (
        <div>
            <div class="w-full h-[86px] bg-white lg:block md:px-20 px-5">
                <div class="container-x mx-auto h-full">
                    <div class="relative h-full">
                        <div class="flex justify-between items-center h-full">
                            <div onClick={() => setOpen(!open)} class="text-2xl md:hidden cursor-pointer">
                                <span>
                                    { open == false ? <button onClick={() => setOpenMenu(!openMenu)}><CiMenuBurger /></button>  : 
                                    <button onClick={() => setOpenMenu(!openMenu)}><IoClose /></button>  } 
                                </span>
                            </div>
                            <div class="text-3xl font-bold"><a href="#"><span>AvComputing</span></a></div>
                            <div class="md:flex w-[517px] h-[44px] border border-slate-400 hidden">
                                <div class="w-full h-full flex items-center bg-white">
                                    <form action="#" class="h-full w-full">
                                        <input type="text" class="search-input h-full w-full px-4 focus:outline-none" placeholder="Buscar producto..."/>
                                    </form>
                                </div>
                                <div class="border-2 border-black px-3 flex items-center bg-slate-900 text-white">
                                    <button>Buscar</button>
                                </div>
                            </div>
                            <div class="flex space-x-3 items-center">
                                <div class="md:flex text-3xl hidden"><a href="#"><span><MdFavoriteBorder /></span></a></div>
                                <div class="group relative text-3xl">
                                    <a href="#"><span><IoCartOutline /></span></a>
                                    <span class="w-[18px] h-[18px] rounded-full absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-blue-700 text-white">{quantity}</span>
                                </div>
                                <div class="sm:flex text-2xl"><a href="#"><span><FaRegUser /></span></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-slate-900 w-full h-[60px] hidden relative z-30 md:block text-white px-20">
                <div class="w-full h-full relative">
                    <div class="w-full h-full flex justify-between items-center">
                        <div class="flex xl:space-x-7 space-x-3 items-center">
                            <div class="w-[270px] h-[53px] bg-white px-5 rounded-t-md mt-[6px] relative">
                                <button type="button" onClick={() => setOpenCategoria(!openCategoria)} class="w-full h-full flex justify-between items-center">
                                    <div class="flex space-x-3 items-center text-black">
                                        <span><CiMenuBurger /></span>
                                        <span class="text-md font-600">Categorias</span>
                                    </div>
                                </button>
                                { openCategoria && (
                                    <div class="w-full absolute left-0 top-[53px] overflow-hidden border-b-2 border-black">
                                        <ul>
                                            {
                                                Categorias.map((categoria)=>(
                                                    <li key={categoria}><a href={categoria.link}><div class="flex items-center px-5 h-10  bg-white transition-all duration-300 ease-in-out cursor-pointer text-black hover:bg-slate-900 hover:text-white">{categoria.name}</div></a></li>
                                                ))
                                            }
                                            
                                        </ul>
                                    </div>
                                )}
                                
                            </div>
                            <div class="nav">
                                <ul class="flex xl:space-x-10 space-x-5">
                                    {
                                        Menus.map((menu)=>(
                                            <li key={menu}><div class="px-2 py-[18px]  cursor-pointer">{menu}</div></li>        
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class={`bg-slate-900 w-full h-auto md:hidden text-white ${openMenu ? 'flex' : 'hidden'}`}>
                <div class="w-full h-full">
                    <div class="items-center">
                        <ul class="px-5">
                            {
                                Categorias.map((categoria)=>(
                                    <li key={categoria}><div class="px-2 py-[18px]  cursor-pointer">{categoria.name}</div></li>        
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
                
    );
}