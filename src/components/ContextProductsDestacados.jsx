import p1 from "../img/productos/prod.jpeg";
import p2 from "../img/productos/prod2.jpg";
import p3 from "../img/productos/prod3.jpg";
import { IoCartOutline } from "react-icons/io5";

export default function ContextProductsDestacados(){

    const productos = [
        {name: "Motorola Moto Edge 40 Verde", url: p1},
        {name: "Notebook ASUS X515EA I5 1135G7 8GB", url: p2},
        {name: "PC AMD 3000G SSD 240GB + LED 19 Philips", url: p3},
    ]
    return (
        <div class="container mx-auto my-4">
            <div class="flex justify-between items-center px-8 sm:px-0 mb-6">
                <p class="sm:text-3xl text-3xl font-600 text-black leading-none">Productos destacados</p>
            </div>
            <div class="w-full">
                <div class="mx-auto container">
                    <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                        {productos.map((producto) => (
                            <div class="w-full h-full border  relative group overflow-hidden">
                                <div class="w-full h-[322px] mt-4 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${producto.url})`}}>
                                </div>
                                <div class="flex justify-center h-[102px] items-center relative">
                                    <div class="absolute w-full flex justify-center items-center top-40 group-hover:top-[40px] transition-all duration-500 ease-in-out">
                                        <button type="button" class="bg-blue-600 w-[50%] flex items-center justify-center">
                                            <div class="flex text-white p-4 space-x-3 text-1xl">
                                                <span class="my-auto"><IoCartOutline /></span>
                                                <span>Agregar</span>
                                            </div>
                                        </button>
                                    </div>
                                    <div>
                                        <a href="#">
                                            <p class="mb-2.5 text-[20px] font-600 text-center text-black leading-[24px] line-clamp-2">{producto.name}</p>
                                        </a>
                                        <div class="flex justify-center">
                                            <span class="text-gray-500 line-through mr-1 inline-block font-600 text-center text-[18px]">$899.999,00</span>
                                            <span class="text-red-600 font-600 text-center text-[18px]">22% OFF</span>
                                        </div>
                                        <div class="flex justify-center">
                                            <span class="flex text-[25px] text-center font-600">$699.999,00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}