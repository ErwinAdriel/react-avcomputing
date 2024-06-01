import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

export default function Header(){
    return(
        <header>
            <div class="bg-slate-950 text-white">
                <div>
                    <div>
                        <div>
                            <ul>
                                <li>Sucursales</li>
                                <li>Centro de atencion</li>
                            </ul>
                        </div>
                        <div>
                            <FaFacebook />
                            <FaInstagram />
                            <FaYoutube />
                        </div>
                    </div>
                </div>
            </div>
            <div></div>
            <div></div>
        </header>
    );
}