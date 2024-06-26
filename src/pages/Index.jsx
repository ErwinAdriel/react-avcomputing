import Banner from "../components/Banner";
import ContextCategoria from "../components/ContextCategoria";
import ProductoContainer from "../context/ProductoContainer";
export default function Index(){
    return(
        <div class="w-full pt-0">
            < Banner />
            < ContextCategoria />
            < ProductoContainer />
        </div>
    )
}