import { IoCartOutline } from "react-icons/io5";
import { useCart}  from "../hooks/useCart";

export default function CardProdDest({producto}){

const [cart, setCart] = useCart();

const addToCart = () => {
    setCart((currItems) => {
        const id = 1;
        const isItemsFound = currItems.find((item) => item.id === id);
        if(isItemsFound){
            return currItems.map((item) => {
                if(item.id === id) {
                    return{...item, quantity: item.quantity + 1};
                } else {
                    return item;
                }
            });
        } else {
            return [...currItems, {id: 1, quantity: 1, price:100}];
        }
    })
}

    return(
        <div class="w-full h-full border  relative group overflow-hidden">
            <div class="w-full h-[322px] mt-4 bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${producto.url})`}}>
            </div>
            <div class="flex justify-center h-[102px] items-center relative">
                <div class="absolute w-full flex justify-center items-center top-40 group-hover:top-[40px] transition-all duration-500 ease-in-out">
                    <button onClick={() => addToCart()} type="button" class="bg-blue-600 w-[50%] flex items-center justify-center">
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
    )
}