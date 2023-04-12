import React from 'react';
import { Link,Outlet } from 'react-router-dom';

const Technologies = () => {
  return (
    <div>
      <h1 style={{color:"green",textAlign:"center"}}>Technology</h1>
      <div className='main-div'>
        <div className="left">
         <Link className='link' to="html">HTML</Link>
         <Link className='link' to="css">CSS</Link>
         <Link className='link' to="javascript">JAVASCRIPT</Link>
         <Link className='link' to="React">REACT</Link>
            
        </div>
        <div className="right">
        <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default Technologies
