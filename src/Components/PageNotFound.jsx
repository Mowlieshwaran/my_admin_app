import React from "react";
import image from '../Assets/Pagenotfound.jpg'
import './PageNotfound.css'
import { useSelector } from "react-redux";

function Error() {
  const store = useSelector(items => items.privateroute

  )


  return (
    <>
      <nav className="navigate">
        <img className='notfound' src={image} alt="errorimage"></img>
        {store ? <a href='/dashboard'> Dashboard</a>
          : <a href='/'> Login</a>
          }
      </nav>

    </>
  )
}

export default Error 
