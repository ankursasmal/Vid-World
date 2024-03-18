 import React, { useContext } from 'react'
 
import VedioRunGrid2 from './VedioRunGrid2';
import {FrontimgSearchID} from './FrontimgSearch';
import {FrontimgID} from './Frontimg';
 import { AllimgrunID } from './AllimgVedioRun';

// import {SearchimgvedioRunID} from './SearchVedioRunImg'
  
  function VedioRunpage() {
     
    let frontimgsearchID=useContext(FrontimgSearchID);
    let Frontimgid=useContext(FrontimgID);
    let AllimgvediorunId=useContext(AllimgrunID);
    
    // let SearchimgvediorunID=useContext(SearchimgvedioRunID);
     
   console.log(AllimgvediorunId);
  return (
     <div className='grid grid-cols-12 gap-1 my-2'>
     {/* ifream disply korar media  src="https://www.youtube.com/embed/as ->it is only add (vedioId)" */}
      {/* grid 1 */}
      <div className='col-span-8 '>
     <iframe  className='w-[50vw] h-[30vw] mr-4 object-cover' src={`https://www.youtube.com/embed/${frontimgsearchID||Frontimgid||AllimgvediorunId}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay encrypted-media; gyroscope; picture-in-picture; web-share " allowfullscreen ></iframe>   
  </div>  
  
    {/* /grid 2 */}
    <div className='col-span-4'> 
    <VedioRunGrid2 />
 </div>
  </div>
  )
}

export default VedioRunpage
