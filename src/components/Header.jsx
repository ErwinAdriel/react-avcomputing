import { FaFacebook, FaInstagram, FaYoutube, FaRegUser } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import { IoCartOutline } from "react-icons/io5";
import { useState } from "react";
import Navbar from "./Navbar";

export default function Header(){

    return(
        <header class="relative">
            <div class="bg-slate-900 text-white w-full h-10 sm:px-20 px-[42%]">
                <div class="mx-auto h-full">
                    <div class="flex justify-between items-center h-full">
                        <div class="sm:block hidden">
                            <ul class="flex space-x-6">
                                <li><a href="#"><span class="text-xs leading-6 text-qblack font-500">Sucursales</span></a></li>
                                <li><a href="#"><span class="text-xs leading-6 text-qblack font-500">Centro de atencion</span></a></li>
                            </ul>
                        </div>
                        <div>
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
                            <div class="flex w-[517px] h-[44px] border border-slate-400">
                                <div class="w-full h-full flex items-center bg-white">
                                    <form action="#" class="h-full w-full">
                                        <input type="text" class="search-input h-full w-full px-4 focus:outline-none" placeholder="Buscar producto..."/>
                                    </form>
                                </div>
                                <div class="border-2 border-black px-3 flex items-center bg-slate-900 text-white">
                                    <button>Buscar</button>
                                </div>
                            </div>
                            <div class="flex space-x-6 items-center text-2xl">
                                <div class="relative"><a href="#"><span><MdFavoriteBorder /></span></a></div>
                                <div class="relative"><a href="#"><span><IoCartOutline /></span></a></div>
                                <div class="relative"><a href="#"><span><FaRegUser /></span></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Navbar />
        </header>
    );
}