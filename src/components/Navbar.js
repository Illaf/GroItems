import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaCircle } from "react-icons/fa";
import Modal from "./Modal";
import Cart from "./pages/Cart";
import { useCart } from "../components/ContextReducer";
//import {BsFillCircleFill} from "react-icons/"
function Navbar() {
  let data = useCart();
  const [cart, setCart] = useState(false);
  localStorage.setItem("temp", "first");
  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    window.location.href="/login";
  };
  const loadCart = () => {
    setCart(true);
  };
  const items = useCart();
  return (
    <div class="nav_bar flex justify-between ">
      <nav class="navbar navbar-expand-lg navbar-light bg-light flex justify-center">
        <a class="navbar-brand" href="/">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="/navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-center" id="navbarNav">
          <ul class="navbar-nav  mb-2 mr-5">
            <li className="nav-item">
              <Link
                className="nav-link fs-5 mx-3 active"
                aria-current="page"
                to="/"
              >
                Home
              </Link>{" "}
              {/* index.css - nav-link color white */}
            </li>
            {localStorage.getItem("authToken") ? (
              <li className="nav-item">
                <Link
                  className="nav-link fs-5 mx-3 active"
                  aria-current="page"
                  to="/myorder"
                >
                  My Orders
                </Link>{" "}
                {/* index.css - nav-link color white */}
              </li>
            ) : (
              ""
            )}

            {!localStorage.getItem("token") ? (
              <form className="d-flex">
                <Link className="btn bg-white  text-success mx-1 " to="/login">
                  Login
                </Link>
                <Link className="btn bg-white text-success mx-1" to="/createUser">
                  Signup
                </Link>
              </form>
            ) : (
              <div>
                <div
                  className="btn bg-white text-success mx-2 "
                  onClick={loadCart}
                >
                
                  Cart{" "}
                  <FaCircle style={{ color: 'red' }}><span className="text-white">{data.length}</span></FaCircle>
                </div>

                {cart ? (
                  <Modal onClose={() => setCart(false)}>
                    <Cart></Cart>
                  </Modal>
                ) : (
                  null
                )}

                <button
                  onClick={handleLogOut}
                  className="btn bg-white text-success"
                >
                  Logout
                </button>
              </div>
            )}
          </ul>
          {/* <div className='d-flex'>
      {
      (!localStorage.getItem("authToken"))?
      <div>
<Link className='btn bg-white' to="/login">Login</Link>
      <Link className='btn bg-white' to="/createUser">Signup</Link>
      </div>
   :
   <div >
  
   <div className='btn bg-white' onClick={()=>{setCart(true)}}>
    MyCart{" "}
   <Badge pill bg="danger">{data.length}</Badge>
   </div> 
   {cart?<Modal onClose={()=>{setCart(false)}}><Cart/></Modal>:null}
   <div><Link className='btn bg-white' to="/" onClick={handleLogOut}>LogOut</Link></div>
   </div>}
    </div> */}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
