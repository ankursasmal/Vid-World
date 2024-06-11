 import React from 'react'
 import style from './VedioRunClick.module.css'

 import React, { useContext, useState } from 'react'
 import style from './VedioRunpage.module.css'
  
 import {Clickurl,ClickSearchID} from './ClickVedioSearchImg'
 
// import {SearchimgvedioRunID} from './SearchVedioRunImg'
  
  function VedioRunClick() {
    // 1 arr.
        let CilckArray=useContext(Clickurl);
        // 2.vedioid
 let inputdata=useContext(ClickSearchID);
// 3. id for side  vediorun
let [imgid,setimgid]=useState('');
  console.log(frontimgsearchID);
     // let SearchimgvediorunID=useContext(SearchimgvedioRunID);
     
   return (
    
     <div className='grid grid-cols-12 gap-1 my-2'>
     {/* ifream disply korar media  src="https://www.youtube.com/embed/as ->it is only add (vedioId)" */}
      {/* grid 1 */}
       <div className='col-span-8 '>
     <iframe  className='w-[50vw] h-[30vw] mr-4 object-cover' src={`https://www.youtube.com/embed/${inputdata||imgid}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay encrypted-media; gyroscope; picture-in-picture; web-share " allowfullscreen ></iframe>   
  </div>  
   

    {/* /grid 2 */}
           <div className='col-span-4'> 
         
 {Array.isArray(CilckArray) ? 

  <div className={` ${style.textsize}   my-4   flex items-center flex-col`}>
        {CilckArray.map((e,i) => {
  return (
             
    <div key={i} className='flex flex-col w-[85vw] h-[53vw]  my-[5px] mx-4 rounded-lg   md:w-[18vw] md:h-[13vw] md:[27vw] '>
    <img  className='w-[85vw] h-[50vw] p-[3px]   rounded-lg   md:w-[18vw] md:h-[10vw] md:[27vw]   object-cover' src={e.snippet.thumbnails.default.url} alt="" onClick={()=>{
                 setimgid(e.id.videoId);
             }} />
 <div className='flex  flex-col '>
    <a >{e.snippet.title}</a>
    <a>{e.channelTitle}  </a>
          <a>{e.publishTime} </a>
  </div>
        </div>
    )

 
})  
}  
  
</div>:<p>i am from serch val</p>}
     
    
 
   </div>
    </div>
  )
}

 
 
 export default VedioRunClick
 
