import * as icons from "../icons/icons";
import { Link } from "react-router-dom";
import './Header.css'
import Foto from "../img/logo.png";
import { useState } from "react";

export default function Header() {
    const [mostrar, setMostrar] = useState("none")
    const [tamanhoTela, setTamanhoTela] = useState(document.body.clientWidth)
    
    window.addEventListener("resize", () => {
        setTamanhoTela(document.body.clientWidth)
    })
    
    function menu() {
        setMostrar(mostrar === "none" ? "block" : "none")
        console.log(document.body.clientWidth)
    }
    return (

<div className="coitainer-header">
        <header>

            <div className="foto">
            <img src={Foto} className="logo" alt="logo" />
            <p className="nome">Murilo Marcondes Silva</p>
            </div>

            <div className="filtro" style={{display: tamanhoTela > 700 ? "block" : mostrar}}>
                <ul>
                    <li>
                        <Link className="icon" to='/' >
                        Sobre Mim <icons.sobre />
                        </Link>
                    </li>

                    <li>
                        <Link className="icon" to='/contatos' >
                        Contatos <icons.Telegram />
                        </Link>
                    </li>

                    <li>
                        <Link className="icon" to='/certificados'>
                        Certificados <icons.list />
                        </Link>
                    </li>
                
                </ul>
            </div>
            
            <button className="button-menu" onClick={menu}>Menu</button>
        </header>

        
        
</div>

    );
  }
