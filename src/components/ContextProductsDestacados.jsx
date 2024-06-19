import p1 from "../img/productos/prod.jpeg";
import p2 from "../img/productos/prod2.jpg";
import p3 from "../img/productos/prod3.jpg";
import CardProdDest from "./CardProdDest";

export default function ContextProductsDestacados(){

    const productos = [
        {id: 1, name: "Motorola Moto Edge 40 Verde", url: p1, price: '899.999,00'},
        {id: 2, name: "Notebook ASUS X515EA I5 1135G7 8GB", url: p2, price: '899.999,00'},
        {id: 3, name: "PC AMD 3000G SSD 240GB + LED 19 Philips", url: p3, price: '899.999,00'},
    ]
    return (
        <div class="container md:px-20 my-4">
            <div class="flex justify-between items-center px-8 sm:px-0 mb-6">
                <p class="sm:text-3xl text-3xl font-600 text-black leading-none">Productos destacados</p>
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