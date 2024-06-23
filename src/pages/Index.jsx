import Banner from "../components/Banner";
import ContextCategoria from "../components/ContextCategoria";
import ContextProductsDestacados from "../components/ContextProductsDestacados";
export default function Index(){
    return(
        <div class="w-full pt-0">
            < Banner />
            < ContextCategoria />
            < ContextProductsDestacados />
        </div>
    )
}