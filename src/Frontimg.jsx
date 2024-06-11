import React, { useEffect, useState } from 'react'
import style from './Frontimg.module.css'
import VedioRunpage from './VedioRunpage';
import {Link} from 'react-router-dom'
import { createContext } from 'react';
const FrontimgID=createContext();
const UrlvedioRundata=createContext();

 function Frontimg() {
  let apikey="AIzaSyBH13omGAg4EhFKIM56okxYCXW89FxvHUI";
  let apikey2='AIzaSyBZn5AL6Kq1NVgHeyVGMrIKO7EOeL7kP50';
    let url='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=AIzaSyCuQrip2LNCteALTv7_BLsrykbuawoIBMk&maxResults=2';
    let [arr2,setval]=useState([]);
let [id,setidpass]=useState('');
let [show,setshow]=useState(false);   
    //***  below use effect hook under kora kaj korala hoto
function fun(){
    fetch(url).then(res=>res.json()).then(data=>{ 
     let {items}=data;
      setval(items);
 })
}

useEffect(()=>{
fun();
},[]);
 

  return (
    <FrontimgID.Provider value={id} > 
<UrlvedioRundata.Provider value={arr2}> 
 
   <div className={` ${style.textsize}   my-4   flex items-center justify-between flex-wrap`}>
       {/* ifream disply korar media  src="https://www.youtube.com/embed/as ->it is only add (vedioId)" */}
       {arr2.map((e,i) => {
 
  return (

    <div key={i} className='flex flex-col w-[85vw] h-[53vw]  my-[5px] mx-4 rounded-lg   md:w-[18vw] md:h-[13vw] md:[27vw] '>
   {/* <Link to="/video">  */}
  <img  className='w-[85vw] h-[50vw] p-[3px] rounded-lg md:w-[18vw] md:h-[10vw] md:[27vw] object-cover' src={e.snippet.thumbnails.default.url} alt="" onClick={()=>{
                setidpass(e.id);
                setshow(true);
             }} />
              {/* </Link> */}
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
</div>
<VedioRunpage/>
{/* importent for pass id */}

 
    </UrlvedioRundata.Provider>
    </FrontimgID.Provider>
  )
}


export default Frontimg
export {FrontimgID}
export {UrlvedioRundata}