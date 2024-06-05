import { IoCartOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import { useState } from "react";

export default function Navbar(){

    const [open, setOpen] = useState(false);
    
    const Menus = ["Notebook", "Monitores", "Pc's de Escritorio"];
    const SubMenus = ["Laptops", "Celulares", "TV", "Audio", "Gaming"];

    return (
        <div>
            <div class="lg:hidden block w-full h-[60px] bg-white">
                <div class="w-full h-full flex justify-between items-center px-5">
                    <div class="text-2xl"><span><CiMenuBurger /></span></div>
                    <div class="text-3xl font-bold"><a href="#"><span>AvComputing</span></a></div>
                    <div class="flex space-x-3 cursor-pointer">
                        <div class="text-3xl relative">
                            <a href="#"><span><IoCartOutline /></span></a>
                            <span class="w-[18px] h-[18px] rounded-full absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-blue-700 text-white">3</span>
                        </div>
                        <div class="text-2xl">
                            <a href="#"><span><FaRegUser /></span></a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bg-slate-900 w-full h-[60px] relative z-30 lg:block hidden text-white px-20">
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
                                                    <li key={submenu}><a href={submenu}><div class="flex items-center px-5 h-10  bg-white transition-all duration-300 ease-in-out cursor-pointer text-black hover:bg-slate-900 hover:text-white">{submenu}</div></a></li>
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
                                            <li key={menu}><div class="px-2 py-[18px]  cursor-pointer">{menu}</div></li>        
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}