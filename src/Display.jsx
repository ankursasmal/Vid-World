import React, { useContext } from 'react'
import { Servalue } from './App';
import { Link } from 'react-router-dom';
import FrontimgSearch from './FrontimgSearch';
import Frontimg from './Frontimg';

function Display() {
    const context = useContext(Servalue);
   return (
   <div > {context===''?
<div> <div style={{display:'none' }}> 
<FrontimgSearch/>
</div>
<div style={{display:'block',visibility:'visible'}}>
     <Frontimg/>
     
     </div>
</div>
  :<div>
  <div style={{display:'none',visibility:'hidden'}}> 
      <Frontimg/>
 </div>
 <div style={{display:'block',visibility:'visible'}}>

 <FrontimgSearch   />
 </div>
</div>
 
} 
  
    </div>
  )
}

export default Display
