import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";

export default function Banner(){
    return(
        <div class="w-full xl:h-[733px] h-[500px] mb-[60px]">
            <div class="w-full h-full">
                <div class="xl:h-full mb-20 xl:mb-0 w-full relative">
                    <div class="absolute left-0 top-0 w-full h-full items-center justify-between hidden xl:flex">
                        <button type="button" class="ml-4 text-5xl text-slate-900 border border-slate-900 rounded-full hover:text-white hover:bg-slate-900 transition-all duration-300 ease-in-out">< MdOutlineNavigateBefore/></button>
                        <button type="button" class="mr-4 text-5xl text-slate-900 border border-slate-900 rounded-full hover:text-white hover:bg-slate-900 transition-all duration-300 ease-in-out">< MdOutlineNavigateNext /></button>
                    </div>
                    <div class="slick">

                    </div>
                </div>
            </div>
        </div>
    )
}