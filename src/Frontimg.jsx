import React, { useEffect, useState } from 'react'
import style from './Frontimg.module.css'
import VedioRunpage from './VedioRunpage';
import { createContext } from 'react';
const FrontimgID=createContext();


 function Frontimg() {
    let url='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=AIzaSyBLlZL-IEq1I8eDpxfFXg6sxLaJ64hCYa8&maxResults=2';
    let [values,setval]=useState([]);
let [id,setidpass]=useState('');
   
    //***  below use effect hook under kora kaj korala hoto
function fun(){
    fetch(url).then(res=>res.json()).then(data=>{ 
     let {items}=data;
      setval(items);
    console.log(values);
  
})
}

useEffect(()=>{
fun();
},[]);
  return (
    <FrontimgID.Provider value={id} > 
 <div className={` ${style.textsize}   my-3   flex items-center justify-between flex-wrap`}>
       {/* ifream disply korar media  src="https://www.youtube.com/embed/as ->it is only add (vedioId)" */}
       {values.map((e,i) => {
 
  return (

    <div key={i} className='flex flex-col w-[85vw] h-[53vw]  my-[5px] mx-4 rounded-lg   md:w-[18vw] md:h-[13vw] md:[27vw] '>
             <img  className='w-[85vw] h-[50vw] p-[3px]    rounded-lg   md:w-[18vw] md:h-[10vw] md:[27vw]   object-cover' src={e.snippet.thumbnails.default.url} alt="" onClick={()=>{
                setidpass(e.id);
             }} />
 <div className='flex  flex-col '>
    <a className='text-[30px]'>{e.snippet.title}</a>
    <a>{e.snippet.channelTitle} | {`${e.statistics.viewCount/1000 >>0}`}{" "}views</a>
          <a>{e.snippet.publishedAt} </a>
  </div>
        </div>
    //    <iframe key={i} className='	 w-[85vw] h-[50vw]  m-4 rounded-lg   md:w-[18vw] md:h-[10vw] md:[27vw]   object-cover' src={`https://www.youtube.com/embed/${e.id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay encrypted-media; gyroscope; picture-in-picture; web-share " allowfullscreen ></iframe>  
   )
 
})  
}
{/* importent for pass id */}
 <VedioRunpage />
    </div>
    </FrontimgID.Provider>
  )
}


export default Frontimg
export {FrontimgID}