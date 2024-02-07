import { FaShoppingCart } from "react-icons/fa";

const navBar = ({greeting}) => {
  return (
    <div>
      <div>{greeting}</div>
      <img src="https://i.imgur.com/DjsgGIx.jpg" alt="Logo" style={{width: "700px"}}/>
      <ul>
        <li>Todos los productoss</li>
        <li>Ropa</li>
        <li>Juguetes</li>
        <li>Peluches</li>
      </ul>
      <FaShoppingCart />
      <h5>6</h5>
    </div>
  )
}

export default navBar