import { GrFormNextLink } from "react-icons/gr";
import p1 from "../img/productos/prod.jpeg";
import p2 from "../img/productos/prod2.jpg";
import p3 from "../img/productos/prod3.jpg";
import p4 from "../img/productos/prod4.jpg";
import p5 from "../img/productos/prod5.jpg";
import p6 from "../img/productos/prod6.jpg";
import CardProdDest from "./CardProdDest";
import { Link } from "react-router-dom";

export default function ContextProductsDestacados(){

    const productos = [
        {id: 1, name: "Motorola Moto Edge 40 Verde", url: p1, price: '899.999,00'},
        {id: 2, name: "Notebook ASUS X515EA I5 1135G7 8GB", url: p2, price: '899.999,00'},
        {id: 3, name: "PC AMD 3000G SSD 240GB + LED 19 Philips", url: p3, price: '899.999,00'},
        {id: 4, name: "TABLET LENOVO 10 TB M10 ", url: p4, price: '899.999,00'},
        {id: 5, name: "TECLADO INALAMBRICO REDRAGON DRACONIC PRO SW", url: p5, price: '899.999,00'},
        {id: 6, name: "SMART TV 43 SAMSUNG", url: p6, price: '899.999,00'},
    ]
    return (
        <div class="container md:px-20 my-4">
            <div class="flex justify-between items-center px-2 sm:px-0 mb-6">
                <p class="sm:text-3xl text-3xl text-black leading-none">Destacados</p>
                <Link to="/allProducts">
                    <div class="flex text-xl ">
                        <span>Ver más</span>
                        <div class="text-3xl">
                            <GrFormNextLink />
                        </div>
                    </div>
                </Link>
            </div>
            <div class="w-full">
                <div class="mx-auto container">
                    <div class="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                        {productos.map((producto) => (
                            < CardProdDest producto={producto}/>
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
    )
}