import { FaFacebook, FaInstagram, FaYoutube, FaRegUser } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";

export default function Header(){

    const [open, setOpen] = useState(false);
    
    const Menus = ["Notebook", "Monitores", "Pc's de Escritorio"];
    const SubMenus = ["Laptops", "Celulares", "TV", "Audio", "Gaming"];

    return(
        <header class="relative">
            <div class="bg-slate-950 text-white w-full h-10 px-20">
                <div class="mx-auto h-full">
                    <div class="flex justify-between items-center h-full">
                        <div class="topbar-nav sm:block hidden">
                            <ul class="flex space-x-6">
                                <li><a href="#"><span class="text-xs leading-6 text-qblack font-500">Sucursales</span></a></li>
                                <li><a href="#"><span class="text-xs leading-6 text-qblack font-500">Centro de atencion</span></a></li>
                            </ul>
                        </div>
                        <div class="topbar-dropdowns">
                            <div class="flex space-x-6">
                                <FaFacebook />
                                <FaInstagram />
                                <FaYoutube />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full h-[86px] bg-white lg:block hidden px-20">
                <div class="container-x mx-auto h-full">
                    <div class="relative h-full">
                        <div class="flex justify-between items-center h-full">
                            <div class="text-3xl font-bold"><span>AvComputing</span></div>
                            {/*<div class="w-[517px] h-[44px]">
                                <div class="w-full h-full flex items-center border border-qgray-border bg-white">
                                    <div class="flex-1 bg-red-500 h-full">
                                        <form action="#" class="h-full">
                                            <input type="text" class="search-input" placeholder="Buscar producto..."/>
                                        </form>
                                    </div>
                                    <button class="w-[93px] h-full text-sm font-600 bg-qh3-blue text-white" type="button">Buscar</button>
                                </div>
    </div>*/}
                            <div class="flex space-x-6 items-center text-2xl">
                                <div class="relative"><a href="#"><span><MdFavoriteBorder /></span></a></div>
                                <div class="relative"><a href="#"><span><IoCartOutline /></span></a></div>
                                <div class="relative"><a href="#"><span><FaRegUser /></span></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-slate-950 w-full h-[60px] relative z-30 lg:block hidden text-white px-20">
                <div class="w-full h-full relative">
                    <div class="w-full h-full flex justify-between items-center">
                        <div class="flex xl:space-x-7 space-x-3 items-center">
                            <div class="w-[270px] h-[53px] bg-white px-5 rounded-t-md mt-[6px] relative">
                                <button type="button" onClick={() => setOpen(!open)} class="w-full h-full flex justify-between items-center">
                                    <div class="flex space-x-3 items-center text-black">
                                        <span><CiMenuBurger /></span>
                                        <span class="text-md font-600">Categorias</span>
                                    </div>
                                </button>
                                { open && (
                                    <div class="w-full absolute left-0 top-[53px] overflow-hidden border-b-2 border-black">
                                        <ul>
                                            {
                                                SubMenus.map((submenu)=>(
                                                    <li key={submenu}><a href="#"><div class="flex items-center px-5 h-10  bg-white transition-all duration-300 ease-in-out cursor-pointer text-black hover:bg-slate-950 hover:text-white">{submenu}</div></a></li>
                                                ))
                                            }
                                            
                                        </ul>
                                    </div>
                                )};
                                
                            </div>
                            <div class="nav">
                                <ul class="flex xl:space-x-10 space-x-5">
                                    {
                                        Menus.map((menu)=>(
                                            <li key={menu}><div class="px-2 py-[18px] transition-all duration-300 ease-in-out cursor-pointer hover:bg-white hover:text-black">{menu}</div></li>        
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}