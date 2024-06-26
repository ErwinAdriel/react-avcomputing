import { GrFormNextLink } from "react-icons/gr";

import CardProdDest from "./CardProdDest";
import { Link } from "react-router-dom";

export default function ContextProductsDestacados({ data = [] }){    

    return (
        <div class="container md:px-20 my-4">
            <div class="flex justify-between items-center px-2 sm:px-0 mb-6">
                <p class="sm:text-3xl text-3xl text-black leading-none">Ofertas</p>
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
                        {data.map((producto) => (
                            < CardProdDest producto={producto}/>
                        ))}                
                    </div>
                </div>
            </div>
        </div>
    )
}