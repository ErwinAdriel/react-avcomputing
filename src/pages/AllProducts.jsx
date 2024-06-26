import CardProdDest from "../components/CardProdDest";


export default function AllProducts(){

    /*const productos = [
        {id: 1, name: "Motorola Moto Edge 40 Verde", url: p1, price: '899.999,00'},
        {id: 2, name: "Notebook ASUS X515EA I5 1135G7 8GB", url: p2, price: '899.999,00'},
        {id: 3, name: "PC AMD 3000G SSD 240GB + LED 19 Philips", url: p3, price: '899.999,00'},
        {id: 4, name: "TABLET LENOVO 10 TB M10 ", url: p4, price: '899.999,00'},
        {id: 5, name: "TECLADO INALAMBRICO REDRAGON DRACONIC PRO SW", url: p5, price: '899.999,00'},
        {id: 6, name: "SMART TV 43 SAMSUNG", url: p6, price: '899.999,00'},
    ]*/

    const marcas =[
        {id:0, name: "Apple"},
        {id:1, name: "Samsung"},
        {id:2, name: "Redragon"},
        {id:3, name: "Asus"},
        {id:4, name: "Intel"},
        {id:5, name: "MSI"},
        {id:6, name: "Motorola"},
        {id:7, name: "AMD"},
        {id:8, name: "Lenovo"},
        {id:9, name: "Phillips"},
    ];
    
    return(
        <div class="mx-auto w-full pt-[30px] pb-[60px]">
            <div class="w-full lg:flex lg:space-x-[30px]">
                <div class="lg:w-[270px]">
                    <div class="w-full fixed lg:relative left-0 top-0 h-screen lg:h-auto overflow-y-scroll lg:overflow-y-auto bg-white px-[30px] pt-[40px] mb-[30px] hidden lg:block">
                        <div class="pb-10">
                            <div class="text-2xl">Marcas</div>
                            <div class="mt-4">
                                <ul>
                                    {marcas.map((marca) => (
                                        <li>
                                            <div class="flex space-x-2 mb-2">
                                                <div>
                                                    <input type="checkbox" />
                                                </div>
                                                <div>
                                                    <span>{marca.name}</span>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
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
                    <div class="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 xl:gap-[30px] gap-5 mb-[40px] lg:pr-[30px]">
                        {/*productos.map((producto) => (
                            <div class="w-full h-full bg-white relative group overflow-hidden">
                                < CardProdDest producto={producto}/>
                            </div>
                        ))*/}
                    </div>
                </div>
            </div>
        </div>
    )
}