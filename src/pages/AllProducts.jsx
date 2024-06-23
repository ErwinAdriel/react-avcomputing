export default function AllProducts(){
    return(
        <div class="mx-auto w-full">
            <div class="breadcrum font-400 text-[13px] text-black mb-[23px]">
                <span class="mx-6">
                    Home
                </span>
            </div>
            <div class="w-full lg:flex lg:space-x-[30px]">
                <div class="flex-1">
                    <div class="w-full bg-white md:h-[70px] flex md:flex-row flex-col md:space-y-0 space-y-5 space-x-8 md:justify-end md:items-center p-[30px] mb-[40px]">
                        <div class="flex space-x-2">
                            <div class="my-auto">
                                <span>Ordenar por:</span> 
                            </div>                        
                            <div class="relative">
                                <form action="#">
                                    <select class="bg-gray-200 w-full border border-gray-200 text-gray-700 py-3 px-4 pr-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                        <option>Seleccionar</option>
                                        <option>Menor precio</option>
                                        <option>Mayor precio</option>
                                        <option>Nombre asc</option>
                                        <option>Nombre desc</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                        <div class="flex space-x-2">
                            <div class=" my-auto"><span>Mostrar:</span></div>
                            <div class="relative">
                                <form action="#">
                                    <select class="w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                                        <option>Seleccionar</option>
                                        <option>12</option>
                                        <option>24</option>
                                        <option>48</option>
                                        <option>96</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}