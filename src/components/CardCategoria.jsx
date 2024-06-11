export function CardCategoria({categoria}){
    return(
        <div class="item w-full group cursor-pointer">
            <div class="w-full flex justify-center">
                <div class="w-[110px] h-[110px] rounded-full bg-[#EEF1F1] items-center flex justify-center mb-2.5">
                    <img src={categoria.url} alt="celular" class="w-[80%]" />
                </div>
            </div> 
            <div class="w-full flex justify-center">{categoria.name}</div>
        </div>
    )
}