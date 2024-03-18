import React, { useEffect, useState } from 'react'
 import { IoEarthSharp } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
 import { AiOutlineLike } from "react-icons/ai";
import { LuMessageCircle } from "react-icons/lu";
import { IoIosShareAlt } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";


//***1. channel id wise all vedio only channelId alada channel wise hoba 
const url1='https://youtube.googleapis.com/youtube/v3/search?key=AIzaSyBVT5-sJgmeNByN7a8o7spPyxGU371keMQ&channelId=UCwfaAHy4zQUb2APNOGXUCCA&part=snippet,id&order=date&maxResults=3' ;
//***2.  most popular vedio link below only key is my from-> console.google.com
    let url='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=AIzaSyBVT5-sJgmeNByN7a8o7spPyxGU371keMQ&maxResults=1';
  
function Allvedio() {
  let [values,setval]=useState([]);

   
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
    <div>
         
   

  {/* ifream disply korar media  src="https://www.youtube.com/embed/as ->it is only add (vedioId)" */}
 {values.map((e,i) => {
  return (
    <div key={i} className='flex flex-col my-5  py-2'>
    <div className='flex p-3 justify-between items-center'>
    <div className='flex items-center '>
      <img className='border rounded-full w-[70px] h-[70px] ' src={`${e.snippet.thumbnails.default.url}`} alt=""   />
    <div className='flex ml-4 flex-col justify-evenly'>
      <div className='flex items-center text-3xl'> 
      <h3 className='pr-1 text-blue-500 namefont'>{e.snippet.channelTitle} .</h3>
      <a className='text-blue-500 namefont'> Follow</a>
      </div>
      <div className='flex items-center '> 
      <a className='pr-.5px text-black'>{e.snippet.publishedAt}.</a>
      <IoEarthSharp className='pl-1 text-2xl'/>
     </div> 
    </div>
    
    </div>
    <div className='flex items-center '>
    
     <BsThreeDots className='text-3xl pl-1 mx-1' />
    
     <RxCross1 className='text-2xl pl-1 mr-1'/>
    
    </div>
    
    </div>
   <div className='mt-1 flex flex-col '>

   <iframe key={i} className='h-[200px] w-[100%]   lg:h-[700px] w-[100%] md:w-[100%] h-[500px]  object-cover' src={`https://www.youtube.com/embed/${e.id}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay encrypted-media; gyroscope; picture-in-picture; web-share " allowfullscreen ></iframe>  
   <div className='mt-1'>
 
    </div>
       </div>  
        
        <div className='flex my-2 justify-between item-center'>
<div className='flex items-center justify-start pl-2'>
<img src="" alt="" />

<a>Number</a>
</div>
<div className='flex items-center '>

<div className='flex item-center mx-3 '>
       <a className='px-1'>{`${e.statistics.commentCount}`/1000 .toFixed(1)} {"k"}{' '}comments</a>
 </div>
<div className='flex item-center mr-2'>
  <a className='px-1'>9</a>
  <a>share</a>
</div>
</div>
</div>
<div className='flex items-center justify-start pl-2'>

</div>
<hr className='my-3'/>

<div className='py-2 px-2 flex justify-between items-center text-2xl md:text-3xl'>
  <button className='flex items-center justify-center mr-.5 rounded-full bg-slate-200 p-5 w-[30%]'>
  <AiOutlineLike />
  <a>{`${e.statistics.likeCount}`/1000 .toFixed(1)} {"k"}</a>

  </button>
  <button className='flex items-center justify-center mr-.5 rounded-full bg-slate-200 p-5  w-[30%] '>
  <LuMessageCircle />
  <a>{`${e.statistics.commentCount}`/1000 .toFixed(1)} {"k"}</a>
  </button> <button className='flex items-center justify-center mr-.5 rounded-full bg-slate-200 p-5  w-[30%]'>
  <IoIosShareAlt />
  <a>{`{${e.statistics.favoriteCount}`/1000 .toFixed(1)} {"k"}</a>

  </button>

</div>
<hr className='my-3'/>
</div> 
  )
})  
}
 

    </div>
  )
}

export default Allvedio
