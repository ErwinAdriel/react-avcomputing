import c1 from "../img/categorias/celular.png";
import c2 from "../img/categorias/audio.png";
import c3 from "../img/categorias/escritorioPc.png";
import c4 from "../img/categorias/monitor.png";
import c5 from "../img/categorias/notebook.png";
import c6 from "../img/categorias/teclado.png";
import c7 from "../img/categorias/tv.png";
import c8 from "../img/categorias/mouse.png";
import { CardCategoria } from "./CardCategoria";

export default function ContextCategoria(){

    const categorias = [
        {name: "Celular", url: c1},
        {name: "Audio", url: c2},
        {name: "Escritorio", url: c3},
        {name: "Monitor", url: c4},
        {name: "Notebook", url: c5},
        {name: "Teclado", url: c6},
        {name: "TV", url: c7},
        {name: "Mouse", url: c8},
    ];

    return(
        <div class="container md:px-20 my-4">
            <div class="flex justify-between items-center px-8 sm:px-0 mb-6">
                <p class="sm:text-3xl text-3xl font-600 text-black leading-none">Categorias</p>
            </div>
            <div class="w-full">
                <div class="mx-auto container">
                    <div class="grid xl:grid-cols-8 sm:grid-cols-4 grid-cols-2 gap-10">
                    {categorias.map((categoria) => (
                        < CardCategoria categoria={categoria}/>
                    ))}
                    </div>
                </div>
            </div>
        </div>    
    )
}