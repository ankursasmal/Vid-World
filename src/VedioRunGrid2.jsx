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
{/* <SearchVedioRunImg /> */}
</div>
<div style={{display:'block',visibility:'visible'}}>
{/* <div className={` ${style.textsize}   my-4   flex items-center justify-between flex-wrap`}>
        {values.map((e,i) => {
 
  return (

    <div key={i} className='flex flex-col w-[85vw] h-[53vw]  my-[5px] mx-4 rounded-lg   md:w-[18vw] md:h-[13vw] md:[27vw] '  >
             <img  className='w-[85vw] h-[50vw] p-[3px]    rounded-lg   md:w-[18vw] md:h-[10vw] md:[27vw]   object-cover' src={e.snippet.thumbnails.default.url} alt=""  onClick={()=>{
      setidpass1(e.id);
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
      </div> */}
     
     </div>
</div>
  :<div>
  <div style={{display:'none',visibility:'hidden'}}> 
      {/* <AllimgVedioRun/> */}
 </div>
 <div style={{display:'block',visibility:'visible'}}>

 {/* <SearchVedioRunImg  /> */}
 </div>
</div>


 
} 
    </div>
  )
}

export default VedioRunGrid2
