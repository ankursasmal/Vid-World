 import React, { useContext, useState } from 'react'
 import style from './VedioRunpage.module.css'
 import {Servalue} from './App'

 import {FrontimgSearchID} from './FrontimgSearch';
import {FrontimgID} from './Frontimg';
 import {SearchUrl} from './FrontimgSearch'
import {UrlvedioRundata} from './Frontimg'

// import {SearchimgvedioRunID} from './SearchVedioRunImg'
  
  function VedioRunpage() {
    let [IdSearchvedioimg,setIdSearchvedioimg]=useState();
    let [Idvedioimg,setIdvedioimg]=useState();
 let inputdata=useContext(Servalue);
    let frontimgsearchID=useContext(FrontimgSearchID);
    let Frontimgid=useContext(FrontimgID);
     let seachdata=useContext(SearchUrl);
    const AllvedioRundata=useContext(UrlvedioRundata);

  console.log(frontimgsearchID,typeof(AllvedioRundata));
     // let SearchimgvediorunID=useContext(SearchimgvedioRunID);
     
   return (
    
     <div className='grid grid-cols-12 gap-1 my-2'>
     {/* ifream disply korar media  src="https://www.youtube.com/embed/as ->it is only add (vedioId)" */}
      {/* grid 1 */}
       <div className='col-span-8 '>
     <iframe  className='w-[50vw] h-[30vw] mr-4 object-cover' src={`https://www.youtube.com/embed/${frontimgsearchID||Frontimgid||IdSearchvedioimg||Idvedioimg}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay encrypted-media; gyroscope; picture-in-picture; web-share " allowfullscreen ></iframe>   
  </div>  
   

    {/* /grid 2 */}
           <div className='col-span-4'> 
           <div>
       {inputdata===''?
       <div>
        <div>
  <div style={{  display:'none' }}>
{Array.isArray(seachdata) ? 

  <div className={` ${style.textsize}   my-4   flex items-center flex-col`}>
        {seachdata.map((e,i) => {
  return (
             
    <div key={i} className='flex flex-col w-[85vw] h-[53vw]  my-[5px] mx-4 rounded-lg   md:w-[18vw] md:h-[13vw] md:[27vw] '>
    <img  className='w-[85vw] h-[50vw] p-[3px]   rounded-lg   md:w-[18vw] md:h-[10vw] md:[27vw]   object-cover' src={e.snippet.thumbnails.default.url} alt="" onClick={()=>{
                 setIdSearchvedioimg(e.id.videoId);
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
<div> 
   <div style={{ display:'block',visibility:'visible'  }}> 
   {Array.isArray(AllvedioRundata) ? 

<div className={` ${style.textsize}   my-4   flex items-center flex-col `}>
      {AllvedioRundata.map((e,i) => {

return (

  <div key={i} className='flex flex-col w-[85vw] h-[53vw]  my-[5px] mx-4 rounded-lg   md:w-[18vw] md:h-[13vw] md:[27vw] '  >
           <img  className='w-[85vw] h-[50vw] p-[3px]    rounded-lg   md:w-[18vw] md:h-[10vw] md:[27vw]   object-cover' src={e.snippet.thumbnails.default.url} alt=""  onClick={()=>{
    setIdvedioimg(e.id);
 }} />
<div className='flex  flex-col '>
  <a className='text-[30px]'>{e.snippet.title}</a>
  <a>{e.snippet.channelTitle} | {`${e.statistics.viewCount/1000 >>0}`}{" "}views</a>
        <a>{e.snippet.publishedAt} </a>
</div>
      </div>
  )

})  
}
    </div> 
:<p>i am from img</p>}
</div>
</div>
 
</div>
  :
  
  <div>
    <div>
  <div style={{display:'block',visibility:'visible' }}> 
  {Array.isArray(seachdata) ? 

<div className={` ${style.textsize}   my-4   flex items-center flex-col`}>
      {seachdata.map((e,i) => {
return (
           
  <div key={i} className='flex flex-col w-[85vw] h-[53vw]  my-[5px] mx-4 rounded-lg   md:w-[18vw] md:h-[13vw] md:[27vw] '>
  <img  className='w-[85vw] h-[50vw] p-[3px]   rounded-lg   md:w-[18vw] md:h-[10vw] md:[27vw]   object-cover' src={e.snippet.thumbnails.default.url} alt="" onClick={()=>{
               setIdSearchvedioimg(e.id.videoId);
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
 <div>
  <div style={{display:'none'    }}>

  {Array.isArray(AllvedioRundata) ? 

<div className={` ${style.textsize}   my-3   flex items-center  flex-col`}>
      {AllvedioRundata.map((e,i) => {

return (

  <div key={i} className='flex flex-col w-[85vw] h-[53vw]  my-[5px] mx-4 rounded-lg   md:w-[18vw] md:h-[13vw] md:[27vw] '  >
           <img  className='w-[85vw] h-[50vw] p-[3px]    rounded-lg   md:w-[18vw] md:h-[10vw] md:[27vw]   object-cover' src={e.snippet.thumbnails.default.url} alt=""  onClick={()=>{
    setIdvedioimg(e.id);
 }} />
<div className='flex  flex-col '>
  <a className='text-[30px]'>{e.snippet.title}</a>
  <a>{e.snippet.channelTitle} | {`${e.statistics.viewCount/1000 >>0}`}{" "}views</a>
        <a>{e.snippet.publishedAt} </a>
</div>
      </div>
  )

})  
}
    </div> 
:<p>i am fron img</p>}
 </div>
</div>
  </div> 
} 
</div>

   </div>
    </div>
  )
}

export default VedioRunpage
