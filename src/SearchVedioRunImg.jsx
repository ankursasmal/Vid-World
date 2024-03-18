import React, { createContext, useContext, useEffect, useState } from 'react'
import VedioRunpage from './VedioRunpage';
import style from './SearchVedioRunImg.module.css'
import {Servalue} from './App'
const SearchimgvedioRunID=createContext();

function SearchVedioRun() {
   let context=useContext(Servalue);

    let url='https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&key=AIzaSyBVT5-sJgmeNByN7a8o7spPyxGU371keMQ&maxResults=5';
    let [arr,setarr]=useState([]);
    let [id4,setidpass]=useState('');
 
       //***  below use effect hook under kora kaj korala hoto
        async function seachh(){
     
          let res=await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=2&q=${context}&key=AIzaSyBLlZL-IEq1I8eDpxfFXg6sxLaJ64hCYa8`);
          let data=await res.json();
       let {items}=data;
            setarr(items);
   }
   // for all vedio use Effect dependency none only 1 time work But in seacch  case {Servalue}
   // janno bara bar api valu render so useEffect->last moment work and disply change
   useEffect(()=>{
        seachh();
   },[context]);

  return (
   <SearchimgvedioRunID.Provider value={id4}> 
    <div className={` ${style.textsize}   my-3   flex items-center justify-between flex-wrap`}>
       {/* ifream disply korar media  src="https://www.youtube.com/embed/as ->it is only add (vedioId)" */}
       {arr.map((e,i) => {
  return (
             
    <div key={i} className='flex flex-col w-[85vw] h-[53vw]  my-[5px] mx-4 rounded-lg   md:w-[18vw] md:h-[13vw] md:[27vw] '>
    <img  className='w-[85vw] h-[50vw] p-[3px]   rounded-lg   md:w-[18vw] md:h-[10vw] md:[27vw]   object-cover' src={e.snippet.thumbnails.default.url} alt="" onClick={()=>{
                 setidpass(e.id.videoId);
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
{/* dila infinite cholcha */}
{/* <VedioRunpage /> */}

</div>
</SearchimgvedioRunID.Provider>
   )
}


export default SearchVedioRun
export {SearchimgvedioRunID}
 
