import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import slide1 from "../img/slider-1.jpg";
import slide2 from "../img/slider-2.jpg";

export default function Banner(){

    const slides = [
        {url: slide1},
        {url: slide2},
    ];

    return(
        <div class="w-full xl:h-[400px] h-[500px] mb-[60px]">
            <div class="w-full h-full">
                <div class="xl:h-full mb-20 xl:mb-0 w-full relative">
                    <div class="absolute left-0 top-0 w-full h-full items-center justify-between hidden xl:flex">
                        <button type="button" class="ml-4 text-5xl text-slate-900 border bg-white hover:border-slate-900 rounded-full hover:text-white hover:bg-slate-900 transition-all duration-300 ease-in-out">< MdOutlineNavigateBefore/></button>
                        <button type="button" class="mr-4 text-5xl text-slate-900 border bg-white hover:border-slate-900 rounded-full hover:text-white hover:bg-slate-900 transition-all duration-300 ease-in-out">< MdOutlineNavigateNext /></button>
                    </div>
                    <div class="slick-slider">
                        <div class="slick-list">
                            <div class="slick-track">
                                
                                <div class="w-full">
                                    <div>
                                        <div class="item w-full xl:h-[400px] h-[500px]">
                                            <div class="bg-cover bg-center bg-no-repeat h-full w-full" style={{backgroundImage: `url(${slides[0].url})`}}>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}