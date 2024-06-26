import { useEffect, useState } from "react";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import ContextProductsDestacados from "../components/ContextProductsDestacados";

export default function ProductoContainer(){
    
    const [data, setData] = useState([]);

    useEffect(() => {
        const querydb = getFirestore();
        const queryCollection = collection(querydb, 'Productos');
        getDocs(queryCollection)
        .then(res => setData(res.docs.map(producto => ({ id: producto.id, ...producto.data() }))));

    }, [])

    return(
        < ContextProductsDestacados data = {data} />
    )
}