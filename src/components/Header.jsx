import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Header(){
    return(
        <header class="relative">
            <div class="bg-slate-950 text-white w-full h-10 border-b px-4">
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
            <div></div>
            <div></div>
        </header>
    );
}