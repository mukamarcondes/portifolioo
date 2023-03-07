import * as icons from "../icons/icons";
import { Link } from "react-router-dom";
import './Header.css'
import Foto from "../img/logo.png";

export default function Header() {
    return (

        <header>

            <div className="foto">
            <img src={Foto} className="logo" alt="logo" />
            <p className="nome">Murilo Marcondes Silva</p>
            </div>

            <div className="filtro">
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
        </header>
    );
  }
