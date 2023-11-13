import "./Navbar.css"

import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
        <h2>
            <Link to ={`/`}>Clima e Tempo</Link>
        </h2>
        <ul>
            <li>
            <Link to ={`/consultas`}>Consultas Realizadas</Link>
            </li>

            <li>
            <Link to ={`/`} className="new-btn">
                Pesquisar
            </Link>
            </li>

        </ul>

    </nav>
  )
}

export default Navbar