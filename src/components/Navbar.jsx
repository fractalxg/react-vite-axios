import "./Navbar.css"

import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
        <h2>
            <Link to ={`/`}>Clima e Tempo</Link>
        </h2>
        <ul>
        </ul>
    </nav>
  )
}

export default Navbar