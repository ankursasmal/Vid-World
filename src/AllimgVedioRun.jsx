import React, { createContext, useEffect, useState } from 'react'
import style from './AllimgVedioRun.module.css' 
import VedioRunpage from './VedioRunpage';
const AllimgrunID=createContext();

function AllimgVedioRun() {
    let url='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=AIzaSyBZn5AL6Kq1NVgHeyVGMrIKO7EOeL7kP50&maxResults=2';
    let [values,setval]=useState([]);
    let [id3,setidpass1]=useState('');

   
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
    <AllimgrunID.Provider value={id3} > 

<div className={` ${style.textsize}   my-4   flex items-center justify-between flex-wrap`}>
       {/* ifream disply korar media  src="https://www.youtube.com/embed/as ->it is only add (vedioId)" */}
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
      </div>

    </AllimgrunID.Provider>
  )
}

export default AllimgVedioRun
export {AllimgrunID}



 