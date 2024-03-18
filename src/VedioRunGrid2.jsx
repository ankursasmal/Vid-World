import React, { useContext } from 'react'
import SearchVedioRunImg from './SearchVedioRunImg'
import AllimgVedioRun from './AllimgVedioRun'
import {Servalue} from './App'
function VedioRunGrid2() {
 let context=useContext(Servalue);
  return (
    <div>
       {context===''?
<div> 
   <div style={{display:'none' }}> 
<SearchVedioRunImg />
</div>
<div style={{display:'block',visibility:'visible'}}>
     <AllimgVedioRun/>
     
     </div>
</div>
  :<div>
  <div style={{display:'none',visibility:'hidden'}}> 
      <AllimgVedioRun/>
 </div>
 <div style={{display:'block',visibility:'visible'}}>

 <SearchVedioRunImg  />
 </div>
</div>


 
} 
    </div>
  )
}

export default VedioRunGrid2
