import React from "react";
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <h1>Lambda Pizza</h1>
      <p>A Coder's Delight</p>

      <div>
      <Link to='/Pizza' className='orderPizza'> 
      <h3>Order yours now!</h3>
      </Link>
      </div>
    </>
  );
};
export default Home;